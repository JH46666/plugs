//判断两个数据是否相同。
function isSame(eleA, eleB){
    return toString(eleA) === toString(eleB);
}

function toString(obj){
    let result = null;
    if(Object.prototype.toString.call(obj) === "[object Array]"){
        result = [];
        result = obj.map(item => {
            return toString(item)
        })
    }else if(Object.prototype.toString.call(obj) === "[object Null]"){
        result = JSON.stringify(obj);
    }else if(typeof obj === 'object'){
        result = {}
        for(let key in obj){
            result[key] = toString(obj[key])
        }
    }else if(typeof obj === 'function'){
        result = obj.toString();
    }else if(typeof obj === "undefined"){
        result = obj;
    }else{
        result = JSON.stringify(obj);
    }
    return JSON.stringify(result);
}
var obj = [{
    a:1,
    b: true,
    c: function(){}
}, {
    a: null,
    b:undefined,
    c:{}
}]

console.log(toString(obj))