const exibeMensagemVar = () => {
    var msgForaIF = 'Brasil';
    
    if (true) {
        var msgDentroIF = 'Portugal';
    }console.log(msgDentroIF)


    console.log('1', msgForaIF)
    console.log('2', msgDentroIF)
}

exibeMensagemVar();

const exibeMensagemLet = () => {
    let msgForaIF = 'Brasil';
    
    if (true) {
        let msgDentroIF = 'Portugal';
    }console.log(msgDentroIF)


    console.log('1', msgForaIF)
    console.log('2', msgDentroIF)
}

exibeMensagemLet();