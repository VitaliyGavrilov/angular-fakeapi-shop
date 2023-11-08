//Этот файл нужен для настройки AppComponent(основного компонета приложения), используя декоратор NgModule

//Импорты
//библиотеки
import { NgModule } from '@angular/core';//декоратора, который принимает объект, свойства которого описывают метаданные модуля
import { BrowserModule } from '@angular/platform-browser';// служебный модуль отвечающий за работу приложения в браузере
import { AppRoutingModule } from './app-routing.module';// командой ng generate module app-routing --flat --module=app добавил роутинг
//компоненты
import { AppComponent } from './app.component';//основнйо компонент приложения
//декоратор настраивает приложение, навешивает функционал
@NgModule({
  declarations: [ //компоненты
    AppComponent
  ],
  imports: [ //дополнительные модули
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //провайдеры
  bootstrap: [AppComponent] //говорит с чего начинаеться приложение(модуль)
})
export class AppModule { }
