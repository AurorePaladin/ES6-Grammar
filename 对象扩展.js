{
  //简介表示法
  let o=1;
  let k=2;
  let es5={
    o:o,
    k:k
  };
  let es6={
    o,
    k
  };
  console.log(es5,es6);

  let es5_method={
    hello:function(){
      console.log('hello');
    }
  };
  let es6_method={
    hello(){
      console.log('hello');
    }
  };
  console.log(es5_method.hello(),es6_method.hello());
}
//object o=1 k=2    object o=1 k=2
//hello
//hello


{
  //属性表达式
  let a='b';
  let es5_obj={
    a:'c',
    b:'c'
  };

  let es6_obj={
    [a]:'c'
  };
  console.log(es5_obj,es6_obj);
}
//a:"c" b:"c"      b:"c"


{
  //新增API
  console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
  console.log('数组',Object.is([],[]),[]===[]);

  //拷贝API
  console.log('拷贝',Object.assin({a:'a'},{b:'b'}));//浅复制

  let test={k:123,o:456};
  for(let [key,value] of Object.entries(test)){
    console.log([key,value]);
  }
}
//字符串 true true
//数组 false false
//a:"a"   b:"b"
//k:123 o:456


{
  //扩展运算符
  let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  // c={
  //   c:'ddd',
  //   d:'ccc'
  // }
}
