const marwal_heros = ["thor", " ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marwal_heros.push(dc_heros)

// console.log(marwal_heros);
// console.log(marwal_heros [3]);

// const allHero = marwal_heros.concat(dc_heros)
// console.log(allHero);


const all_new_heros = [...marwal_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, 4, [4, 5 ,6] , 7, [6 , 7, [4 , 5]]];

const real_another_array =  another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hira"));
console.log(Array.from("Hira"));

console.log(Array.from({name: "Hira"}));


let score1     = 100;
let score2 = 340;
let score3 = 233;

console.log(Array.of(score1 , score2, score3));