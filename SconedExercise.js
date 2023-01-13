// Sconed Exercises 

// Capitalis the first letter of each word of a string
// input = "beutieful work the hard "
// output = "Beutieful Work The Hard " 
{
    //first sol ::: we can do with function and for loop
   let Capitalis= function (str){
     const word=str.split(" ")
     for(let i=0;i<word.length;i++){
       word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1)
    }
    return word.join(" ")
    }
    output =Capitalis("beutieful work the hard ")
    console.log(output);
}
{
        //sconed sol ::: we can do with  for of

   let Capitalis= function (str){
     const word=str.split(" ")
    let  newArray=[]
     for (const i of word) {
        let result =i.charAt(0).toUpperCase()+i.slice(1)
      newArray.push(result)
     }
    return newArray.join(" ")
    }
    output =Capitalis("beutieful work the hard")
    console.log(output);
}
{
        //third sol ::: we can do with map & replace 

   let Capitalis= function (str){
     const word=str.split(" ")
  return word.map(str => 
         str.replace(str.charAt(0),str.charAt(0).toUpperCase())
   ).join(" ")
    
    }
    output =Capitalis("beutieful work the hard")
    console.log(output);
}
