# NemoErrHandler
Обработчик ошибок от NemoAPI от создателя. Made with Love ❤️ (100% JavaScript)

## Начало 
Как начать? Скопировать код из JS файла и использовать, пример ниже
```
checkError(0) // 0: Supported only GET method
```

## Приминение в практике
Пример использования модуля Fetch: ```(npm i node-fetch)```
```
async function useNemoApi(method, token, params) {

var fetch = require("node-fetch")
if(params){
var url = "https://api.nemo-bot.ru/m/" + method + "?" + token + "&" + params
} else {
var url = "https://api.nemo-bot.ru/m/" + method + "?" + token
}

fetch(url)
.then(gets => gets.json())
.then(res => {

if(res.error){
let r = res.error; let check = checkError(r.error_code); return check;
})
return res.response;
}
```
Пример использования функции:
```
let tok = "" //token
let par = "" //params
useNemoApi("utils.getServerTime", tok, par) // params можно не указавать в некоторых методах
```
# Связь со мной
Vk: https://vk.com/nemolayn

Bot: http://vk.com/nemocm
