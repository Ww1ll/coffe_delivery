function registrar() {
    let logradouro = document.frm_cadastro.logradouro_txt.value;
    let numero = document.frm_cadastro.numero_txt.value;
    let bairro = document.frm_cadastro.bairro_txt.value;
    
    if ((logradouro == "" || numero == "" ) && bairro == ""){
        alert("Por favor, preencha ao menos os campos logradouro, numero e bairro");              
    }
    else {
        alert("Registro criado com sucesso");
    }
}

function limpar() {
    document.frm_cadastro.logradouro_txt.value="";
    document.frm_cadastro.numero_txt.value="";
    document.frm_cadastro.bairro_txt.value="";
    document.frm_cadastro.email_txt.value="";
    document.frm_cadastro.observacoes.value="";
    document.frm_cadastro.telefone_txt.value="";
    document.frm_cadastro.logradouro_txt.focus();
}