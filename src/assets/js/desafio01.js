(function () {
    var fibo = document.getElementById("fibo")
    var vai = document.getElementById("vai")
    var resultado = document.getElementById("resultado")

    vai.addEventListener("click", function () {
        var limite = parseInt(fibo.value)
        limite -= 2
        function calculaFibo(limite) {
            var arrayResultado = [0]
            var a = 1
            var b = 0
            var c;

            while (limite >= 0) {
                c = a
                a = a + b
                b = c

                arrayResultado.push(b)

                limite--
            }
            return arrayResultado
        }
        resultado.innerHTML = calculaFibo(limite)
        fibo.value = ""
    })
})()