function getTicket(n){
    let arr = new Array(n);
    for(let i=0; i<n;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(arr){
    let sumi=0;
    for(let i=0; i<arr.length;i++){
        sumi=sumi+arr[i];
    }
    return sumi;
}
export {getTicket, sum};