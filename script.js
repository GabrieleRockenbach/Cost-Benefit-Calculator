const btn = document.querySelector("#calcButton");
const btnModal = document.querySelector("#btnModal");
const modal = document.getElementById("modal");
const modalTitle = document.querySelector(".titleModal");

btnModal.addEventListener("click", () => {
  modal.style.display = 'none';
  document.getElementById("gasolineValue").value = "";
  document.getElementById("ethanolValue").value = "";
})


//Verifica se o usuário clicou fora do modal.
document.addEventListener('click', event => {
  if (event.target.classList.contains('modalContainer')) {
    modal.style.display = 'none';
  }
});

//function clean()
//Escrever a função dessa forma (função abaixo), tem o funcionamento igual da forma acima clean(), as duas formas são usadas em projetos.
//Mas a abaixo é mais atual se chama Arrow function e é padrão em vários frameworks como react, por exemplo.
const validaCustoBeneficio = (e) => {
  e.preventDefault();

  const gasolineValue = document.querySelector("#gasolineValue").value;
  const ethanolValue = document.querySelector("#ethanolValue").value;
  const calcResult = ethanolValue / gasolineValue;

  modal.style.display = "flex"

  calcResult > 0.7 ? modalTitle.innerHTML = "É melhor abastecer com gasolina!"
    : calcResult < 0.7 ? modalTitle.innerHTML = "É melhor abastecer com etanol!"
      : calcResult == 0.7 ? modalTitle.innerHTML = "Pode escolher! Os beneficios entre etanol e gasolina são os mesmos!" : null
}

