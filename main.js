let user = {};

for (let i = 1; i <= 3; i++) {
  let name = prompt("Введите имя");
  let age = prompt("Введите возраст");

  user[i] = {
    names: name,
    ages: age,
  };
}

for (let key in user) {
  console.log(`Пользователь ${key}`);
  for (newkey in user[key]) {
    console.log(user[key][newkey]);
  }
}

let rec = receipt();
let m = "Вы заказали: ";
let d = 9000;

for (let key in rec) {
  m = m + " " + `${key}`;
  for (let newkey in rec[key]) {
    m = newkey == "info" ? `${m} ${rec[key][newkey]}` : m + "";
    d = newkey == "price" ? d + rec[key][newkey] : d;
  }
}

console.log(`${m} | Общая стоимость: ${d} | c доставкой (9000 сум)`);