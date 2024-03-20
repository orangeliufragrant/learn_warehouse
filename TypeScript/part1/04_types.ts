let a: object;
a = {}
a = function () {
};

//{} 用来指定对象中可以包含那些属性
// 语法:{属性名：属性值，}
// 在属性名后面加上？号，表示属性可以选
let b: { name: string, age?: number };
b = { name: 'swk' }

//[prpoNmae:string]:any 表示任意类型的属性
let c: { name: string, [prpoNmae: string]: any };
c = { name: '猪八戒', age: 19 }

// 设置函数结构类型声明：
// 语法: (形参: 类型, 形参: 类型, ...) => 返回值
let d: (a: number, b: number) => number;
d = function (n1, n2) {
    return n1 + n2
}


//string[] 表示字符串数组
let e: string[];
e = ["s", 'd', '45']

//number[] 表示数值数组
let f: number[];
f = [1, 23, 4, 52, 5]

let g: Array<number>
g = [1, 2, 3, 4]

//元组，元组就是固定长度的数组
let h: [string, number];
h = ['123', 123]

//enum 枚举
enum Gender {
    Male = 0,
    Famale = 1
}
let i: { name: string, gender: Gender };
i = {
    name: "孙悟空",
    gender: Gender.Male,
}

console.log(i.gender === Gender.Male)


// & 表示同时
let j: { name: string } & { age: number }
j = { name: '123', age: 18 }

//类的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType
let m: myType