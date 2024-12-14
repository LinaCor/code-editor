![Static Badge](https://img.shields.io/badge/CSS-3-blue) ![Static Badge](https://img.shields.io/badge/JavaScript-ES6-yellow) ![Static Badge](https://img.shields.io/badge/React-18-blue)

# О проекте
Тестовое задание на позицию Junior Frontend Developer, разработка онлайн редактора кода.
Приложение выполнено с помощью библиотеки React. Поле редактора кода установлено через npm пакет для  [React CodeMirror](https://uiwjs.github.io/react-codemirror/). 
Стили написаны на ванильном HTML/CSS без использования дополнительных фреймворков.
Исходные файлы проекта расположены в ветке dev, актуальный билд в ветке build.

# Запуск
Для запуска проекта на локальном устройстве должна быть установлена последняя версия Node.js
После скачивания, в терминале VSCode ввести команды:
```
npm install
npm start или  npm run start
```
Приложение запустится на http://localhost:3000 (или другом порту). 


# Улучшения
- добавлено сохранение введенного кода в localStorage
- создан массив объектов задач, отображающихся рандомно

# Расширения
- создание объекта для сопоставления с языками в store.js, в случае добавления большего варианта ЯП
```
const languages = {
  JavaScript: javascript,
  Python: python,
};
```
- использование хука useContext для отображения ответа сервера в блок под редактором


