/*
Chop a string into chunks of a specific length
input ::: "khaled" 
ceart a function stringShope("khaled",2)
out put :::  ["kh","al","ed"]
*/

{
    // first sol :: we ues for loop
   let StringChop= function (str , times){
        let result = [];
        if(0<times){

            for(let i =0; i<str.length;i=i+times){
                result .push(str.slice(i,i+times))
            }
            return result
        }else{
            return str ;
        }
   }
   let output = StringChop("khaled",2);
   console.log(output);
}

{
    // Sconed sol :: we ues Regex to do it
   let StringChop= function (str , times){
      
    return (0<times)? str.match(new RegExp('.{1,'+times+'}','g')):[str]
   }
   let output = StringChop("khaled",3);
   console.log(output);
}


