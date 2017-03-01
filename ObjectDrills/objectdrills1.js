//object initializers and methods.
var loaf = {
  flour: 300,
  water: 210,
  hydration: ()=> {
    return (loaf.water/loaf.flour)*100;
  }
}

console.log(`flour: ${loaf.flour} water: ${loaf.water}`);
console.log(`Hydration: ${loaf.hydration()}`);
