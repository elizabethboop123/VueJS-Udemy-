new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
      exibirAlerta(){
        alert("Alertando!")
      },
      alterarValor(event) {
        this.valor = event.target.value
    }
  }
})
