//Объекты и копирование объектов
let person = {
  name: "Alex",
  age: 18,
  city: "Msc",
};
console.log(person);

let original = {
  name: "Alex",
  age: 18,
  city: "Msc",
};
let copy = { ...original };
copy.name = "Igor";
console.log(original);
console.log(copy);

let clone = Object.assign({}, original);
clone.age = 52;
console.log(original);
console.log(clone);

//Опциональная цепочка ?.
let user = null;
console.log(user?.city);

let location = {
  lock: {
    zip: "lok",
    rock: "end roll",
  },
};
console.log(location.lock?.zip);

let key = 3;
let data = {
  items: ["1", "2", "3", "4"],
};
console.log(data.items?.[key]);

//Получение свойств объекта
let keys = Object.keys(person);
console.log(keys);

let values = Object.values(person);
console.log(values);

arrKeyValue = Object.entries(person);
console.log(arrKeyValue);
