import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'//хз что это, типо с помощью этого мы сможем динамически тригерить изменение информации об ошибке

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$ = new Subject//информация о ошибке будет стримом и равняться Subject, нам понадобятся свойства-методы этого обьекта

  //метод сервиса для уведомления об ошибке
  handel(message: string) {
    this.error$.next(message)
    //свойство next обьекта Subject уведомляет всех подписчиков об ошибке, в него передаем само сообщение
  }

  //метод сервиса для очистки ошибки
  clear() {
    this.error$.next('')//заменяем сообщение пустой строкой
  }

}
