window.addEventListener("load", () => {

  const pads =  document.querySelectorAll(".pads div") //node list com os filhos de .pads, que são divs
  const sound = document.querySelectorAll(".sound") //node list de todos os .sounds
  const dots = document.querySelector(".visual")

  const colors = [
    "#d3d160",
    "#72e097",
    "#60c2d3",
    "#606bd3",
    "#d183ae",
    "#eb7e76"
  ]



  //Pegando o evento de click nos pads

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function(){
      sound[index].currentTime = '0'
      sound[index].play()

      createBubbles(index)
    })


  });

  //Criar uma finção que faz bolas saltarem pela tela
  const createBubbles = (index) => {
    const bubble = document.createElement("div")
    dots.appendChild(bubble)

    bubble.style.backgroundColor = colors[index]
    bubble.style.animation = "jump 1s ease";
  }
});










