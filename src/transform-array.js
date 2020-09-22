const COMMANDS = new Map();
const TO_BE_REMOVED = Symbol();

COMMANDS.set("--discard-prev", (i, a, r) => {
  r.pop();
  r.push(TO_BE_REMOVED);
  return i + 1;
});

COMMANDS.set("--discard-next", (i, a, r) => {
  r.push(TO_BE_REMOVED);
  return i + 2;
});

COMMANDS.set("--double-prev", (i, a, r) => {
  let v = r.pop();
  if (v !== undefined) {
    r.push(v);
    r.push(v);
  }
  r.push(TO_BE_REMOVED);
  return i + 1;
});

COMMANDS.set("--double-next", (i, a, r) => {
  r.push(TO_BE_REMOVED);
  let v = a[i + 1];
  if (v !== undefined) {
    r.push(v);
    r.push(v);
  }
  return i + 2;
});



module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw new Error("The argument isn't an array.");

  const result = [];

  for (let i = 0; i < arr.length;) {
    const v = arr[i];

    if (COMMANDS.has(v)) {
      const command = COMMANDS.get(v);
      i = command(i, arr, result);
    } else {
      result.push(v);
      i++;
    }
  }
  return result.filter(x => x !== TO_BE_REMOVED);
};