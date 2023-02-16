var tarefas = [
  "fazer exercisio",
  "estudar codigo",
  "trabalhar",
  "arrumar casa",
];

let find = tarefas.includes("estudar codigo");

if ((find = true)) {
  console.log("Hora de estudar código");
} else {
  console.log("Hoje pode descansar");
}

let index = tarefas.indexOf("estudar codigo");

if (index !== -1) {
  tarefas[index] = "estudar javascript";
}
console.log(tarefas);

let tarefasPop = tarefas.pop();
console.log(tarefas);

let tarefasUnshift = tarefas.unshift("molhar as plantas");
console.log(tarefas);
