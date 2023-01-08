/*
Reversing string
input ::: "khaled" 
out put :::  "delahk"
*/


{
    //first sol :: by reverse method
    let ReversString=function(str){
        
    //    let word =str.split("")
    //    return letters=word.reverse().join("");
       
    // or

       return str.split("").reverse().join("")
    }
    let output=ReversString("khaled")
    console.log(output);
}



{ 
    // sconed sol ::  by for loop 

        let ReversString =function(str){
            let word= "";
            for(i=str.length-1;i>=0;i--){
                word+=str[i]
            }
            return word;
        }
        let output=ReversString("khaled")
        console.log(output);










}
