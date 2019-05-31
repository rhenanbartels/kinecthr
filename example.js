function sinFunction([a, b, c, d]) {
    return (t) => a + 1/(1/(b * (t - c)) + 1/ d);
}

x = [32,37,42,47,52,57,62,67,72,77,82,87,92]
y = [749,1525,1947,2201,2380,2537,2671,2758,2803,2943,3007,2979,2992]

var data = {
  x: new Array(13),
  y: new Array(13)
};

for (var i = 0; i < 13; i++) {
  data.x[i] = x[i];
  data.y[i] = y[i];
}
const options = {
  damping: 0.001,
  initialValues: [100,30,10,5000]
};

var ans = levenbergMarquardt(data, sinFunction, options);
console.log(ans);
