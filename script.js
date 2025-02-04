//Объекты и копирование объектов
let person = {
    name: "Alex",
    age: 18, 
    city: "Msc",
}
console.log(person)

let original = {
    name: "Alex",
    age: 18, 
    city: "Msc",
}
let copy = { ...original};
console.log(original);
let clone = Object.assign({}, original);
clone.age = 52;
console.log(clone);

