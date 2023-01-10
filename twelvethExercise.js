/*
*)  Truncate a string to a certain number of words 
    Ex:
*) 1) console.log(truncate"Have a nice day",2)
        output : "Have a nice "
*/

{
let TruncateString=function(str,truncateNum){

        let word=str.split(" ")
        //first sol : by slice

        // return word.slice(0,truncateNum).join(" ");

        //sconed sol : by splice

        //return word.splice(0,truncateNum).join(" ");

        //thired sol : by for loop

        let result = []
        let i=0;
            for (const value of word) {
                if(i == truncateNum){
                    break;
                }
                result.push(value)
                i++;

            }return result.join(" ")
}
let output=TruncateString("Have a nice day",3)
console.log(output)

}