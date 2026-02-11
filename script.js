// const botaoEvento = document.getElementById('imprimir');
// const resultadoImpressao = document.getElementById('impressao');

// function  ImprimirResultado() {
//   const resultado = 'você é feio';
//   resultadoMostrado = resultado;

//   resultadoImpressao.textContent = "Não adianta. " + resultadoMostrado;
// }

botaoEvento.addEventListener('click', ImprimirResultado);

const campoPeso = document.getElementById('peso');
const campoAltura = document.getElementById("altura");
const botaoCalcular = document.getElementById('botao-calcular');
const resultadoImc = document.getElementById('resultado-imc');

function imprimirResultado(event) { //aqui a função teve que receber event para manipular o click

  event.preventDefault(); //impede que o botão recarregue a página ao tentar enviar o formulário, que é o comportamento padrão

  const campoPeso = parseFloat(peso.value);
  const campoAltura = parseFloat(altura.value);

  if (isNaN(peso) || isNaN(altura) || altura === 0) {
      resultadoImc.textContent = "Por favor, insira valores válidos para peso e altura.";
      return;

  }

  const resultado = peso / (altura * altura);

  resultadoImc.textContent = "Seu IMC é de: " + resultado.toFixed(2);
}

botaoCalcular.addEventListener('click', imprimirResultado);
