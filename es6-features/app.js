//#region Arrow Function, Spread Operator

const sum = (x, y, z) => x + y + z;
const numbers = [1, 2, 3];
console.log(sum(...numbers));

//#endregion

//#region  Destructuring Assignment

let a, b, rest;

// a:10, b:20, rest: [30, 40, 50]
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log("%o\n%o\n%o", a, b, rest);

// a:10, b:20, rest: [30, 40, 50]
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40, e: 50 });
console.log("%o\n%o\n%o", a, b, rest);

// a:10, b:30
[a, , b] = [10, 20, 30, 40, 50];
console.log("%o\n%o", a, b);

// a:1, b:7
[a = 5, b = 7] = [1];

//#endregion

//#region  for...in
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(property);
}
//#endregion

//#region  for...of
for (const value of numbers) {
    console.log(value);
}
//#endregion

