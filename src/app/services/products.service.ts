// Этот файл-сервис отвечает за работу с апи

//импорт декоратора с работы с сервером
import { Injectable } from "@angular/core";
//пакет для запросов
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http"
import { Observable, catchError, delay, retry, throwError, tap } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: 'root'//благодоря этой записи, данный сервис будет автоматически зарегистрирован в корневом модуле, не надо будет регестрировать его самому в providers в файле app.module
})
export class ProductService {
  //данный сервис это абстрактный слой данныйх, который работает с конкретной сущностью, в нашем случае с продуктами
  //тут мы будем делать запросы на сервер чтобы получать эти данные
  constructor(private http: HttpClient, private errorService: ErrorService) {
    //мы использовали модификатор private, хз что это
    //мы сказали что в поле http надо положить HttpClient
    //так же надо зарегистировать пакет(модуль) в app.module
  }
  products: IProduct[]=[]
  //создаем метод класа-сервиса который будет делать запрос на сервис и получать данные
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {params: new HttpParams().append('limit',15)})
      .pipe(
        delay(2000),
        retry(2),//это для повторного запроса вслучае ошибки
        tap(products => this.products = products),
        catchError(this.errorHandler.bind(this))
      )
    // данная запись возвращает не данные а стрим, для понимая надо изучить rxjs, в парамс мы передаем настройки, в данном случае ограничиваем количесво получаеммых данных и замедляем скорость

  }

  create(product:IProduct):Observable<IProduct> {
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product).pipe(tap(prod => this.products.push(prod)))
  }
  //создаем приватный метод сервиса для обработки ошибок
  private errorHandler (error: HttpErrorResponse) {
    //теперь тут мы можно выполнять каккой то код для обработки ошибок, напишем отдельный сервис для работы с ошибками, создами файлы командой ng g s services/error --skip-tests, g-генерейт(создать),s-сервис, а дальше путь,потом говорим что тесты не нужны
    this.errorService.handel(error.message)//написали сервис, импортировали, используем его методы
    return throwError(()=> error.message)
  }


}


