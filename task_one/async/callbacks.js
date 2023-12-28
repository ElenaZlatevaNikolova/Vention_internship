// Only callbacks

// Prepare ice cream 
// 1. Place order and choose fruit - 2 sec.
// 2. Cut the fruits - 2 sec.
// 3. Add liquids - 1 sec.
// 4. Start the machine - 1 sec.
// 5. Choose container - 2 sec.
// 6. Choose topping - 3 sec.
// 7. Serve ice aream - 4 sec.


let stocks = {
  Fruits : ['banana', 'strawberry', 'bluberry', 'cherry'],
  Liquids : ['milk', 'cream', 'water'],
  Containers: ['cup', 'cone', 'stick'],
  Topping : ['chocolate','syrup', 'nuts' ],
};



let order = (Fruit_name, call_production) => {

  setTimeout(()=>{console.log(`Order placed, ${stocks.Fruits[Fruit_name]} choosen. Please, start production.`);

  call_production ();
}, 2000);

 
};



let production = ()=>{ setTimeout(() => {
  console.log('Order received. Starting production.');
setTimeout(() =>{
  console.log('The fruits have been cut.');

  setTimeout(() => {console.log (`${stocks.Liquids[1]} and ${stocks.Liquids[0]} were added.`);

setTimeout(() => {console.log('Machine has been started.');

setTimeout(() => {console.log(`${stocks.Containers[0]} has been chosen.`);

setTimeout(() => {console.log(`${stocks.Topping[2]} has been selected.`);

setTimeout(() => {console.log("The ice cream is served.")}, 4000)},
3000)}, 
2000)}, 
1000)}, 
1000)
}, 2000);

}, 0o00);}

order(0, production);






  
