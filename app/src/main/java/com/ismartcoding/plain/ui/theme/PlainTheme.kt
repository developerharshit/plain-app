package com.ismartcoding.plain.ui.theme

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.unit.dp

object PlainTheme {
    val PAGE_HORIZONTAL_MARGIN = 16.dp
    val PAGE_TOP_MARGIN = 8.dp
    val CARD_RADIUS = 12.dp
    val APP_BAR_HEIGHT = 64.dp
    const val ANIMATION_DURATION = 350

    @Composable
    fun getCardModifier(index: Int = 0, size: Int = 1, selected: Boolean = false): Modifier {
        val shape = if (index == 0) {
            if (size == 1) {
                RoundedCornerShape(CARD_RADIUS)
            } else {
                RoundedCornerShape(topStart = CARD_RADIUS, topEnd = CARD_RADIUS)
            }
        } else if (index == size - 1) {
            RoundedCornerShape(bottomStart = CARD_RADIUS, bottomEnd = CARD_RADIUS)
        } else {
            RectangleShape
        }
        return Modifier
            .fillMaxWidth()
            .padding(horizontal = PAGE_HORIZONTAL_MARGIN)
            .clip(shape)
            .background(
                color = if (selected) MaterialTheme.colorScheme.tertiaryContainer else  MaterialTheme.colorScheme.cardContainer(),
                shape = shape,
            )
    }
}