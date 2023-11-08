// Основной компонет приложения

//Базования структура Angular такая:
// Все сущности это классы
// В папке app собирается приложение
//-стили и шаблон описанны в отдельных файлах
//-в module настраиваем функционал
//-а в component собираем приложение из блоков и компонентов
// Файл main.ts запускает приложение

//Импорты
import { Component, OnInit } from '@angular/core';//Декоратор @Component позволяет идентифицировать класс как компонент.
import { IProduct } from './models/product';
import { products as data } from './data/proructs';
import { ProductService } from './services/products.service';
//используем декоратор
@Component({
  selector: 'app-root', //селектор, название компонента для шаблона(html тег), в index.html его рендерим
  templateUrl: './app.component.html', // шаблон
  styleUrls: ['./app.component.css']// стили
})
//создание и экспорт класса
export class AppComponent implements OnInit {

  // в рамках этого класса обьявляем с чем можем работать и используем это в шаблоне
  title = 'angular-fakeapi-shop';//мы обьявили это поле в классе, и теперь можем использовать в шаблоне
  products: IProduct[] = []//создали поле, обозначили тип данных, присвоили значение, сначала пустой массив, но делая запрос на сервер присвоим новое значение


  //создаем конструктор, в приватное поле prouctsService положим класс-сервис ProductService
  constructor(private prouctsService: ProductService) {
  }
  //Важный вопрос, в какой момент делать запрос, ответ: когда приложение инициализируеться
  //для инициаоизации мы можем имплементироваться от интерфейса OnInit
  //это обязывает класс реализовывать определенные методы, а имеено метод ngOnInit
  //имплементироваться от интерфейса OnInit для реализации метода ngOnInit необзательно, но считается хорошей практикой
  ngOnInit(): void {
    //через конструктор нам доступны методы класса ProductService
    // метод getAll возвращает стрим, для получения данных надо подписаться на стрим методом subscribe
    // полученные данные обозначаем как products и используем их
    this.prouctsService.getAll().subscribe( products => {
      this.products = products// присваиваем полю products значение полученных данных
    })
  }
}
