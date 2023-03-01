import ehmCpf from "./validaCpf.js";
import ehMaiorDeIdade from "./validaIdade.js";

const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach((campo) => {
    campo.addEventListener('blur', ()=> verificaCampo(campo));
})

function verificaCampo(campo) {
    if(campo.name == 'cpf' && campo.value.length >= 11) {
        ehmCpf(campo);
    }

    if(campo.name == 'aniversario' && campo.value != '') {
        ehMaiorDeIdade(campo);
    }
}