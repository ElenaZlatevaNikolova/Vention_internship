// Only promises

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
    Topping : ['chocolate','syrup'],
  };

  let is_shop_open = true;

  let order = (work, time) => {


    return new Promise ((resolve, reject) => {

     if (is_shop_open) {

        setTimeout(() => {resolve(work())}, time);
        
    }
    else {reject(console.log('Sorry,'))}     
     
    });
  };

  order(()=>{console.log(`Order has been placed, ${stocks.Fruits[1]} has been selected.`)}, 2000)

  .then(()=> {return order (() => {console.log('Production has started.'), 0o00})})

  .then(() => {return order(() => {console.log(`${stocks.Fruits[1]} has been cut.`)}, 2000)})

  .then(() => {return order(() => {console.log(`${stocks.Liquids[1]} has been added.`)}, 1000)})

.then(() => {return order(() => {console.log('The machine has been started.')}, 1000)})

.then(() => {return order(() => {console.log(`${stocks.Containers[0]} has been chosen.`)}, 2000)})

.then(() => {return order(() => {console.log(`The ${stocks.Topping[1]} has been chosen for topping.`)}, 3000)})

.then (() => {return order(() => {console.log('Ice cream was served.')}, 4000)})

.catch (() => {console.log("we are out of stock!")})

.finally (() => {console.log('The shop is closed.')});