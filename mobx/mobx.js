import { observable, computed, autorun, when, reaction, action } from "mobx"

class Store {
    @observable num = 22
    @observable str = "string"
    @observable bool = false
    @observable obj = {
        name: "tan",
        age: 12
    }
    @observable array = []

    @computed get mixed(){
        return this.obj.age + "-----" + this.str
    }

    @action bar(){
        this.str = "修改值了--"
        this.num = 89
    }
}

var store = new Store()
// 测试 computed
var foo =  computed( function(){
    return store.str + "/" + store.obj.age
})
console.log( foo.get() )
console.log( store.mixed )

foo.observe( function( change ){
    console.log( "computed 值改变：" )
    console.log( "修改值：", change )
})

// 测试 autorun 
autorun( () => {
    console.log( "autorun运行：" )
    console.log( store.str + "/" + store.obj.age )
})

// 测试 wen
when( ()=> store.bool , ()=> console.log( "变成 true 了..." ) )

// 测试 reaction
reaction( () => [ store.str, store.obj.age ], arr => console.log( "reaction 运行：",arr ) )

console.log( "开始测试：------- wen ------" )
store.bool = true
console.log( "开始测试：------- 其他三个 ------" )
store.obj.age = 13
// console.log( store.mixed )
// store.num = 78
// console.log( store.mixed )



// when( ()=> store.bool , ()=> console.log( "变成 true 了..." ) )
// store.bool = true



// reaction( () => [ store.obj.age ], arr => console.log( arr ) )
// store.bool = true
// store.num = 78
// store.str = "999999"

// console.log( store.mixed )
// store.bar()

// action( function(){
    // console.log( "触发事件---" )
    // store.str = "ppppppp"
    // store.num = 8765
    // store.obj.age = 45
// })()



reaction( () => [ store.str, store.obj.age ], arr => console.log( "reaction 运行：",arr ) )
// 不用 action 改变值
console.log( "不用 action 改变值：" )
store.obj.age = 11
store.str = "你好---"
// 使用 @action
console.log( "使用 action 修饰器改变多个值" )
store.bar()
// 使用 action   执行
console.log( "使用 action 修饰器改变多个值" )
action( () => {
    store.str = "ppppppp"
    store.obj.age = 45
})()
