//Это компонент продукт, полсе создания его необходимо импортировать в app.module, и мы сможем использовать селектор как тег

//Импорты
import { Component } from "@angular/core";
//Декоратором обозначаем селектор и  шаблон, это обязательные поля
@Component({
  selector: 'app-product',// теперь селектор можно использовать как тег в шаблоне основного компонента app.component.html
  templateUrl: './product.component.html'// и содержимое шаблона будет в этом теге
})
//создание и экспорт класса
export class ProductComponent {}
