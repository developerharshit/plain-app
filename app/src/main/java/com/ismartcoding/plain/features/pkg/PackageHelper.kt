package com.ismartcoding.plain.features.pkg

import android.content.Context
import android.content.Intent
import android.content.pm.ApplicationInfo
import android.content.pm.PackageInfo
import android.content.pm.PackageManager
import android.content.pm.Signature
import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.drawable.Drawable
import android.net.Uri
import android.os.UserHandle
import com.ismartcoding.lib.helpers.SearchHelper
import com.ismartcoding.lib.logcat.LogCat
import com.ismartcoding.lib.pinyin.Pinyin
import com.ismartcoding.plain.packageManager
import com.ismartcoding.plain.storageStatsManager
import kotlinx.datetime.Instant
import java.io.File
import javax.security.cert.X509Certificate

object PackageHelper {
    private val appLabelCache: MutableMap<String, String> = HashMap()
    private val appTypeCache: MutableMap<String, String> = HashMap()
    private val appCertsCache: MutableMap<String, List<DCertificate>> = HashMap()

    fun getPackageStatuses(ids: List<String>): Map<String, Boolean> {
        val packages = packageManager.getInstalledPackages(0).map { it.packageName }
        val map = mutableMapOf<String, Boolean>()
        ids.forEach { id ->
            map[id] = packages.contains(id)
        }

        return map
    }

    fun isUninstalled(packageName: String): Boolean {
        return getPackageStatuses(listOf(packageName))[packageName] == false
    }

    fun search(query: String, limit: Int, offset: Int): List<DPackage> {
        var type = ""
        var text = ""
        var ids = setOf<String>()
        if (query.isNotEmpty()) {
            val queryGroups = SearchHelper.parse(query)
            var t = queryGroups.find { it.name == "type" }
            if (t != null) {
                type = t.value
            }
            t = queryGroups.find { it.name == "text" }
            if (t != null) {
                text = t.value
            }
            t = queryGroups.find { it.name == "ids" }
            if (t != null) {
                ids = t.value.split(",").toSet()
            }
        }

        val apps = mutableListOf<DPackageLight>()
        val appInfos = packageManager.getInstalledApplications(0)
        appInfos.forEach { appInfo ->
            if (ids.isNotEmpty() && !ids.contains(appInfo.packageName)) {
                return@forEach
            }

            if (type.isNotEmpty()) {
                val appType = getAppType(appInfo)
                if (appType != type) {
                    return@forEach
                }
            }
            apps.add(DPackageLight(appInfo, appInfo.packageName, getLabel(appInfo)))
        }

        if (query.isEmpty() || text.isEmpty()) {
            return apps.sortedBy { Pinyin.toPinyin(it.name).lowercase() }.drop(offset).take(limit).map {
                getPackage(it.appInfo, packageManager.getPackageInfo(it.id, PackageManager.GET_SIGNING_CERTIFICATES))
            }
        }

        return apps.asSequence().map { getPackage(it.appInfo, packageManager.getPackageInfo(it.id, PackageManager.GET_SIGNING_CERTIFICATES)) }.filter {
            text.isEmpty()
                    || it.name.contains(text, true)
                    || it.id.contains(text, true)
                    || it.certs.any { c ->
                c.issuer.contains(text, true)
                        || c.subject.contains(text, true)
            }
        }.sortedBy { Pinyin.toPinyin(it.name).lowercase() }.drop(offset).take(limit).toList()
    }

    private fun getAppType(appInfo: ApplicationInfo): String {
        var appType = appTypeCache[appInfo.packageName]
        if (appType == null) {
            appType = if (ApplicationInfoCompat.isSystemApp(appInfo)) "system" else "user"
            appTypeCache[appInfo.packageName] = appType
        }

        return appType
    }

    private fun getCerts(packageInfo: PackageInfo): List<DCertificate> {
        var certs = appCertsCache[packageInfo.packageName]
        if (certs == null) {
            certs = mutableListOf<DCertificate>()
            val signatures = signatures(packageInfo)
            for (signature in signatures) {
                val cert = X509Certificate.getInstance(signature.toByteArray())
                certs.add(
                    DCertificate(
                        cert.issuerDN.name,
                        cert.subjectDN.name,
                        cert.serialNumber.toString(),
                        Instant.fromEpochMilliseconds(cert.notBefore.time),
                        Instant.fromEpochMilliseconds(cert.notAfter.time)
                    )
                )
            }
            appCertsCache.put(packageInfo.packageName, certs)
        } else {
            certs = mutableListOf()
        }

        return certs
    }

    fun getPackage(packageName: String): DPackage {
        val flags = PackageManager.GET_SIGNING_CERTIFICATES
        val packageInfo = packageManager.getPackageInfo(packageName, flags)
        val appInfo = packageManager.getApplicationInfo(packageName, 0)

        return getPackage(appInfo, packageInfo)
    }

