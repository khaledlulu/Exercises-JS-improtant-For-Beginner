/*
*)  insert a stirng within a specific poistion in another string

*)  EX :-
*)  console.log(insert("Hello EveryOne"));  
*)  console.log(insert("Languge is Great" , "Learn "));  
*)  console.log(insert("Code is Funny"  ,  "JavaScript " , 5));  

*)  output=> Hello EveryOne
*)  output=> Learn Languge is Great
*)  output=> Code JavaScript is Funny
*/

{
    //first sol

let insert =function(str,word,poistion){
    if(typeof poistion=="undefined"){
        poistion =0
    }if(typeof word =="undefined"){
        word =""
    }
    return str.slice(0,poistion) + word + str.slice(poistion)
        // slice(0,0) + "" + "Hello EveryOne" => Hello EveryOne
        // slice(0,0) + "learn" + "Languge is Great" => learn Languge is Great
        // slice(0,5) + "JavaScript" + "Code is Funny" => Code JavaScript is Funny

}
    let output =insert("Code is Funny"  ,  "JavaScript " , 5);
    console.log(output);
}

    // sconed sol
{
let insert =function(str,word,poistion){
    if(typeof poistion=="undefined"){
        poistion =0
    }if(typeof word =="undefined"){
        word =""
    }
     //we can use another solution by splice method
     let myStirng=str.split("")
     myStirng.splice(poistion,0,word)
     return myStirng.join('')

}
    let output =insert("Languge is Great" , "Learn ");
    console.log(output);
}