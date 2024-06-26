package com.ismartcoding.plain.features.pkg

import android.content.pm.ApplicationInfo
import android.content.pm.PackageInfo
import kotlinx.datetime.Instant

data class DPackage(
    val appInfo: ApplicationInfo,
    val packageInfo: PackageInfo,
    val id: String,
    val name: String,
    val type: String,
    val version: String,
    val path: String,
    val size: Long,
    val certs: List<DCertificate>,
    val installedAt: Instant,
    val updatedAt: Instant,
) {
    val hasLargeHeap: Boolean
        get() = appInfo.flags and ApplicationInfo.FLAG_LARGE_HEAP != 0
}

data class DPackageLight(
    val appInfo: ApplicationInfo,
    val id: String,
    val name: String,
)

data class DCertificate(val issuer: String, val subject: String, val serialNumber: String, val validFrom: Instant, val validTo: Instant)

data class DPackageDetail(
    val appInfo: ApplicationInfo,
    val packageInfo: PackageInfo,
    val id: String,
    val name: String,
    val type: String,
    val version: String,
    val path: String,
    val size: Long,
    val certs: List<DCertificate>,
    val installedAt: Instant,
    val updatedAt: Instant,
) {
    val hasLargeHeap: Boolean
        get() = appInfo.flags and ApplicationInfo.FLAG_LARGE_HEAP != 0

}