    private fun getPackage(appInfo: ApplicationInfo, packageInfo: PackageInfo): DPackage {
        return DPackage(
            appInfo,
            packageInfo,
            appInfo.packageName,
            getLabel(appInfo),
            getAppType(appInfo),
            packageInfo.versionName ?: "",
            appInfo.sourceDir,
            File(appInfo.publicSourceDir).length(),
            getCerts(packageInfo),
            Instant.fromEpochMilliseconds(packageInfo.firstInstallTime),
            Instant.fromEpochMilliseconds(packageInfo.lastUpdateTime),
        )
    }

    fun getPackageDetail(packageName: String): DPackageDetail {
        val flags = PackageManager.GET_SIGNING_CERTIFICATES
        val packageInfo = packageManager.getPackageInfo(packageName, flags)
        val appInfo = packageManager.getApplicationInfo(packageName, 0)
        return DPackageDetail(
            appInfo,
            packageInfo,
            appInfo.packageName,
            getLabel(appInfo),
            getAppType(appInfo),
            packageInfo.versionName ?: "",
            appInfo.sourceDir,
            File(appInfo.publicSourceDir).length(),
            getCerts(packageInfo),
            Instant.fromEpochMilliseconds(packageInfo.firstInstallTime),
            Instant.fromEpochMilliseconds(packageInfo.lastUpdateTime),
        )
    }

    fun cacheAppLabels() {
        try {
            val appInfos = packageManager.getInstalledApplications(0)
            appInfos.forEach { appInfo ->
                try {
                    appLabelCache[appInfo.packageName] = packageManager.getApplicationLabel(appInfo).toString()
                } catch (ex: Exception) {
                    LogCat.d(ex.toString())
                }
            }
        } catch (ex: Exception) {
            LogCat.d(ex.toString())
        }
    }

    fun count(query: String): Int {
        if (query.isEmpty()) {
            return packageManager.getInstalledApplications(0).count()
        } else {
            val queryGroups = SearchHelper.parse(query)
            if (queryGroups.size == 1) {
                val t = queryGroups.find { it.name == "type" }
                if (t != null) {
                    val type = t.value
                    return packageManager.getInstalledApplications(0).count { appInfo ->
                        getAppType(appInfo) == type
                    }
                }
            }
        }
        return search(query, Int.MAX_VALUE, 0).count()
    }

    private fun getLabel(packageInfo: ApplicationInfo): String {
        val key = packageInfo.packageName
        if (!appLabelCache.containsKey(key)) {
            try {
                appLabelCache[key] = packageManager.getApplicationLabel(packageInfo).toString()
            } catch (ex: Exception) {
                appLabelCache[key] = key
                LogCat.d(ex.toString())
            }
        }

        return appLabelCache[key] ?: ""
    }

    fun getLabel(context: Context, packageName: String): String {
        try {
            val pm = context.packageManager
            val applicationInfo = pm.getApplicationInfo(packageName, 0)
            return getLabel(applicationInfo)
        } catch (ex: Exception) {
            LogCat.d(ex.toString())
        }

        return ""
    }

    private fun drawableToBitmap(drawable: Drawable): Bitmap {
        val res = if (drawable.intrinsicWidth > 128 || drawable.intrinsicHeight > 128) {
            Bitmap.createBitmap(96, 96, Bitmap.Config.ARGB_8888)
        } else if (drawable.intrinsicWidth <= 64 || drawable.intrinsicHeight <= 64) {
            Bitmap.createBitmap(96, 96, Bitmap.Config.ARGB_8888)
        } else {
            Bitmap.createBitmap(drawable.intrinsicWidth, drawable.intrinsicHeight, Bitmap.Config.ARGB_8888)
        }
        val canvas = Canvas(res)
        drawable.setBounds(0, 0, res.width, res.height)
        drawable.draw(canvas)
        return res
    }

    fun getIcon(packageName: String): Bitmap {
        val applicationInfo = packageManager.getApplicationInfo(packageName, 0)
        val iconDrawable = packageManager.getApplicationIcon(applicationInfo)
        return drawableToBitmap(iconDrawable)
    }

    private fun signatures(packageInfo: PackageInfo): MutableSet<Signature> {
        val signatures: MutableSet<Signature> = mutableSetOf()
        val signingInfo = packageInfo.signingInfo
        if (signingInfo != null) {
            signingInfo.signingCertificateHistory?.let { signatures.addAll(it) }
            signingInfo.apkContentsSigners?.let { signatures.addAll(it) }
        }
        @Suppress("DEPRECATION")
        packageInfo.signatures?.let { signatures.addAll(it) }
        return signatures
    }

    fun uninstall(context: Context, packageName: String) {
        context.startActivity(Intent(Intent.ACTION_DELETE, Uri.parse("package:$packageName")).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK
        })
    }

    fun canLaunch(packageName: String): Boolean {
        return packageManager.getLaunchIntentForPackage(packageName) != null
    }

    fun launch(context: Context, packageName: String) {
        context.startActivity(packageManager.getLaunchIntentForPackage(packageName)?.apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK
        })
    }

    fun viewInSettings(context: Context, packageName: String) {
        context.startActivity(Intent().apply {
            action = android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS
            data = Uri.parse("package:$packageName")
            flags = Intent.FLAG_ACTIVITY_NEW_TASK
        })
    }
}