import http from "node:http"

const PORT = 3333

const participants = []

const server = http.createServer((request,response)=>{
    const {method, url} = request
    console.log('URL: ' + url)

    if(url === '/participants' && method === 'GET'){
        console.log('GET /participants')

        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(participants))


    }else if(url === '/participants' && method === 'POST'){
        console.log('POST /participants')

        let body = ''

        request.on('data', (chunk)=>{
            body += chunk.toString()
        })

        request.on('end', ()=>{
            const participant = JSON.parse(body)
            if(participant.age < 16){
                response.writeHead(403, {'Content-Type': 'application/json'})
                return  response.end(JSON.stringify({message: "Apenas usuários maiores que 15 anos são permitidos"}))
            }

            if(participant.password !== participant.confirmPassword){
                // erro
                response.writeHead(400, {'Content-Type': 'application/json'})
                return  response.end(JSON.stringify({message: "As senhas fornecidas não correspondem"}))
            }

            participant.id = participants.length + 1
            participants.push(participant)
            response.writeHead(201, {'Content-type': 'application/json'})
            response.end(JSON.stringify(participant))


            console.log(participant)
        })

    }else if(url === '/participants/count' && method === 'GET'){
        console.log('GET /participants/count')

        const quantidadeParticipant = participants.length

        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(quantidadeParticipant))
        
    }else if(url === '/participants/count/over18' && method === 'GET'){
        console.log('GET /participants/count/over18')

        const olderAge = participants.filter((participant)=> participant.agr >= 18).length

        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(olderAge))
        
    }else if(url === '/participants/city/most' && method === 'GET'){
        console.log('GET /participants/city/most')
        
        const contantoCidades = participants.reduce((acc, participant)=>{
            acc[participant.city] = (acc[participnat.city] || 0) + 1
            return acc
        },{})

        console.log(contantoCidades)

        let quantidadeDeParticipantes = 0
        let cidadeComMaiorNumeroDeParticipantes = ''
        Object.entries(contantoCidades).forEach(([city, count])=>{
            if(count > quantidadeDeParticipantes){
                quantidadeDeParticipantes = count
                cidadeComMaiorNumeroDeParticipantes = city
            }
        })
        response.setHeader('Content-type', 'application/json')
        response.end(JSON.stringify({"Quantidade total de participantes": quantidadeDeParticipantes, "Cidade com maior número de participantes": cidadeComMaiorNumeroDeParticipantes}))


    }else if(url.startsWith('/participants/') && method === 'PUT'){
        console.log('PUT /participants/')

        const participantId = url.split('/')[2]

        let body = ''

        request.on('data', (chunk)=>{
            body += chunk.toString()
        })

        request.on('end', ()=>{
            const updatedParticipant = JSON.parse(body)
            const index = participants.findIndex((participant)=> participant.id == participantId)

            if(index !== -1){
                
                participants[index] = {...participants[index], ...updatedParticipant}

                response.setHeader('Content-Type', 'application/json')
                return response.end(JSON.stringify(participants[index]))
            }else{
                response.writeHead(404, {'Content-type': 'application/json'})
                return response.end(JSON.stringify({message: "Participante não encontrado"}))
            }
        })

    }else if(url.startsWith('/participants/') && method === 'DELETE'){
        console.log('DELETE /participants/')

        const participantId = url.split('/')[2]

        const index = participants.findIndex((participant)=> participant.id == participantId)

        if(index !== -1){
            participants.splice(index, 1)
            response.writeHead(200, {'Content-type': 'application/json'})
            response.end(JSON.stringify({message: "Participante deletado"}))
        }else{
            response.writeHead(404, {'Content-type': 'application/json'})
            response.end(JSON.stringify({message: "Participante não encontrado"}))
        }
        

    }else if(url.startsWith('/participants/') && method === 'GET'){
        console.log('GET unico /participants/')
        
        const participantId = url.split('/')[2]
        const findParticipant = participants.find((participant)=> participant.id == participantId)

        if(!findParticipant){
            response.writeHead(404, {'Content-Type': 'application/json'})
            return  response.end(JSON.stringify({message: "Participante não encontrado"}))
        }

        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(findParticipant))
    }
    else{
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({codigo: 404, message: "Página não encontrada"}))
    }

})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT: ${PORT}`)
})