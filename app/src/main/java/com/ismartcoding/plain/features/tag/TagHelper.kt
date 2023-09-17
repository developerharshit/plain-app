package com.ismartcoding.plain.features.tag

import androidx.sqlite.db.SimpleSQLiteQuery
import com.ismartcoding.lib.content.ContentWhere
import com.ismartcoding.plain.data.enums.DataType
import com.ismartcoding.plain.db.*
import com.ismartcoding.plain.features.note.NoteHelper
import kotlinx.datetime.Clock

object TagHelper {
    private val tagDao: TagDao by lazy {
        AppDatabase.instance.tagDao()
    }

    private val tagRelationDao: TagRelationDao by lazy {
        AppDatabase.instance.tagRelationDao()
    }

    fun count(type: DataType): List<DTagCount> {
        return tagRelationDao.getAll(type.value)
    }

    fun getAll(type: DataType): List<DTag> {
        return tagDao.getAll(type.value)
    }

    fun get(id: String): DTag? {
        return tagDao.getById(id)
    }

    fun addOrUpdate(id: String, updateItem: DTag.() -> Unit): String {
        var item = if (id.isNotEmpty()) tagDao.getById(id) else null
        var isInsert = false
        if (item == null) {
            item = DTag()
            isInsert = true
        }

        item.updatedAt = Clock.System.now()

        updateItem(item)

        if (isInsert) {
            tagDao.insert(item)
        } else {
            tagDao.update(item)
        }

        return item.id
    }

    fun delete(id: String) {
        return tagDao.delete(id)
    }

    fun getTagRelationsByKeys(keys: Set<String>, type: DataType): List<DTagRelation> {
        return tagRelationDao.getAllByKeys(keys, type.value)
    }

    fun getTagRelationsByKey(key: String, type: DataType): List<DTagRelation> {
        return tagRelationDao.getAllByKey(key, type.value)
    }

    fun getKeysByTagId(tagId: String): List<String> {
        return tagRelationDao.getKeysByTagId(tagId)
    }

    fun getKeysByTagIds(tagIds: Set<String>): List<String> {
        val items = tagRelationDao.getAllByTagIds(tagIds)
        return items.groupBy { it.key }.filter { it.value.size == tagIds.size }.map { it.key }
    }

    fun addTagRelations(items: List<DTagRelation>) {
        tagRelationDao.insert(*items.toTypedArray())
    }

    fun deleteTagRelationsByTagId(tagId: String) {
        tagRelationDao.deleteByTagId(tagId)
    }

    fun deleteTagRelationByKeys(keys: Set<String>, type: DataType) {
        keys.chunked(50).forEach { chunk ->
            tagRelationDao.deleteByKeys(chunk.toSet(), type.value)
        }
    }

    fun deleteTagRelationByKeysTagId(keys: Set<String>, tagId: String) {
        keys.chunked(50).forEach { chunk ->
            tagRelationDao.deleteByKeysTagId(chunk.toSet(), tagId)
        }
    }

    fun deleteTagRelationByKeysTagIds(keys: Set<String>, tagIds: Set<String>) {
        keys.chunked(50).forEach { chunk ->
            tagRelationDao.deleteByKeysTagIds(chunk.toSet(), tagIds)
        }
    }
}