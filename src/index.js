module.exports = function solveEquation(equation) {
  var a = parseInt(equation);
  var substs = equation.split('* x');
  var b = parseInt(substs[1].split('^2')[1].replace(/\s/g, ""));
  var c = parseInt(substs[2].replace(/\s/g, ""));
  var d = (b * b) - (4 * a * c);
  return [
    (-b + Math.sqrt(d)) / (2 * a),
    (-b - Math.sqrt(d)) / (2 * a)
  ]
    .map(Math.round)
    .sort((a, b) => a - b);
}
