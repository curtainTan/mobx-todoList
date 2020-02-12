// "use strict"
// 定义类修饰器
function log( target ){
    const desc = Object.getOwnPropertyDescriptors( target.prototype )
    for( const key of Object.keys( desc ) ){
        if( key === "constuctor" ){
            continue
        }
        const func = desc[key].value
        if( typeof func === "function" ){
            Object.defineProperty( target.prototype, key, {
                value( ...arg ){
                    console.log( "加之前", key )
                    const ret = func.apply( this, arg )
                    console.log( "相加----结果：", ret )
                    console.log( "加之后", key )
                    return ret
                }
            })
        }
    }
}
// 属性修饰器
function readonly( target, key, desc ){
    desc.writable = false
}
// 方法修饰器
function validate( target, key, desc ){
    const func = desc.value
    desc.value = function( ...arg ){
        for( let num of arg ){
            if( typeof num !== "number" ){
                throw new Error(`"${ num } " 不是一个数字..`)
            }
        }
        console.log( "函数里面的装饰器-----函数的操作---" )
        return func.apply( this, [ 4, 7 ] )
    }
}

@log
class Numberic {
    @readonly PI = 3.1315926
    // 修饰方法
    add( ...nums ){
        return nums.reduce( ( p, n ) => ( p + n ), 0 )
    }
}

console.log( new Numberic().add( 1, 2 ) )
// 测试
var ss =  new Numberic()
console.log( "修改数据前：", ss )
ss.PI = 99
console.log( "修改数据后：", ss )
