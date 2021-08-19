let stocks = {
    fruits :["strawberry", "grapes", "banana" ,"apple"],
    liquid : ["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
  };


  let is_shop_open = true;


  function time(ms){
      return new Promise((resolve,reject)=>{
          if(is_shop_open){
              setTimeout(resolve,ms);
          }
          else{
              reject(console.log("shop is closed"))
          }
      })
  }

  async function kitchen(){
      try{
        await time(5000);

        console.log(`${stocks.fruits[0]} was selected`)

        await time(0000)
        console.log("production has started")

        await time(2000)
        console.log("the fruit was chopped")


        await time(2000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)


        await time(2000)
        console.log(`start the machine`)


        await time(2000)
        console.log(`the icecream was placed on ${stocks.holder[0]}`)




        await time(2000)
        console.log(`${stocks.toppings[0]} was added`)


        await time(2000)
        console.log(`serve the iceceam`)

      }

      catch(error){
        console.log("customer left")
      }

      finally{
          console.log("shop ended,shop closed!")

      }
  }


  kitchen();