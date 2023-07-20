const { resolve } = require("styled-jsx/css");

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let is_shop_open = true;


  let toppings_choice =() => {
    return new Promise((resolve,reject)=> {

        setTimeout(() => {
            resolve(
            console.log("which topping would you like to love? "))
        }, 3000);
    });
  };
  async function kitchen() {
    console.log("A")
    console.log("b")
    console.log("c")
    console.log("d")

    await toppings_choice()
    console.log("e")
    console.log("f")
    console.log("g")
  }
  kitchen()
  console.log("doing the dishes")
  console.log("cleaning the table")
  console.log("taking other orders")
