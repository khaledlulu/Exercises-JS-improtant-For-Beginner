/*
    Create a string using the middle three characters
    input : "abcdefg"
    create function middelThree("abcdefg")
    output : "cde"
*/
{
    //first sol :: by if statment  with substr || slice & substring
    let middelThree=function(str){
        if(str.length%2==0){
            return str;
        }else{
            
            // let middel = (str.length -1 ) / 2  // =>   (6/2)=3
            // return str.substr(middel-1 , 3)    // =>   ( (3-1) = 2 , 3 )
            //بتاخد رقمين الاول البداية التاني لعند رقم الاندكس الي بدها تقف عندها عكس السلايس  و سب ستر  substr  دالة 
            
            //slice & substring => نفس الشي بالزبط لكن السلايس تقبل قيمة سالبة ام الاخرى لا تقبل وتقوم بارجاع النص نفسه
            // let middel = (str.length +1 ) / 2
            // return str.slice(middel-2,middel+1)
            let middel = (str.length +1 ) / 2
            return str.substring(middel-2,middel+1)
        }

    }
    let output=middelThree("abcdefg")
    console.log(output);
}

{
        // Sconed sol :: we used variables first,middel,last
    let middelThree=function(str){
        if(str.length%2==0){
            return str
        }else{
            let mid =Math.floor(str.length/2) //=> 7/2 =3
            let first=str.slice(mid-1,mid)
            let middel=str.slice(mid,mid+1)
            let last=str.slice(mid+1,mid+2)
            return first + middel +last ;
        }
    }
    let output=middelThree("abcdefg")
    console.log(output);
}