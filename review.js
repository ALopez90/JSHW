console.log('Oh hi Mark');

var Fruit = [
    'Pineapples',
    'Banana',
    'Kiwi',
];

Fruit.push('Apples','Cherries','Dragon Fruit');
console.log(Fruit);

var Yummy = true;

var Pineapples = 15;

var equation1 = 9+10;
var equation2 = equation1*6.3;
var equation3 = equation2-1;

var Math = [
    equation1,
    equation2,
    equation3,
];
console.log(Math);

Fruit.splice(0,2);
console.log(Fruit);
Fruit.reverse();
console.log(Fruit);

console.log(typeof Pineapples);

var Desc = `Are Pineapples yummy? ${Yummy}`;
console.log(Desc);

var GroceryList = [
    'Fruit',
    'Chorizo',
    'Yogurt',
    'Candy',
    'Tomato',
]

var Amount = [
    25,
    2,
    6,
    3,
    7,
];

console.log(GroceryList);
console.log(Amount);

for (let x = 0; x < GroceryList.length; x++) {
    console.log(x);
    console.log(GroceryList[x]);
}

GroceryList.forEach(GroceryList => {
    console.log(GroceryList); 
})
