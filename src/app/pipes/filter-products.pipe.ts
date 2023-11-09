import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts'//название для шаблона
})
export class FilterProductsPipe implements PipeTransform {
  //у такого класса-пайпа есть один метод
  //он принимает массив продуктов, строку-запрос и на выход отдает массив продуктов
  transform(products: IProduct[], search: string): IProduct[] {
    if (search.length ===0) return products
    //базовая логика фильтрации, перебираем продукты в массиве, приводим тайтлы продуктов и текст запроса к одному формату и сравниваем типо
    return products.filter(p=>p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
