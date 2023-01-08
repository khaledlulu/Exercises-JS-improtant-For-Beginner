/*
*) write java script program to
*) Create A New String Adding  "pr " In Front Of A Given String 
*) if the given string begins with "pr"
*) then reutrn orginal string 

*)  EX :: input string  =>> "practise"
*)      output ::  =>> "practise"
*)  if input =>> "aaa" => output =>>"praaa"       
*)  if input =>> "bbb" => output =>>"prbbb"       
*/

{
    let AddingStr=function(str){

        //first sol

        let newArray=[]
                //slice واحد من الميثود هدول بزبط مكان ال
                // 1)str.substr(0,2)=="pr" 
                // 2)str.indexOf("pr")!== -1 
                // 3)str.includes("pr") 
               
        if((str===null) ||(str===undefined)|| str.slice(0,2)=="pr") {
                return str;
        }else{
            
            newArray.push("pr" + str)
        }
        return newArray.join("");

    }
    let output=AddingStr("praivet")
    console.log(output);
}
{
    let AddingStr=function(str){

        //Sconed sol
        
        if((str===null)||(str===undefined)|| str.startsWith("pr")=="pr"){
                            return str;
        }else{
                            return "pr"+str
        }
                                        
                    }

    let output=AddingStr("khaled")
    console.log(output);
}
