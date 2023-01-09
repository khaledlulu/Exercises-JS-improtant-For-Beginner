/*
*)  Count the occurrence of a substring in a string

    Ex:
*) 1) console.log(count"Have a nice day have","have")
    output : 2
*) 2) console.log(count"Have a nice day have","nice")
    output : 1
*/
{
    //first sol ::: by for of & if statment
    
    let Count=function(str1,str2){
        let newArray=0
        let word=str1.toLowerCase().split(" ")
        for (const i of word) {
            if(i===str2){
                newArray++
            }
        }
        return newArray    
    
    }
    let output=Count("Have a nice day have","have")
    console.log(output);
}

////////////////////////////////////////////////////////

{
    //sconed sol ::: by reduce method & if statment

    let Count=function(str1,str2){
        let newArray=0
        let word=str1.toLowerCase().split(" ")
        return word.reduce(function(acc,current){
            if(!acc[str2]){
                acc[str2]=0
            }
            if(current==[str2]){
                acc[str2]++
            }
            return acc
        },{})[str2]  
    }
    let output=Count("Have a nice day have","have")
    console.log(output);
}

////////////////////////////////////////////////////////

{
    //third sol ::: by filter method & if statment

    let Count=function(str1,str2){
        let newArray=0
        let word=str1.toLowerCase().split(" ")
        return word.filter(function(result){
            return result==str2
        }).length
    }
    let output=Count("Have a nice day have","have")
    console.log(output);
}