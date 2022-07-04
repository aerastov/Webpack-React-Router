
### Создать простое приожение React c WebPack:
В косоли заходим в директорию, в которой нужно создать проект.  
`npx create-react-app my-app` my-app - имя создаваемого проекта  
Идем в созданную папку cd my-app  
Стартуем приложение npm start (стартуют скрипты react, открывается страница в браузере)  
Входными файлами будут index.js и App.js  
После завершения работы над проектом в консоли набираем: `npm run eject` - очищаем проект от скриптов react.
***Проблема  в том что webPack в данном варианте установки разворачивается по умолчанию со кучей не нужных 
зависимостей.***



## Создание полноценного проекта React с интегрированным WebPack

Создаем пустую папку будущего проекта  
В ней создаем папки src, в которой создаем папки components и styles  
В корне инициилизируем приложение:  
`npm init -y`  
Ставим комплект зависимостей:
`npm i webpack webpack-cli`
`npm i @babel/core babel-loader @babel/preset-env @babel/preset-react` // транспайлинга кода из jsx
`npm i react react-dom`  // react-dom - рендерит компонент и начинает за ним следить и обновлять состояние  

В src создаем файлы index.js и 
index.html:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Recipes of dishes</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```
Ставим:
`npm i style-loader css-loader`
`npm i mini-css-extract-plugin` // для сборки css отдельным файлом
`npm i html-webpack-plugin`
`npm i webpack-dev-server`
В корне создаем файл: .babelrc с кодом:
```
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
Добавим в "scripts": в package.json:
```
    "start:devserver": "webpack-dev-server --config config/webpack.dev.js --open",
    "start:dev": "webpack --config config/webpack.dev.js --watch"
```


В корне создаем папку config, в ней файл: `webpack.dev.js` с кодом:
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                            esModule: true,
                            },
                        },
                    'css-loader',
                ],
            }
        ]
    }
}
```

Теперь можно протестить:
`npm run start:dev`
или
`npm run start:devserver` // react запуститься, откроется пустая страница



### Создаем компоненты:
В папке src/components создаем файл App.js (class - это более современный метод!)
```
import React, { Component } from "react";

import "../styles/App.css";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}
export default App;
```
Для стилей создадим App.css в src/styles
```
div {
    padding: 10px;
}
h1 {
    text-align: center;
    color: #55a90b;
}
```
В index.js импортируем все компоненты:
старый react
```
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
ReactDOM.render(<App/>, document.getElementById("root"));
```
В новом реакте (версия 18 и выше):
```
import React from "react";
import App from "./components/App";
import { createRoot } from 'react-dom/client';
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
```
Проверяем:
`npm run start:devserver` // react запуститься, откроется Hello World   


### Установка propTypes (для валидации типа переменных) ДОРАБОТАТЬ!
Ставим: `npm i prop-types --save-dev`  
Прописываем в компоненты react (в которых будем использовать): `import PropTypes from 'prop-types';`  
