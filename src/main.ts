//Основной файл с которого начинается приложение
//Библиотеки
import { enableProdMode } from '@angular/core'; //режим для разработки
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//библиотека для запуска Angular приложений в браузере с поддержкой JIT компиляции
//Приложение
import { AppModule } from './app/app.module';//само приложение
import { environment } from './environments/environment';// переменные окружения
//Выбор режима
if (environment.production) {
  enableProdMode()
}
//Запуск приложения
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
