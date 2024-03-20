var a;
a = {};
a = function () {
};
//{} 用来指定对象中可以包含那些属性
// 语法:{属性名：属性值，}
// 在属性名后面加上？号，表示属性可以选
var b;
b = { name: 'swk' };
//[prpoNmae:string]:any 表示任意类型的属性
var c;
c = { name: '猪八戒', age: 19 };
// 设置函数结构类型声明：
// 语法: (形参: 类型, 形参: 类型, ...) => 返回值
var d;
d = function (n1, n2) {
    return n1 + n2;
};
//string[] 表示字符串数组
var e;
e = ["s", 'd', '45'];
//number[] 表示数值数组
var f;
f = [1, 23, 4, 52, 5];
var g;
g = [1, 2, 3, 4];
//元组，元组就是固定长度的数组
var h;
h = ['123', 123];
//enum 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Famale"] = 1] = "Famale";
})(Gender || (Gender = {}));
var i;
i = {
    name: "孙悟空",
    gender: Gender.Male,
};
console.log(i.gender === Gender.Male);
