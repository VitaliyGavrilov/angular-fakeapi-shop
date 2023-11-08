// Основной компонет приложения

//Базования структура Angular такая:
// Все сущности это классы
// В папке app собирается приложение
//-стили и шаблон описанны в отдельных файлах
//-в module настраиваем функционал
//-а в component собираем приложение из блоков и компонентов
// Файл main.ts запускает приложение

//Импорты
import { Component } from '@angular/core';//Декоратор @Component позволяет идентифицировать класс как компонент.
import { IProduct } from './models/product';
import { products as data } from './data/proructs';
//используем декоратор
@Component({
  selector: 'app-root', //селектор, название компонента для шаблона(html тег), в index.html его рендерим
  templateUrl: './app.component.html', // шаблон
  styleUrls: ['./app.component.css']// стили
})
//создание и экспорт класса
export class AppComponent {
  // в рамках этого класса обьявляем с чем можем работать и используем это в шаблоне
  title = 'angular-fakeapi-shop';//мы обьявили это поле в классе, и теперь можем использовать в шаблоне
  products: IProduct[] = data//создали поле, обозначили тип данных, присвоили значение
}
