//立即执行函数(IIFE)
//好处：可以避免对外部的变量造成污染
(function (window) {
    //只要是给构造函数的实例化对象身上添加属性/方法，那么直接在函数中this对象的地址引用身上直接添加
    function Promise(executor) {
        //给Promise构造函数所产生的实例化对象身上添加属性
        this.PromiseState = 'pending';
        this.PromiseResult = undefined;
        this.callbackFn = [];
        //定义resolve函数
        //箭头函数中的定义，如果形式参数只有一个，那么是可以省略小括号的
        const _resolve = value => {
            //判断只要当前Promise实例化对象的状态不是pending，那么就有可能已经是fulfilled或者是rejected
            //所以就不在更改了，只要还为pending就有可能根据调用的不同的方法来进行更改状态
            if (this.PromiseState !== 'pending') return;
            this.PromiseState = 'fulfilled';
            this.PromiseResult = value;
            //执行当Promise实例化对象的状态为pending的时候，回调函数
            this.callbackFn.forEach(item => {
                item.onfulfilled();
            })
        }
        //定义reject函数
        //箭头函数是没有自己的this指向的，取决于当前函数所声明的位置的this指向(外层函数中的this指向)
        const _reject = value => {
            if (this.PromiseState !== 'pending') return;
            this.PromiseState = 'rejected';
            this.PromiseResult = value;
            this.callbackFn.forEach(item => {
                item.onrejected();
            })
        }
        try {
            executor(_resolve, _reject);
        } catch (e) {
            if (typeof e === 'object') {
                this.PromiseState = 'rejected';
                this.PromiseResult = e.message;
            } else {
                this.PromiseState = 'rejected';
                this.PromiseResult = e;
            }
        }
    }
    //借助于Object.assign方法使用一个对象和prototype对象进行合并
    Object.assign(Promise.prototype, {
        //ES6中方法的简写
        //onfulfilled:成功的回调函数
        //onrejected:失败的回调函数
        //方法中的this指向取决于方法的调用者，谁调用了这个方法，那么函数中的this就指向哪一个对象
        then(onfulfilled, onrejected) {
            // console.log('实例化对象：', this);

            //如果成功的回调函数并不是一个函数，则增加(补充)成功的回调函数默认值
            if (!(onfulfilled instanceof Function)) {
                onfulfilled = value => value;
            }

            //如果失败的回调函数并不是一个函数，则增加(补充)失败的回调函数默认值
            if (!(onrejected instanceof Function)) {
                onrejected = reason => {
                    throw reason;
                }
            }

            //调用then方法会得到一个返回值，为新的Promise实例化对象
            return new Promise((resolve, reject) => {
                //封装函数
                const _common = function (callback) {
                    setTimeout(() => {
                        try {
                            const value = callback(this.PromiseResult);
                            if (value instanceof Promise) {
                                value.then(resolve, reject);
                            } else {
                                resolve(value);
                            }
                        } catch (err) {
                            reject(err);
                        }
                    })
                }
                //判断
                if (this.PromiseState === 'fulfilled') {
                    //调用公共的封装函数
                    _common.call(this, onfulfilled);
                } else if (this.PromiseState === 'rejected') {
                    //调用公共的封装函数
                    _common.call(this, onrejected);
                } else {
                    //如果executor执行器函数当中执行的是异步程序，
                    //当结果还没有完全执行完毕(时间还没有完全到达)，
                    //此时Promise实例化对象的状态为Pending的状态
                    this.callbackFn.push({
                        //添加两个回调函数
                        onfulfilled: _common.bind(this, onfulfilled),
                        onrejected: _common.bind(this, onrejected)
                    })
                }
            })
        },
        catch(onrejected) {
            return this.then(undefined, onrejected);
        }
    });
    window.Promise = Promise;
})(window); 