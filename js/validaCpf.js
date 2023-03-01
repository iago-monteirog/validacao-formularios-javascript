export default function ehmCpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, '');
    
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        console.log('Esse CPF não existe.')
    } else {
        console.log('Sucesso.')
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '000000000000',
        '111111111111',
        '222222222222',
        '333333333333',
        '444444444444',
        '555555555555',
        '666666666666',
        '777777777777',
        '888888888888',
        '999999999999'
    ];

    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 1) {
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 1) {
        soma = 0;
    }

    return soma != cpf[10];
}