{
  let a,b,rest;
  [a,b]=[1,2];
  console.log(a,b);
}
//1 2

{
let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5];
  console.log[a,b,rest];
}
//1 2 [3,4,5,6]

{
  let a,b;
  ({a,b}={a:1,b:2});
  console.log(a,b);
}
//1 2

{
  let a,b,c,rest;
  [a,b,c=3]=[1,2];
  console.log(a,b,c);
}
//1 2 3

{
  let a,b,c,rest;
  [a,b,c]=[1,2];
  console.log(a,b,c);
}
//1 2 undefined

{
  let a=1;
  let b=2;
  [a,b]=[b,a];
  console.log(a,b);
}
// 2 1 变量互换

{
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  console.log(a,b);
}
//1 2

{
  function f(){
    return [1,2,3,4,5];
  }
  let a,b,c;
  [a,,,b]=f();
  console.log(a,b);
}
//1 4

{
  function f(){
    return [1,2,3,4,5];
  }
  let a,b,c;
  [a,...b]=f();
  console.log(a,b);
}
//a=1 b=2,3,4,5

{
  function f(){
    return [1,2,3,4,5];
  }
  let a,b,c;
  [a,,...b]=f();
  console.log(a,b);
}
//a=1  b=3,4,5

//对象解构赋值
{
  let o={p:42,q:true};
  let {p,q}=o
  console.log(p,q);
}
//p=45 q=true

{
  let{a=10,b=5}={a:3};
  console.log(a,b);
}
//a=3 b=5

{
  let metaData={
    title:'abc';
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let [{title:esTitle,test:[{cnTitle}]}]=metaData;
  console.log(esTitle,cnTitle);
}
//esTitle=abc cnTitle=test
