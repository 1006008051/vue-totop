# vue-totop
![markdown](http://file.gcx365.com:8090/group1/M00/00/A2/d1ozqVvyUPCAWam4AAAQsow7OYo872.png "markdown")
>vue 点击返回顶部插件，可以根据参数设定按钮大小，颜色，类型，返回顶部的时间等。

![markdown](http://file.gcx365.com:8090/group1/M00/00/A3/d1ozqVv1CwOAWuMiAAAvxIhhUak127.jpg "markdown")
# 安装
> `npm install vue-totop -S`

# 使用
**注入**
> // ES6</br>
`import vueToTop from 'vue-totop'`</br>
> //or require</br>
`var vueToTop = require('vue-totop')`</br>

> `Vue.use(vueToTop)`

**组件使用**
> `<vueToTop></vueToTop>`

# 参数

|    参数    |  说明   |  类型  |  可选值  |  默认值  |
| :--------: | :-----:  | :----:  | :----:  |:----:  |
| type      | 按钮的类型，一共16种   |number| 0~15  |0    |
| top | 滚动条离顶部多高时，显示返回顶部按钮 |number| 大于0的整数 |400|
| right| 按钮右部定位位置|number| 大于0的整数  |30 |
| bottom| 按钮底部定位位置|number| 大于0的整数  |30 |
| size| 按钮大小|number| 大于0的整数  |24 |
| color| 按钮颜色|string| rgb/hex  |'#666' |
| duration| 返回顶部的间隔时间 |number| 大于0的整数   |300 |
