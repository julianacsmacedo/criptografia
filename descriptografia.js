    var input1 = window.document.querySelector(".input1");
    var input2 = window.document.querySelector(".input2");

    var btn1 = window.document.querySelector(".btn.btn-green");
    var copiar = window.document.querySelector(".copy.btn-green");

    btn1.onclick = function (){

        var frase = input1.value;

        var clean = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        frase = clean;

        var fraseCodificada = frase.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a' ).replace(/ober/gi, 'o').replace(/ufat/gi, 'u');

        input2.value = fraseCodificada;

        input1.value = "";

    }

    copiar.onclick = function (){
        input2.select();
        document.execCommand('copy');
        swal('Boa!', 'Copiado com sucesso!', 'success');
    }