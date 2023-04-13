

let stocks = {
    Fruits : ["Strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}




// let order = (Fruits_name,call_production)=>{

//     setTimeout(()=>{

//         console.log(`${stocks.Fruits[Fruits_name]} was selected`);

//         call_production();

//     }, 2000);

    
// };

// let production = () =>{

//     setTimeout(()=>{

//         console.log("production has started");

//         setTimeout(()=>{
//             console.log('the fruit has been chopped');

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//                 setTimeout(()=>{
//                     console.log("machine was started");

//                     setTimeout(()=>{
//                         console.log(`ice cream was placed on ${stocks.holder[0]}`);

//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[1]} was added as topping`);

//                             setTimeout(()=>{
//                                 console.log("serve ice cream");
//                             }, 3000)
//                         }, 3000);
//                     }, 2000);
//                 }, 1000);
//             },1000);
//         }, 2000);

//     }, 0000);
  
// };


// order(0, production);


let is_shop_open = false;

// let order =  (time, work)=> {

//     return new Promise( (resolve, reject)=>{

//         if(is_shop_open){

//             setTimeout( ()=>{resolve (work() )}, time);
            
//         }

//         else{
//             reject(console.log('our shop is closed'));
//         }
//     });
// };

// order (2000, ()=>{console.log(`${stocks.Fruits[2]} was selected`)})


// .then(()=>{

//     return order(0000, ()=>{
//         console.log("Production has started")
//     })
// })

// .then( ()=>{

//     return order(2000, ()=>{console.log("the fruit was chopped")}
        
//         )
// })

// .then( ()=>{

//     return order(1000, ()=>{console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)})
// })


// .then(()=>{

//     return order(1000, ()=>{console.log("started the machine")})
// })


// .then(()=>{

//     return order(2000, ()=>{
//         console.log(`ice cream was placed on ${stocks.holder[1]}`)
//     })
// })

// .then(()=>{

//     return order(3000, ()=>{console.log(`${stocks.toppings[0]} was selected`)})
// })


// .then (()=>{

//     return order(2000, ()=>{

//         console.log("Serve Ice cream")
//     })
// })

// .catch(()=>{
//     console.log("Customer left")
// })

// .finally(()=>{
//     console.log("Day ended shop is closed")
// })

// let order = ()=>{

//     return new Promise((resolve, reject)=>{


//         if(true){
//             resolve()
//         }

//         else{
//             reject()
//         }
//     })
// }

// order()
// .then()
// .then()
// .then()
// .then()
// .catch()
// .finally()


// let toppings_choice = ()=> {
//     return new Promise ((resolve, reject)=>{


//         setTimeout(()=>{

//             resolve(
//                 console.log("which toppings would you love?")
//             )

//         }, 3000)
//     })
// }


// async function kitchen() {
//     console.log(" A ")
//     console.log(" B ")
//     console.log(" C ")

//     await toppings_choice()

//     console.log(" D ")
//     console.log(" E ")
// }

// kitchen()

// console.log("doing the dishes")
// console.log("cleaning the table")
// console.log("taking others orders")


function time(ms){

    return new Promise((resolve, reject)=>{
        if(is_shop_open){

            setTimeout(resolve, ms)
        }

        else{
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen() {
    try{

        await time (2000)
        console.log(`${stocks.Fruits[1]} was selected`);

        await time(0000)
        console.log("production started")

        await time (2000)
        console.log("cut the fruit")

        await time (1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)


        await time (1000)
        console.log("start the machine")

        await time (2000)
        console.log(`ice cream placed ${stocks.holder[1]}`)

        await time (3000)
        console.log(`${stocks.toppings[1]} was selected`)

        await time (2000)
        console.log("serve ice cream")

    }
    catch(error){
        console.log("customer left", error);
    }
    finally{
        console.log("day ended, shop is closed")
    }
}

kitchen();