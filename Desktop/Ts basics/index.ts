function firstNonRepeated(str:string):string{
    let sArray:string[]=[]
    sArray=str.split("");

    let finalArr:string[]=[];
    let count:number=0;

    for(let s of str){
        for(let c of sArray){
            if(s===c){
                count+=1;
            }
        }
        if(count<=1){
            finalArr.push(s);
        }
        count=0;
    }

    if(finalArr.length>0) return finalArr[0];
    return "";

}
console.log(firstNonRepeated("aabcc"));