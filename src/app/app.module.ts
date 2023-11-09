//Этот файл нужен для настройки AppComponent(основного компонета приложения), используя декоратор NgModule

//Импорты
//библиотеки
import { NgModule } from '@angular/core';//декоратора, который принимает объект, свойства которого описывают метаданные модуля
import { BrowserModule } from '@angular/platform-browser';// служебный модуль отвечающий за работу приложения в браузере
import { AppRoutingModule } from './app-routing.module';// командой ng generate module app-routing --flat --module=app добавил роутинг
import { HttpClientModule } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//он нужен для работы фильтрации
//компоненты
import { AppComponent } from './app.component';//основнйо компонент приложения
import { ProductComponent } from './components/product/product.component';
import { GlobakErrorComponent } from './components/globak-error/globak-error.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';


//декоратор настраивает приложение, навешивает функционал
@NgModule({
  // создаем компоненты и импортируем их сюда, это позволит нам использвать их в виде тега в шаблоне, тег определяеться названием селектора
  declarations: [ //компоненты
    AppComponent,
    ProductComponent,
    GlobakErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
  ],
  imports: [ //дополнительные модули
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [], //провайдеры
  bootstrap: [AppComponent] //говорит с чего начинаеться приложение(модуль)
})
export class AppModule { }
