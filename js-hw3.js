function pow(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result = result * x;
  }
  return result;
}

// Example
console.log(pow(5, 2));
