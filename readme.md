<p align="center"><img src="https://uploads.photo/images/Ed7f.png" width="200"/></p>


<p align="center" style="font-size:1.8em;">Мой блог. Админка</p>

##  Список основых технологий
- Язык программирования: [TypeScript](https://www.typescriptlang.org)
- Синтаксис [ECMAScript2017](https://www.ecma-international.org/ecma-262/8.0/#sec-async-function-definitions)
- [Docker](https://docs.docker.com/get-started/)
- [Angular](https://angular.io/docs)
- [RxJs](https://www.learnrxjs.io)
- [CoreUI](https://coreui.io/docs/getting-started/introduction/)
- [NG Bootstrap](https://ng-bootstrap.github.io/#/components/alert/examples)

## Список дополнительных технологий

- [NGX Datatable](https://swimlane.github.io/ngx-datatable/)
- [CKEditor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/angular.html)
- [NGX Monaco Editor](https://www.npmjs.com/package/ngx-monaco-editor)
- [Lodash](https://lodash.com)
- [Moment](https://momentjs.com/docs/)
- [NGX Toastr](https://www.npmjs.com/package/ngx-toastr)

## Разворачивание проекта для разработки

1. Установить npm зависимости
    ```bash
    yarn install
    ```
    
2. Запустить dev server
    ```bash
    yarn run dev
    ```

## Разворачивание проекта для работы

1. Установить npm зависимости
    ```bash
    make prod-yarn-install
    ```
    
2. Запустить сборку бандла
    ```bash
    make prod-build
    ```

3. Запустить nginx сервер
    ```bash
    make server
    ```
