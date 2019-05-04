$("#inputdata").on("change", function() {
    this.setAttribute(
        "data-date",
        moment(this.value, "YYYY-MM-DD")
        .format( this.getAttribute("data-date-format") )
    )
}).trigger("change")

const inputs = [
    document.querySelector("#inputdata"),
    document.querySelector("#dieta"),
    document.querySelector("#medicacao"),
    document.querySelector("#fisioterpia")
]

const formulario = document.querySelector(".pag__form")

formulario.addEventListener('submit', function(event){
    event.preventDefault()

    //criar linha da tabela

    const linhaPaciente = document.createElement("tr")
    linhaPaciente.classList.add("pag__pacient--data")

    const tbodyPaciente = document.querySelector(".pag__tbody")
    tbodyPaciente.appendChild(linhaPaciente)

    //pegar os valores de cada input

    inputs.forEach(function(input){
        const celulaPaciente = document.createElement("td")
        celulaPaciente.textContent =input.value
        linhaPaciente.appendChild(celulaPaciente)
    })

    //criar os botoes de edição 

    const editarLinhaPaciente = document.createElement("td")
    editarLinhaPaciente.classList.add("pag__pacient--button")
    editarLinhaPaciente.classList.add("btn-edit")

    const buttonEdit = document.createElement("button")
    const imgEditIcon = document.createElement("IMG")
    imgEditIcon.src = "../../img/icone-editar.png"

    linhaPaciente.appendChild(editarLinhaPaciente)
    editarLinhaPaciente.appendChild(buttonEdit)
    buttonEdit.appendChild(imgEditIcon)

    //criar os botoes de remoção 

    const deletarLinhaPaciente = document.createElement("td")
    deletarLinhaPaciente.classList.add("pag__pacient--button")
    deletarLinhaPaciente.classList.add("btn-delete")

    const buttonDelete = document.createElement("button")
    const imgDeleteIcon = document.createElement("IMG")
    imgDeleteIcon.src = "../../img/icone-deletar.png"

    linhaPaciente.appendChild(deletarLinhaPaciente)
    deletarLinhaPaciente.appendChild(buttonDelete)
    buttonDelete.appendChild(imgDeleteIcon)

    inputs[0].value = " "
    inputs[1].value = " "
    inputs[2].value = " "
    inputs[3].value = " "

    inputs[0].focus()

})


