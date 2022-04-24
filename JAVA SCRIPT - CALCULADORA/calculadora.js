function calculadora() {

    const operacao = Number(prompt('Escolha uma operação: \n 1: Soma [+] \n 2: Subtração [-] \n 3: Divisão Real [/] \n 4: Resto Divisão [%] \n 5: Potencialização [**] \n 6: Multriplicação [*]'));

    if (!operacao || operacao >= 7) {
        alert('Digite um valor válido');
        calculadora();
    } else {
        let n1 = Number(prompt('Digite o primeiro número'));
        let n2 = Number(prompt('Digite o segundo número'));
        let resultado;

        function soma() {
            resultado = n1 + n2;
            alert(`A soma do valor ${n1} + ${n2} = ${resultado}`);
            novaOperacao();
        }

        function sub() {
            resultado = n1 - n2;
            alert(`A Subtração do valor ${n1} - ${n2} = ${resultado}`);
            novaOperacao();
        }

        function divReal() {
            resultado = n1 / n2;
            alert(`A Divisão real do valor ${n1} / ${n2} = ${resultado}`);
            novaOperacao();
        }

        function divResto() {
            resultado = n1 % n2;
            alert(`O resto da divisão dos valores é: ${resultado}`);
            novaOperacao();
        }

        function potencia() {
            resultado = n1 ** n2;
            alert(`A potenciação dos valores é: ${resultado}`);
            novaOperacao();
        }

        function mult() {
            resultado = n1 * n2;
            alert(`A multiplicação dos valores é: ${resultado}`);
            novaOperacao();
        }

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                sub();
                break;
            case 3:
                divReal();
                break;
            case 4:
                divResto()
                break;
            case 5:
                potencia();
                break;
            case 6:
                mult();
                break;
            default:
                alert('Caiu no default')
        }

        function novaOperacao() {
            let escolha = Number(prompt('Escolha uma opção \n 1: Nova operação \n 2: Sair'));

            if (escolha == 1) {
                calculadora();
            } else {
                alert('Até a próxima');
            }
        }
    }

}

calculadora();