


const sum= (a=0,b=0)=>a+b;

console.log("sum=",sum(20))
let a=[2,3,4,5,6];
b= a.filter(i=> (i%2==0));
console.log(a);
console.log(b);
  const c=b.map(i=>(i*i));
  console.log("square=",c);
   const d=c.reduce((s,i)=>(s+i)) ;
   console.log(d);