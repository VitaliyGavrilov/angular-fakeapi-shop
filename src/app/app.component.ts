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
import { Observable, tap } from 'rxjs';//Observable - это название механизма, который используется в Angular для программирования асинхронных потоков данных в декларативном стиле. Observable является синонимом термина stream . К асинхронным потокам данных обычно относятся такие концепции, как события, http запросы и триггеры в коде.
import { ModalService } from './services/modal.service';
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
  loading = false //реализуем индикатор загруззки, для этого создаем поле-состояние, в таких случаях не обязательно указывать тип
  products$: Observable<IProduct[]>//$-обозначает что это стрим
  term = ' '
  //создаем конструктор, в приватное поле prouctsService положим класс-сервис ProductService
  constructor(public productsService: ProductService, public modalService: ModalService) {
  }
  //Важный вопрос, в какой момент делать запрос, ответ: когда приложение инициализируеться
  //для инициаоизации мы можем имплементироваться от интерфейса OnInit
  //это обязывает класс реализовывать определенные методы, а имеено метод ngOnInit
  //имплементироваться от интерфейса OnInit для реализации метода ngOnInit необзательно, но считается хорошей практикой
  ngOnInit(): void {
    this.loading = true // при запросе индикатор загрузки будет тру
    // this.products$ = this.prouctsService.getAll().pipe(tap(()=> this.loading=false))
    //tap никак не меняет данные, только добавляет функционал, с его помощью будем менять значение переменной индикатора загрузки
    this.productsService.getAll().subscribe(products => {
      this.loading=false
    })
  }
}
