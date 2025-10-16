var o = 'ninguna';

function escribirNumero(n) {
    var d = document.getElementById("display");
    var m = n;
    d.innerText += m;
}

function sumar() {
    o = 'sumar';

    var nu = Number(document.getElementById("display").innerText);

    var d = document.getElementById("display");
    d.innerText += ' + ';
}

function restar() {
    o = 'restar';

    var nu = Number(document.getElementById("display").innerText);

    var d = document.getElementById("display");
    d.innerText += ' - ';
}

function multiplicar() {
    o = 'multiplicar';

    var nu = Number(document.getElementById("display").innerText);

    var d = document.getElementById("display");
    d.innerText += ' x ';
}

function dividir() {
    o = 'dividir';

    var nu = Number(document.getElementById("display").innerText);

    var d = document.getElementById("display");
    d.innerText += ' ÷ ';
}

var resultado = 0;

function igual() {
    if (o === 'sumar') {
        var l = document.getElementById('label');
        var n = document.getElementById('display').innerText;

        var numeros = n.split(" + ");

        resultado = Number(numeros[0])

        for (var i = 1; i < numeros.length; i++) {
            console.log(resultado)
            var n = Number(numeros[i]);
            resultado += n;
            console.log(resultado)

        }

        var d = document.getElementById("display");
        l.innerText = d.innerText + " = ";
        d.innerText = resultado;


    }

    if (o === 'restar') {
        var l = document.getElementById('label');
        var n = document.getElementById('display').innerText;

        var numeros = n.split(" - ");

        resultado = numeros[0]

        for (var i = 1; i < numeros.length; i++) {
            var n = Number(numeros[i]);
            resultado -= n;
            console.log(resultado);
        }

        var d = document.getElementById("display");
        l.innerText = d.innerText + " = ";
        d.innerText = resultado;

    }

    if (o === 'multiplicar') {
        var l = document.getElementById('label');
        var n = document.getElementById('display').innerText;

        var numeros = n.split(" x ");

        resultado = numeros[0]

        for (var i = 1; i < numeros.length; i++) {
            var n = Number(numeros[i]);
            resultado *= n;
        }

        var d = document.getElementById("display");
        l.innerText = d.innerText + " = ";
        d.innerText = resultado;
    }

    if (o === 'dividir') {
        var l = document.getElementById('label');
        var n = document.getElementById('display').innerText;

        var numeros = n.split(" ÷ ");

        resultado = numeros[0]

        for (var i = 1; i < numeros.length; i++) {
            var n = Number(numeros[i]);
            resultado /= n;
        }

        var d = document.getElementById("display");
        l.innerText = d.innerText + " = ";
        d.innerText = resultado;

    }




    
}

function del() {
    var d = document.getElementById("display");
    var l = document.getElementById("label");
    d.innerText = " ";
    l.innerText = " ";
    resultado = 0;
}

function back() {
    var d = document.getElementById("display");
    d.innerText = d.innerText.slice(0, -1);
}

function teclado(event){
    switch (event.key) {
        case '1':
            escribirNumero(1);
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
            
        case '2':
            escribirNumero(2);
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            
            setTimeout(changeBackground, 200);
            break;
        case '3':
            escribirNumero(3);
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case '4':
            escribirNumero(4);
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case '5':
            escribirNumero(5);
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case '6':
            escribirNumero(6);
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case '7':
            escribirNumero(7);
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case '8':
            escribirNumero(8);
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case '9':
            escribirNumero(9);
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case '0':
            escribirNumero(0);
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case 'Backspace':
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            back();
            break;
        case '.':
            escribirNumero(".");
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case '+':
            sumar();
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case '-':
            restar();
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case '*':
            multiplicar();
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case '/':
            dividir();
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case '=':
            igual();
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case 'Enter':
            igual();
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        case 'Delete':
            del();
            var audio = document.getElementById("clickSound");
            audio.play();
            var element = document.getElementById('j');
            element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.1), 30%,rgba(255, 255, 255, 0.4))';
            function changeBackground() {
                var element = document.getElementById('j');
                element.style.background = 'linear-gradient(0.45turn, rgba(255, 255, 255, 0.4), 30%,rgba(255, 255, 255, 0.1))';
            }
            break;
        default:
            console.log("Tecla no reconocida");
            break;
    }
}