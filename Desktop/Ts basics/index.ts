//function that has str as parameter
function firstNonRepeated(str:string):string{

    //first we split each letter of incoming str into separate array
    let sArray:string[]=[]
    sArray=str.split("");

    //we have finalArr array to store non repeated letters
    let finalArr:string[]=[];
    let count:number=0;

    //looping through incoming string str and letter splitted array sArray
    for(let s of str){
        for(let c of sArray){
            //if the letter matched then count is increased
            if(s===c){
                count+=1;
            }
        }
        //if count is not greater than one means it is not repeated then we store in finalArr
        if(count<=1){
            finalArr.push(s);
        }
        //setting count to 0 again to move in next loop
        count=0;
    }

    //if array length is greater than 0 then we return first non repeated value else we return empty string "" 
    if(finalArr.length>0) return finalArr[0];
    return "";

}
//calling and passing the argument to the function
console.log(firstNonRepeated("aabcc"));