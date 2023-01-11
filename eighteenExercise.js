/*
*) Remove all elements from the initial array that 
*) are of the same value as this arguments

*) input => Destroyer([1,2,3],3)        // output => [1,2]

*/
{
    let Destroyer=function(arr){
        let arg=Array.from(arguments)
        arg.splice(0,1)
        let targets=arg;
        let result=[]
        for (const num of arr) {
            if(targets.indexOf(num)===-1){
                result.push(num)
            }
        }return result
    }
    let output=Destroyer([1,2,3],2,3)
    console.log(output);
}
