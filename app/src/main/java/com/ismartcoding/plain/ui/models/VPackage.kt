package com.ismartcoding.plain.ui.models

import android.graphics.drawable.Drawable
import com.ismartcoding.plain.features.pkg.DCertificate
import com.ismartcoding.plain.features.pkg.DPackage
import com.ismartcoding.plain.packageManager
import kotlinx.datetime.Instant

data class VPackage(
    val id: String,
    val name: String,
    val type: String,
    val version: String,
    val path: String,
    val size: Long,
    val certs: List<DCertificate>,
    val installedAt: Instant,
    val updatedAt: Instant,
    val icon: Drawable,
) {
    companion object {
        fun from(data: DPackage): VPackage {
            return VPackage(
                data.id,
                data.name,
                data.type,
                data.version,
                data.path,
                data.size,
                data.certs,
                data.installedAt,
                data.updatedAt,
                packageManager.getApplicationIcon(data.appInfo)
            )
        }
    }
}
