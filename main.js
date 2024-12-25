$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(DDD) 99999-9999'
    })
    $('#cpf').mask('000.000.000-00',{
        placeholder: '123.456.789-00'
    })
    $('#cep').mask('00000-000',{
        placeholder: '99999-999'
    })

    $('#form').validate({
        rules:{
            nome:{
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required:true
            },
            endereco:{
                required:true
            },
            cep:{
                required:true
            }

        },
        messages:{
        nome: 'Por favor, insira o seu nome',
        email: 'Este campo é obrigatório', 
        telefone:'Este campo é obrigatório',
        cpf:'Este campo é obrigatório',
        endereco:'Este campo é obrigatório',
        cep:'Este campo é obrigatório'
        },

        submitHandler: function(form){
            alert ("Seu cadastro foi finalizado com sucesso!")
        },
        invalidHandler: function(form, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
            alert(`Há ${camposIncorretos} campos incorretos`)
            }
           

        }
        
    })
})