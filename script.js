$(document).ready(function(){
    $('#formulario').hide();
    $('#abrir-form').click(function(){
        $('#formulario').slideToggle();
    })

    $('#formulario').on('submit', function(e){
        e.preventDefault();

        const valorInput = $('#formulario-tarefa').val();
        $('ul').append(`
        <li>
          <h1>${valorInput}</h1>
          <button type="button" id="excluir" class="botao-excluir">excluir
        </li>`)
        $('#formulario-tarefa').val('');
    })

    $("ul").on('click','h1', function(){
        $(this).toggleClass('tarefa-feita');
    })

    $('ul').on('click', '#excluir', function(){
        $(this).parents('li').fadeOut(200);
    })
})