let stocks = {
    fruits :["strawberry", "grapes", "banana" ,"apple"],
    liquid : ["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
  };
  
  let order = (Fruit_name,call_production) =>{
    setTimeout(()=>{
      console.log(`${stocks.fruits[Fruit_name]} was selected`)
    
      call_production();
    
    },5000);
    
  };
  

  let production =()=>{
    setTimeout(()=>{console.log("production has started")
    
    setTimeout(()=>{
      console.log("the fruit has been chopped")
    
    
      setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)


        setTimeout(()=>{
          console.log(`the machine was started`)

      
          setTimeout(()=>{
            console.log(`the icecream was placed on ${stocks.holder[0]}`)

        
            setTimeout(()=>{
              console.log(`${stocks.toppings[0]} was added`)
    
              setTimeout(()=>{
                console.log(`serve the iceceam `)
    
            
              },2000)
            },3000)
          },1000)
        },1000)
      },1000)
    },2000)
  },2000); 
  };
  order(0,production);
