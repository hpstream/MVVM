// 找零钱
// 我们的零钱 1 5 10 20 50 100
// 怎么找钱最合适

class Change {
  constructor(changeType) {
    this.changeType = changeType;
    this.cache = {};
    this.typeCount = {};
  }
  mkChange(amount) {
    let min = []; // 最后方案
    if (!amount) {
      return [];
    }
    if (this.cache[amount]) {
      return this.cache[amount];
    }
    for (let i = 0; i < this.changeType.length; i++) {
      // 先找一张试试
      const hasAmount = amount - this.changeType[i];
      let newMin; // 临时方案
      if (hasAmount >= 0) {
        //继续找钱
        newMin = this.mkChange(hasAmount);
      }

      if (hasAmount >= 0) {
        if (newMin.length < min.length - 1) {
          min = [this.changeType[i]].concat(newMin);
        }
        if (min.length === 0) {
          // 如果最优解不存在,那么他本上就是最优解
          min = [this.changeType[i]].concat(newMin);
        }
        min = [this.changeType[i]].concat(newMin);
      }
    }
    return (this.cache[amount] = min);
  }
}

const change = new Change([1, 5, 10, 20, 50, 100]);

// console.log(change.mkChange(2));
console.log(change.mkChange(10));
// console.log(change.mkChange(2));
// console.log(change.mkChange(35));
// console.log(change.mkChange(383));

// class Change1 {
//   constructor(changeType) {
//     // 倒序，大的数字在前面
//     this.changeType = changeType.sort((r1, r2) => r2 - r1);
//     this.cache = {};
//   }
//   mkChange(amount) {
//     const arr = [];

//     for (let i = 0; i < this.changeType.length; i++) {
//       let tem = this.changeType[i];
//       while (amount - tem >= 0) {
//         arr.push(tem);
//         amount -= tem;
//       }
//     }
//     return arr;
//   }
// }

// const change = new Change1([1, 5, 10, 20, 50, 100]);

// console.log(change.mkChange(2));
// console.log(change.mkChange(5));
// console.log(change.mkChange(383));
// console.log(change.mkChange(35));
// console.log(change.mkChange(383))
