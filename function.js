async function chechError(num) { // example num = 0
  let error = {
    "0": "Supported only GET method",
    "3": "Not found",
    "4": "Unknown method passed",
    "5": "User authorization falied: invalid access_token",
    "6": "User authorization falied: no access_token passed",
    "26": "Limit reached",
    "100": "One of parametr is invalid",
  } // Набор возможных ошибок
  let find = error[num] // Ищем если есть ошибка
  if(!find) return "Unsupported error" // Если такая ошибка не обрабатывается
  let message = num + ": " + error[num] // 0: Supported only GET method
  return message; // Возвращаем текст
}
