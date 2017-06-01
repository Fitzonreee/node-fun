function sigma(num) {
  sum = 0;
  for (var i = 0; i <= num; i++) {
    if (i > 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}
// sigma(5);

const sigmaES6 = (num, sum = 0) => {
  for (var i = 0; i <= num; i++) {
    if (i > 0) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sigmaES6(5));




function factorial(num) {
  product = 1;
  for (var i = 0; i <= num; i++) {
    if (i > 0) {
      product = product * i;
    }
  }
  console.log(product);
}
// factorial(3);
