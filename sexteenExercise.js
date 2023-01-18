/*
*) Returns true if the string in the first element
*) of the array contains all of the letters 
*) of the string in the scoend element  of the array 

*) Ex : input=> Mutation (["hello","hel"])       output => true
*) Ex : input=> Mutation (["hello","hey"])       output => false

*/
{
    let Mutation =function(arr){
        let firstvecter=arr[0].toLowerCase()
        let sconedvecter=arr[1].toLowerCase()

            //ex explain to line (20)
            // let mystring="hello"
            // console.log(mystring.indexOf("a"));// output =>  == -1

        for(let i=0 ; i < sconedvecter.length ; i++){
            if(firstvecter.indexOf(sconedvecter) === -1){
                return false
            }
        } return true 
    }
    let output = Mutation(["hello","hel"])
    console.log(output);
}