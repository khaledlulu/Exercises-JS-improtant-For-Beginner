/*
*)  Alphabetize A Given String
    Ex:
*) 1) input (str) => "acbedgf"

        output : "abcdefg"
*/
{
    function AlphabetizeString(str){
        
        let word =str.split("")
        //first sol 
        //return word.sort().join("").trim();
        
        //scoend sol
        let temp ;
        for(let i=0 ;i<word.length;i++){
            for (let j = i+1; j < word.length; j++) {
                if(word[i] > word[j]){
                    temp=word[i]
                    word[i]=word[j]
                    word[j]=temp
                }
            }
        } 
        return word.join("")
    }
}
    let output=AlphabetizeString("cbaedgf")
    console.log(output);
