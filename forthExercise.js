/*
forth Exercises 

concatenated spacific a string for spacific number of itmes
input = " Hello ! "
repate=  (Hello !,2)
output = " Hello !Hello !" 
*/

{
// first sol ::: we can do with function include 2 parameter & for of loop & if statement
    let SwapCase =function (str,times){
      let result = "";
      if(typeof(times)==="undefined" ||times===0){
          return str
      }else{
       
        for(let i =0;i<times;i++){
        result += str
      }      

      }
    return result;  
    }
  let  output = SwapCase("Hello!",2);
    console.log(output);
}


// Sconed sol ::: we can do with function include 2 parameter & while loop & if statement
    { let SwapCase =function (str,times){
      let result = "";
        while (times > 0) {
          result+=str
          times--;

        }
    return result;
    }
  let  output = SwapCase("Hello!",2);
    console.log(output);
  }

  {
    // third sol ::: we can do with ES6  repeat method 
        let SwapCase =function (str,times){
          
        if(times>0){
          return str.repeat(times)
        }else{
          return " "
        }
      }
      let  output = SwapCase("Hello!",3);
        console.log(output);
    }

  
