const student = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

const noriuSuzinoti = 'name';
const name = student[noriuSuzinoti];

console.log([10, 555].length);
console.log('ewre'.length);
console.log(student.length);

const keys = Object.keys(student);
console.log(keys);

const keysCount = keys.length;
console.log(keysCount);
console.clear();

const car = {
    brand: 'Audi',
    model: 80,
    color: 'red',
    price: 300,
}

const carKeys = Object.keys(car);
for (let i = 0; i < carKeys.length; i++) {
    const key = carKeys[i];
    const value = car[key];
    console.log(i, key, value);
}

for (const key in car) {
    const value = car[key];
    console.log(key, value);
}

