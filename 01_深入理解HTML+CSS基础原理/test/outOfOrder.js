Array.prototype.shuffle = function () {
  var input = this;
  for (var i = input.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = input[randomIndex]; 
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}
var tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tempArray.shuffle(); 
console.log(tempArray);  

/*
  Math.floor(Math.random() * (i+1))  是一个常用的 JavaScript 表达式，
  用于生成一个介于 0 和 i（包括 i）之间的随机整数。
  让我们逐步解释这个表达式的含义：
  1. Math.random() ：这是一个返回介于 0（包括 0）和 1（不包括 1）之间的随机小数的 JavaScript 方法。
  例如，它可能返回 0.234234 或 0.876543。
  2. (i+1) ：这个部分将变量 i 的值加 1，确保生成的随机数范围包括 i 在内。
  3. Math.floor() ：这是一个 JavaScript 方法，用于将一个小数向下取整为最接近的整数。例如，Math.floor(3.8)  
  返回 3，Math.floor(7.2)  返回 7。
  因此，整个表达式的作用是生成一个介于 0 和 i（包括 i）之间的随机整数。这个表达式在洗牌算法中常用于生成随机索引，
  用来交换数组中的元素，以实现数组的乱序。 
*/
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 生成一个随机索引
    [array[i], array[j]] = [array[j], array[i]]; // 交换当前位置和随机位置的元素
  }
  return array;
}

// 示例用法
const myArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(myArray);
console.log(shuffledArray); // 输出乱序后的数组