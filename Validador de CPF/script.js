$('#btValidar').click(
    function () {

    let cpf = document.getElementById("inputA").value;

        //let cpf = "06122123196"

        let v1 = parseInt(cpf[0]) * 10;
        let v2 = parseInt(cpf[1]) * 9;
        let v3 = parseInt(cpf[2]) * 8;
        let v4 = parseInt(cpf[3]) * 7;
        let v5 = parseInt(cpf[4]) * 6;
        let v6 = parseInt(cpf[5]) * 5;
        let v7 = parseInt(cpf[6]) * 4;
        let v8 = parseInt(cpf[7]) * 3;
        let v9 = parseInt(cpf[8]) * 2;

        let valor = (v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9);

        resto = valor % 11;

        digito1 = 11 - resto;
        console.log(digito1);

        // Segundo Digito

        //cpf = "06122123196"

        let vn1 = parseInt(cpf[0]) * 11;
        let vn2 = parseInt(cpf[1]) * 10;
        let vn3 = parseInt(cpf[2]) * 9;
        let vn4 = parseInt(cpf[3]) * 8;
        let vn5 = parseInt(cpf[4]) * 7;
        let vn6 = parseInt(cpf[5]) * 6;
        let vn7 = parseInt(cpf[6]) * 5;
        let vn8 = parseInt(cpf[7]) * 4;
        let vn9 = parseInt(cpf[8]) * 3;
        let vn10 = parseInt(digito1) * 2;

        let valor2 = (vn1 + vn2 + vn3 + vn4 + vn5 + vn6 + vn7 + vn8 + vn9 + vn10);

        resto = valor2 % 11;

        digito2 = 11 - resto;
        console.log(digito2);


        if ((cpf[9] == digito1) && (cpf[10] == digito2)) {
            console.log("Válido")
            alert ("CPF Válido")
        } else {
            console.log("Inválido")
            alert ("CPF Inválido")
        }


    }


)