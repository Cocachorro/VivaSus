const formLogin = document.getElementById("login_form");
const inputCpf = document.getElementById("cpf");
const inputSenha = document.getElementById("senha");

inputCpf.addEventListener("input", function () {
  let valor = inputCpf.value.replace(/\D/g, "");

  if (valor.length <= 11) {
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  inputCpf.value = valor;
});

formLogin.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const valorCpf = inputCpf.value;
  const valorSenha = inputSenha.value;

  if (valorCpf === "123" && valorSenha === "123") {
    window.location.href = "dashboard.html";
  } else {
    alert("CPF ou senha incorreto. Tente novamente.");
  }
});
