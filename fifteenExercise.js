/*
*) Returns an array element
*) its truncated after n elements remaining
*) the trunction starting with index 0

*) Ex : input=> Slasher([1,2,3],2)        output => [3]
*) Ex : input=> Slasher([1,2,3,4],2)      output => [3,4]
*) Ex : input=> Slasher([a,b,c,d],2)        output => [c,d]
*/


{
    //first sol :: defined the dircet varibl
    let Newarray=["a","b","c","d"];
    let result=Newarray.slice(2)
    console.log(result);
}


{
    // sconed sol :: by function 
    let Slasher =function(array,indexNum){
        // we can use slice or splice
        let result =array.slice(indexNum)
        return result
    }
    let output=Slasher([1,2,3,4],2)
    console.log(output);
}