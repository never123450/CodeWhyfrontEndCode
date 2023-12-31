# Day10 作业布置

## 一. 完成课堂所有的代码

- 重点
  - redux中的hooks
  - 服务端渲染的概念
  - 项目的初始化和搭建过程

## 二. Redux中有哪些Hooks？如何使用对应的Hooks？

- useSelector
  - 可以将redux中的数据映射到组件中
  - 第一个参数是一个回调函数
    - 函数参数是state
    - 返回一个对象,对象中包含state中的数据
  - 第二个参数是showEqual
    - 作用 ---> 只有当前获取的对应数据改变后,对应的组件才会重新渲染
- useDispatch
  - 没有参数
  - 返回一个diapatch函数 ---> 可以传入action对象

## 三. React18新增哪些Hooks，这些Hooks有什么作用？

- useId
  - 用于生产横跨服务端和客户端的稳定的唯一的ID的同时避免hydration不匹配的hook
- useTransition
  - 降低某部分任务的更新优先级,先完成优先级较高的任务后执行
- useDeferredValue
  - 接受一个值,并返回该值的 新副本,该副本将在优先级较高的任务完成后执行

## 四. 项目初始化的流程包括哪些操作？需要进行哪些常见的配置？

- 项目初始化的流程
  - 使用React脚手架创建一个初始化的项目
  - 删除不需要的文件
  - 更换网站图标,更换网站的标题
  - 按不同的功能模块在src文件夹下完善项目的目录结构
  - 搭建基础的页面,配置路由,选择路由模式
  - 创建保存项目数据的store
  - 二次封装axios,配置BaseUrl,以便发送网络请求

- 常见的配置
  - 配置别名
  - 使用craco工具方便对webpack进行配置

## 五. 手动配置Redux，包括普通的方式和RTK的方式。

- 配置redux的普通方式
  - 每一个模块设置以下文件目录
    - index.js  ---> 文件入口
    - createActions.js  ---> 创建action对象
    - reducer.js ---> 定义初始化数据,处理提交的action对象
    - constants.js ---> 定义常量数据
- 配置redux的RTK方式
  - 使用configStore创建一个store
    - 传入对象类型,对象中是不同模块的reducer
  - 在不同的模块使用createSilce定义自己的初始化数据,reduce,action
- 将配置的store导出
- 在index.js文件中从react-redux导出Provider组件
- 用Provier组件包裹根组件,在store属性中传入我们自己创建的store

## 六. 完成Axios库的二次封装，并且说明封装的好处。

- 使用类进行封装
- 类封装的好处
  - 扩展性好

## 七.对SSR内容进行总结(SPA/SSR/同构/hydration)

- SPA
  - Single Page Application, 单页面应用
  - 一种Web应用程序,它只需要将单个页面夹加载到浏览器中
  - 特点
    - 一旦页面加载完成,SPA不会因为用户的操作而进行页面的重新加载或跳转
    - 利用路由机制实现页面内容的变换
  - 优点
    - 用户体验好、快、内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染，SPA 相对服务器压力小
    - 前后端职责分离，架构清晰，前后端进行交互逻辑，后端负责数据处理
  - 缺点
    - 初次加载耗时多：为实现单页 Web 的应用功能及显示效果，需要在加载页面的时候将JavaScript、CSS统一加载，部分页面按需加载
    - SEO难度较大：由于所有的内容都在一个页面中动态替换显示，所以在SEO上其有着天然的弱势。
    - 如果你使用了AJAX进行局部刷新，浏览过的内容就不能用后退按钮重现了。
- SSR
  - Server Side Rendering, 服务端渲染的简称
  - 在服务器端生成完整的HTML页面结构,返回给浏览器进行渲染
  - 特点
    - 在服务端生成html网页的dom元素
    - 客户端（浏览器）只负责显示dom元素内容
  - 优点
    - 有利于SEO，网站通过href的url将搜索引擎直接引到服务端，服务端提供优质的网页内容给搜索引擎。
  - 缺点
    - 需要消耗一定的服务器资源
- 同构应用
  - 一套代码既可以在服务端运行又可以在客户端运行,我们称为同构应用
  - 同构是一种SSR的形态,是现代SSR的一种表现形式
- hydration
  - SSR引申出来的概念
  - SSR ----> 服务端将生成好的HTML页面发送浏览器进行展示,这其中是没有js逻辑的,比如事件的绑定,也就是不能和用户进行交互的
  - 在服务端渲染的时候,UI框架(React/Vue)会记录SSR渲染的页面的内部特征,然后将这个特只能特征映射到我们要在浏览器展示的页面上,它会让我们的页面具有交互性,这个过程称之为Hydration



































































































