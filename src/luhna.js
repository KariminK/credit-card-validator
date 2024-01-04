const luhnaObj = {
  transformArr(string) {
    return string
      .replaceAll(" ", "")
      .split("")
      .map((num) => Number(num))
      .reverse();
  },
  multiplyElementsBy2(array) {
    return array.map((num, index) => {
      if (index % 2) {
        if (num * 2 >= 10) {
          const strNum = String(num * 2);
          const [num1, num2] = strNum.split("");
          let sum = Number(num1) + Number(num2);
          return sum;
        }
        return num * 2;
      } else {
        return num;
      }
    });
  },
  sumElements(array) {
    return array.reduce((prev, curr) => {
      return (prev += curr);
    }, 0);
  },
  checkCard(string) {
    let numArr = this.transformArr(string);
    if (numArr.length === 0) return "pole nie może być puste";
    if (numArr.length < 12 || numArr.length > 17) return "zła ilość znaków";
    for (let num of numArr) {
      if (isNaN(+num)) return "zawiera nieprawidłowe znaki";
    }
    numArr = this.multiplyElementsBy2(numArr);
    numArr.reverse();
    const sum = this.sumElements(numArr);
    if (sum % 10 === 0) return true;
    else return "nieprawidłowa suma kontrolna";
  },
};
export default luhnaObj;
