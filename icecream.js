let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };



let order =(Fruits_name,call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruits_name]} was selected`);
        call_production();
    }, 2000);
   
}
let production =() => {
    setTimeout(()=> {
        console.log("production hs started");
        setTimeout(() => {
            console.log('the fruits has been chooped');
            setTimeout(()=> {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
                setTimeout(()=>{
                    console.log("The machine has been started")
                    setTimeout(()=> {
                        console.log(` ice cream was placed on ${stocks.holder[0]}`);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as toppings`);
                            setTimeout(()=>{
                                console.log('serve the icecream')
                            },2000)
                        },3000);
                    },2000);
                },3000);
            },1000);
        },2000);

    },1000);
   
   
}
order(0,production)