/* eslint no-eval: 0 */
const compute = (boardValue) => {
  if (
    boardValue[boardValue.length - 1] === "." ||
    boardValue[boardValue.length - 1] === "+" ||
    boardValue[boardValue.length - 1] === "/" ||
    boardValue[boardValue.length - 1] === "-" ||
    boardValue[boardValue.length - 1] === "*"
  ) {
    boardValue = boardValue.slice(0, boardValue.length - 1);
  }
  let returnVal = eval(boardValue).toString();
//   let dotInclude = false;
//   for (let index = 0; index < returnVal.length; index++) {
//     const char = returnVal[index];
//     if (char === ".") {
//       dotInclude = true;
//     }
//   }
//   console.log(returnVal, returnVal.length);
//   if (dotInclude && returnVal.length > 10) {
//     returnVal = eval(boardValue).toFixed(8);
//   }
  return returnVal;
};

export default compute;
