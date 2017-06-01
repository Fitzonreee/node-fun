function sigma(num) {
  sum = 0;
  for (var i = 0; i <= num; i++) {
    if (i > 0) {
      sum = sum + i;
      // console.log(i);
    }
  }
  console.log(sum);
}
// sigma(5);

function factorial(num) {
  product = 1;
  for (var i = 0; i <= num; i++) {
    if (i > 0) {
      // console.log(i);
      product = product * i;
    }
  }
  console.log(product);
}
factorial(3);
