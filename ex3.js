
const num=[12,528,56,7,8,2,6,8,5,2,5];
const even=num.filter((i)=>(i%2==0));
console.log("num=",num);
console.log("even=",even)
const square=even.map((i)=>(i*i));
console.log("square=",square)
const sum=square.reduce((s,i)=>(s+i))
console.log("sum=",sum)