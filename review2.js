var Memes = [
    'Oh Hi Mark',
    'Big Chungus',
    'KappaRoss',
    'Pepega',
    'Dabskichach',
];

console.log(Memes);

var howmuchwoodcanawoodchuckwoodifawoodchuckcouldchuckwood = 700;
var Answer = `It depends on the type of Wood Chuck! But one could typically chuck ${howmuchwoodcanawoodchuckwoodifawoodchuckcouldchuckwood} lbs.`;
console.log(Answer);

Memes.forEach(Element => {
    console.log(Element);
    console.log('howmuchwoodcanawoodchuckwoodifawoodchuckcouldchuckwood');
})

for (var i = 0; i < Memes.length; i++) {
    console.log(i);
    var x = Memes[i];
    console.log(x);
}

var Memes2 = Memes.map(item => {
    return item + '-Good meme';
})
console.log(Memes2);

var BestMemes = Memes.filter(item => {
    return item.length > 7;
})
console.log(BestMemes);