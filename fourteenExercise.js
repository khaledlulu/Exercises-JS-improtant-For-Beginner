/*
*)  Factorialize a Number in JavaScript

*) Ex : input=> 2      (2!)  output => 2*1 = 2
*) Ex : input=> 3      (3!)  output => 3*2*1 = 6
*) Ex : input=> 4      (4!)  output => 4*3*2*1 = 24
*/
{
    let Factorialize =function(num){

        //first sol:

        let result=1;
        for (let i = 1; i <=num; i++) {
            result*=i
           
        }
        return result


        //sconed sol :
        
        // for(let i= num - 1;i >= 1;i--){
        //     num=num*i
        // }
        // return num
    }  

    let output=Factorialize(3)
    console.log(output);
}