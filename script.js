$('document').ready(function() {
    //código que depende do jQuery

    var nDeTarefas = 0

    const conteudo = $('body')
    conteudo.css({opacity: 1})

    const form = $('form')
    form.submit(function(e){
        e.preventDefault()
        adicionaTarefa()
    })

    function adicionaTarefa() {
        const tarefa = $('input').val()
        if(tarefa.length == 0) {
            window.alert('Insira um nome para a tarefa')
        } else {
            nDeTarefas += 1
            let lista = $(`<li style="display: none" id="${nDeTarefas}">${tarefa}</li>`)
            lista.appendTo('ol').fadeIn(1000)
        }
    }

    var tarefasRiscadas = []
    $('ol').on('click', 'li', function() {
        const idTarefa = this.id
        if (tarefasRiscadas.includes(idTarefa)) {
            $(`li#${idTarefa}`).css({textDecoration: 'none'})
            tarefasRiscadas = tarefasRiscadas.filter(tarefa => tarefa != idTarefa)
        } else {
            $(`li#${idTarefa}`).css({textDecoration: 'line-through'})
            tarefasRiscadas.push(idTarefa)
        }
    })
})