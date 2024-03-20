//可以使用 | 来连接多个类型（联合类型）
let b: 'male' | 'female';
b = 'male';
b = 'female';

//unknown 表示未知类型,不能赋值给其他变量
let c: unknown
c = 1;
c = true;
c = 'hellow'

let s: string;

c = 'hellow';
if (typeof c === 'string') {
    s = c
}

//类型断言
s = c as string;
s = <string>c;

//void表示没有返回值
function fn(): void {
}

//never 表示永远不会返回结果
function fun1():never{
    throw new Error(" 报错了！！");
}
