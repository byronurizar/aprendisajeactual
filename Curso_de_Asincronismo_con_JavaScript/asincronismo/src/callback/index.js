const sum=(num1,num2)=>num1+num2;

const call=(num1,num2,callback)=>{
    return callback(num1,num2)
}

console.log(call(6,2,sum));


const date=(callback)=>{
    console.log(new Date());
    setTimeout(() => {
        let date=new Date();
        callback(date);
    }, 3000);
}

const printDate=(date)=>{
    console.log(date);
}

date(printDate);