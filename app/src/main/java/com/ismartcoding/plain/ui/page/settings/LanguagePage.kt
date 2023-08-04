package com.ismartcoding.plain.ui.page.settings

import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.RadioButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.ismartcoding.plain.R
import com.ismartcoding.plain.data.enums.Language
import com.ismartcoding.plain.data.preference.LanguagePreference
import com.ismartcoding.plain.data.preference.LocalLocale
import com.ismartcoding.plain.ui.base.BottomSpace
import com.ismartcoding.plain.ui.base.DisplayText
import com.ismartcoding.plain.ui.base.PListItem
import com.ismartcoding.plain.ui.base.PScaffold
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import java.util.Locale

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LanguagePage(
    navController: NavHostController,
) {
    val context = LocalContext.current
    val language = LocalLocale.current
    val scope = rememberCoroutineScope()
    val list = mutableListOf<Locale?>()
    list.add(null)
    list.addAll(Language.locales)

    PScaffold(
        navController,
        content = {
            LazyColumn {
                item(key = language) {
                    DisplayText(text = stringResource(R.string.language))
                    Spacer(modifier = Modifier.height(16.dp))
                }
                item {
                    list.forEach {
                        PListItem(
                            title = it?.getDisplayLanguage(it) ?: stringResource(id = R.string.use_device_language),
                            onClick = {
                                scope.launch(Dispatchers.IO) {
                                    LanguagePreference.putAsync(context, it)
                                }
                            },
                        ) {
                            RadioButton(selected = (it == null && language == null) || (it?.language == language?.language && it?.country == language?.country), onClick = {
                                scope.launch(Dispatchers.IO) {
                                    LanguagePreference.putAsync(context, it)
                                }
                            })
                        }
                    }
                    BottomSpace()
                }
            }
        }
    )
}
