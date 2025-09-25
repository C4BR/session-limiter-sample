const orderedActiveSessions = [
    {id:1, status:"ATIVA"}, {id:2, status:"ATIVA"}, {id:3, status:"ATIVA"}, {id:4, status:"ATIVA"}, 
    {id:5, status:"ATIVA"}, {id:6, status:"ATIVA"}, {id:7, status:"ATIVA"}, {id:8, status:"ATIVA"}, 
    {id:9, status:"ATIVA"}, {id:10, status:"ATIVA"}
]

const maxSessions = 5

if(orderedActiveSessions.length >= maxSessions){
    const sessionsToExpire = orderedActiveSessions.slice(0, orderedActiveSessions.length - maxSessions + 1)
    
    //sua query para atualizar as sessões como expiradas, exemplo em memória com for
    for(let i = 0; i < sessionsToExpire.length; i++){
        sessionsToExpire[i].status = "EXPIRADA"
    }
}

console.log(orderedActiveSessions)

//seu código para criar a nova sessão

