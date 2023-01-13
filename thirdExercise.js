/*
third Exercises 

input a string and convert uppercase letter to lower & vice versa
input = " AbCDef"
output = " aBcdEF" 
*/

{
// first sol ::: we can do with function & for of loop & if statement
    let SwapCase =function (str){
    //we ues split methoed
  let letters=  str.split('');
  let newArray =[]
  //we uesed for  loop
  
      // for (let i = 0; i < letters.length; i++) {
      //   if (letters[i]===letters[i].toUpperCase()) {
      //    newArray.push(letters[i].toLowerCase()) 
      //   } else{
      //       newArray.push(letters[i].toUpperCase()) 
      //   }
        
      // }return newArray.join("")

      // we uesed for of loop 

  for (const i of letters) {
            //check by if statement
            if(i===i.toUpperCase()){
                newArray.push(i.toLowerCase())
            }else if(i===i.toLowerCase()){
                newArray.push(i.toUpperCase())
            }
    }
    return newArray.join('');
    }
  let  output = SwapCase("AbCDefBc");
    console.log(output);
}

// Sconed sol ::: we can with function &for of loop&if statement& match method
{
    let SwapCaseWithMatch =function (str){
        //we ues split methoed
      let letters=  str.split('');
      let newArray =[]
      //we uesed for of loop
        for (const i of letters) {
                //check by if statement &match method
                if(i.match(/[A-Z]/g)){
                  newArray.push(i.toLowerCase())
                }else if(i.match(/[a-z]/g)){
                    newArray.push(i.toUpperCase())
                }
        }
        return newArray.join('');
    }
      let  output = SwapCaseWithMatch("AbCDefBc");
          console.log(output);
}
// third sol ::: we can uesed with map method
{
    let SwapCaseWithMatch =function (str){
        //we ues split methoed
      let letters=  str.split('');
      return letters.map(lter =>
        ( lter === lter.toUpperCase())?lter.toLowerCase():lter.toUpperCase()
      ).join('')
        }
      let  output = SwapCaseWithMatch("AbCDefBc");
        console.log(output);
}
// forth sol ::: we can uesed with reduce method
{
    let SwapCaseWithMatch =function (str){
        //we ues split methoed
      let letters=  str.split('');
      return letters.reduce((str,lter) =>
        str +( lter === lter.toUpperCase()? lter.toLowerCase(): lter.toUpperCase()),'' )
      
        }
      let  output = SwapCaseWithMatch("AbCDefBc");
        console.log(output);
}
