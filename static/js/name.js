let arr=[];
for(let i=0;i<10;i++){
    arr.push(i)
}
for(let i=97;i<=122;i++){
    arr.push(String.fromCharCode(i))
}
for(let i=65;i<=90;i++){
    arr.push(String.fromCharCode(i));
}

function getName(){
    let str="叮咚_";
    for(let i=0;i<10;i++){
        str+=arr[parseInt(Math.random()*arr.length)]
    }
   return str;
}
export {getName};
