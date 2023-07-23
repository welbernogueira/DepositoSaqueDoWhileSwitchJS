let saldo = prompt("Informe a quantidade de dinheiro inicial:");
saldo = parseFloat(saldo);
let opcao = "";

do {
  opcao = prompt(
    "Saldo disponível: R$ " +
      saldo +
      "\n1. Depositar dinheiro" +
      "\n2. Sacar dinheiro" +
      "\n3. Sair"
  );

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Quanto mais deseja depositar?"));
      break;
    case "2":
      saldo -= prompt("Quanto deseja sacar?");
      break;
    case "3":
      alert("Operação cancelada!");
      break;
    default:
      alert("Entrada inválida!");
  }
} while (opcao !== "3");
