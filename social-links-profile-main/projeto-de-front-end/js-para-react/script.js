// Destructuring

function MouseMove(event) {
    const clientY = event.clientY
    const clientX = event.clientX
    console.log(clientY, clientX)
}

const MouseMoving = (event) =>{
    const {clientX, clientY} =  event
    console.log(clientY, clientX)
}

const MouseHandle = ({clientX, clientY}) => console.log(clientX, clientY)

// document.documentElement.addEventListener('mousemove', MouseHandle)

// rest

const showList = (empresa, ...funcionarios)=>{ // 3 pontinhos (...) significa que pode receber vários argumentos
    funcionarios.forEach((funcionario)=>{
        console.log(funcionario, empresa)
    })
}

// showList('Senai', 'Carlos', 'Leticia', 'Bruno', 'Márcia')

// spread

const numeros = [12,13,21,30,4,6]

const maior = Math.max(...numeros)

const carro = {
    cor: 'prata',
    ano: 2008,
    modelo: 'Ka'
}

console.log(maior)