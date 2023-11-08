// Этот файл-сервис отвечает за работу с апи

//импорт декоратора с работы с сервером
import { Injectable } from "@angular/core";
//пакет для запросов
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { IProduct } from "../models/product";

@Injectable({
  providedIn: 'root'//благодоря этой записи, данный сервис будет автоматически зарегистрирован в корневом модуле, не надо будет регестрировать его самому в providers в файле app.module
})
export class ProductService {
  //данный сервис это абстрактный слой данныйх, который работает с конкретной сущностью, в нашем случае с продуктами
  //тут мы будем делать запросы на сервер чтобы получать эти данные
  constructor(private http: HttpClient) {
    //мы использовали модификатор private, хз что это
    //мы сказали что в поле http надо положить HttpClient
    //так же надо зарегистировать пакет(модуль) в app.module
  }
  //создаем метод класа-сервиса который будет делать запрос на сервис и получать данные
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
    // данная запись возвращает не данные а стрим, для понимая надо изучить rxjs

  }

}
