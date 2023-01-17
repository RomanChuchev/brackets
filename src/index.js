module.exports = function check(str, brackets) {
  const stack = [];
  const openBr = brackets.map((el) => el[0]);
  const pathBr = {};
  for (let el of brackets) {
    pathBr[el[1]] = el[0];
  }
  for (let i = 0; i < str.split("").length; i++) {
    const current = str.split("")[i];

    if (openBr.includes(current) && pathBr[current] !== current) {
      stack.push(current);
    } else if (pathBr[current] === current) {
      let top = stack[stack.length - 1];

      if (pathBr[current] === top) {
        stack.pop();
      } else stack.push(current);
    } else if (current in pathBr) {
      if (stack.length === 0) return false;

      let top = stack[stack.length - 1];

      if (pathBr[current] === top) {
        stack.pop();
      } else return false;
    }
    console.log(current, stack);
  }
  return stack.length === 0;
};
