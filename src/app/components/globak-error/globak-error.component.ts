//создаем компонент для визуализации ошибки
import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-globak-error',
  templateUrl: './globak-error.component.html',
  styleUrls: ['./globak-error.component.css']
})
export class GlobakErrorComponent implements OnInit {

  constructor (public errorService: ErrorService) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
