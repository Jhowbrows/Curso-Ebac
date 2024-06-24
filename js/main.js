$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    });
    
    $('form').validate({
        rules: {
            nome: {required: true},
            email: {required: true, email:true},
            telefone: {required: true},
            cpf: {required:true},
            cep: {required: true}
        },
        messages: {
            nome: 'Por favor insira o seu nome',
            email: 'Por favor, insira o seu email',
            telefone: 'Por favor, insira o seu número de telefone',
            cpf: 'Por favor,insira o número do seu CPF',
            cep: 'Por favor insira o numero do seu cep'
        },
        submitHandler: function(form){
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Por Favor, preencha os ${camposIncorretos} para prosseguir com a compra!`);
            }
        }
    })
})
