
// first Exercises 

// Capitalis the first letter of string
// input = "beutieful work"
// output = "Beutieful work" 

{
// the first way solution
// way:  I uesed slice & charAt & toUpperCase   
let word= "beutieful work";
result =word.charAt(0).toUpperCase();
resultOne =word.slice(1);
console.log(result + resultOne );}

{
// the sconde way solution
// way:  I uesed slice  & toUpperCase   
let word= "beutieful work";
result =word.slice(0,1).toUpperCase()
resultOne =word.slice(1)
console.log(result +resultOne);}
{
// the third way solution
// way:  I uesed the Function & toUpperCase & slice
function Fun(str){   
    result =str.slice(0,1).toUpperCase()
    resultOne =str.slice(1)
    console.log(result +resultOne);}
    Fun("beutieful work");
}
{
  // the forth way solution
// way:  I uesed the Function & replace & toUpperCase & slice
    function Capitalis (str){
        let result =str.replace(str.slice(0,1),str.slice(0,1).toUpperCase())
        console.log(result);
    }
    Capitalis("beutieful work")
}


