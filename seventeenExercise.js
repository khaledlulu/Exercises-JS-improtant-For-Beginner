/*
*) Remove Falsy Values From An Array
*) falsy value in javascript are :[false,0,null,undefined,"",Nan]

    input => Bouncer([7,"hello",null,false]) //// output=>[7,"hello"]
    input => Bouncer(["a","b",null) //// output=>["a","b"]
*/

{
    let Bouncer=function(arr){
        let Newarray=[];
        for (let i = 0; i < arr.length; i++) {
           if(arr[i]){      // => true
            Newarray.push(arr[i]) 
           }
            
        } return Newarray;
    }
    let output=Bouncer([7,"hello",null,false])
    console.log(output);
}