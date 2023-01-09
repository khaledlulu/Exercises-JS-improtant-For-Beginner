/*
*)  Repeat a string a specified times

    Ex:
*) 1) console.log(count"H",4)
    output : HHHH
*) 2) console.log(count"H")
    output : Erorr 
*/
{
    // first sol :: by ifstatment & for loop
    let RepeatString=function(str,CountNum){
        let result =""; 
        if(CountNum >0 ){
            for(let i =0 ;i<CountNum;i++){
                result+=str 
            }
            return result
        } if(CountNum==undefined || CountNum==null) {
            return console.log("Erorr input");
    }
        
    }
    let output=RepeatString("kh ",5)
    console.log(output);
}

        ////////////////////////////////////////////
        
        // scoend sol:: by repeat method
{
    let RepeatString=function(str,CountNum){
        let result =""; 
        if(CountNum==undefined || CountNum==null){
            return console.log("Erorr input");
        }else{
            return str.repeat(CountNum)
        }
    }
    let output=RepeatString("kh ",5)
    console.log(output);
}
        ////////////////////////////////////////////
        
        // thied sol:: by replace in Array
{
    let RepeatString=function(str,CountNum){
        let result =[]; 
        for (let i = 0; i < CountNum; i++) {
            result.push(str)
            
        }
        return result.join("")
    }
    let output=RepeatString("kh ",5)
    console.log(output);
}