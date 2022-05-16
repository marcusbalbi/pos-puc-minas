function subtracao(n, y) {
  return n - y;
}

function adicao(n, y) {
  return n + y;
}

function multiplicacao(n, y) {
  return n * y;
}

function divisao(n, y) {
  return n / y;
}

module.exports = {
  add: adicao,
  sub: subtracao,
  mult: multiplicacao,
  div: divisao,
};
