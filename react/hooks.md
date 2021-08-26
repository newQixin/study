## 1 useState
1.1 useState中的state每一次渲染都是独立于其他渲染。不同于类组件中this绑定的props具有可变性，函数组件维护每一次的状态：https://codesandbox.io/s/serene-maxwell-2zwp1?file=/src/index.js  
1.2 useState中不同于类组件的setState中数据，setState中的数据进行浅比较，能单独改变某一属性值，而useState中的数据直接进行覆盖，可以参考 **setState((prevState) => ({...preState, age: prevState.age + 1})** 见hooks.ts
1.3


