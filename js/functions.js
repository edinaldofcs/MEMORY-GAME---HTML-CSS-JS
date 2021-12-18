window.onload = function start() {

    var num = {}; //Vetor para armazenar os números que modificam o id dos cards (e para verificar no console)
    var back_ = true; //Variável para validar números sem repetição 
    var div = {};//Vetor para armazenar elementos HTML

    for (var i = 0; i < 8; i++) {
        let valor = Math.floor(Math.random() * 8 + 1); // Gerar número aleatório entre 1 e 8
        let j = 0; // Váriável para loop que irá evitar repetições
        back_ = true;
        if (i == 0) {//A primeira iteração não precisa ser validada
            num[i] = valor;

        } else {
            while (j < 7) {//loop para evitar repetições
                if (parseInt(valor) == num[j]) {
                    i--;
                    back_ = false;
                    break;//sair do looop quando o número já estiver no vetor
                } else {
                    j++;
                }
            }
            if (back_ == true) {
                num[i] = valor;// Armazenar valor único                
                //console.log(num[i]);
            }
        }

    }

    for (var i = 0; i < 8; i += 2) {//Criar Elementos HTML
        div[i] = document.createElement('div');//inserir div dinâmicamente
        div[i].setAttribute('class', 'settings');//setar classe
        div[i].innerHTML = '<div id="temp' + (i + 1) + '" onClick="flipcard(this.id)"><div id="card' + (i + 1) + '"onClick="flipcard(this.id)"></div></div><div id="temp' + (i + 2) + '" onClick="flipcard(this.id)"><div id="card' + (i + 2) + '"onClick="flipcard(this.id)"></div></div>';//inserir todo o conteúdo
        document.getElementById("container").appendChild(div[i]);
    }


    for (var i = 0; i < 8; i++) {
        document.getElementById("temp" + (i + 1)).id = num[i]; //Modificar Id para alterar a imagem
        document.getElementById(num[i]).setAttribute('class', 'img' + num[i]);//inserir classe de imagem
        document.getElementById("card" + (i + 1)).id = "cards" + num[i];//adicionar imagem inicial
        //console.log("id: " + (i+1) + " = " +  num[i]);
    }

}

function flipcard(clicked_id) {
    var num = parseInt((clicked_id.substr(5, 1)));// Var criada apenas para reduzir texto (poderia ser passada direto na função)
    const el = document.getElementById(9); //Var para Controle de cards virados
    const score = document.getElementById("score"); // Var para definir quantidade de cards virados
    const zero = ["zero", "zero2", "zero3", "zero4"];//Vetor para nenhum card virado de acordo com a imagem
    const one = ["one", "one2", "one3", "one4"];//Vetor para um card virado de acordo com a imagem
    const two = ["two", "two2", "two3", "two4"];//Vetor para dois cards virados de acordo com as imagens

    var flip = document.getElementById("cards" + num);// Var para Card clicado


    if (num == 1 || num == 2) {

            flip.style.opacity = "0%";//Mostrar a imagem atrás do card

        //Criando validação da classe para definir se as cartas foram viradas corretamente.
        if (el.classList.contains(zero[0])) {
            el.classList.remove(zero[0]);
            el.classList.add(one[0]);
            document.getElementById(num).classList.add("block");//bloquear clique repetido
            score.innerHTML = parseInt(score.textContent) + 1;//Adicionar score
            //alert("one");
        } else if (el.classList.contains(one[0]) && !document.getElementById(num).classList.contains("block")) {
            el.classList.remove(one[0]);
            el.classList.add(two[0]);
            score.innerHTML = parseInt(score.textContent) + 1;//Adicionar score
            //alert("two");
        }

    } else if (num == 3 || num == 4) {

            flip.style.opacity = "0%";//Mostrar a imagem atrás do card


        //Criando validação da classe para definir se as cartas foram viradas corretamente.
        if (el.classList.contains(zero[1])) {
            el.classList.remove(zero[1]);
            el.classList.add(one[1]);
            document.getElementById(num).classList.add("block");//bloquear clique repetido
            score.innerHTML = parseInt(score.textContent) + 1;//Adicionar score
            //alert("one2");
        } else if (el.classList.contains(one[1]) && !document.getElementById(num).classList.contains("block")) {
            el.classList.remove(one[1]);
            el.classList.add(two[1]);
            score.innerHTML = parseInt(score.textContent) + 1;//Adicionar score
            //alert("two2");
        }
    } else if (num == 5 || num == 6) {

            flip.style.opacity = "0%";//Mostrar a imagem atrás do card

        //Criando validação da classe para definir se as cartas foram viradas corretamente.
        if (el.classList.contains(zero[2])) {
            el.classList.remove(zero[2]);
            el.classList.add(one[2]);
            document.getElementById(num).classList.add("block");//bloquear clique repetido
            score.innerHTML = parseInt(score.textContent) + 1;//Adicionar score
            //alert("one3");
        } else if (el.classList.contains(one[2]) && !document.getElementById(num).classList.contains("block")) {
            el.classList.remove(one[2]);
            el.classList.add(two[2]);
            score.innerHTML = parseInt(score.textContent) + 1;//Adicionar score
            //alert("two2");
        }
    } else if (num == 7 || num == 8) {

            flip.style.opacity = "0%";//Mostrar a imagem atrás do card

        //Criando validação da classe para definir se as cartas foram viradas corretamente.
        if (el.classList.contains(zero[3])) {
            el.classList.remove(zero[3]);
            el.classList.add(one[3]);
            document.getElementById(num).classList.add("block");//bloquear clique repetido
            score.innerHTML = parseInt(score.textContent) + 1;//Adicionar score
            //alert("one4");
        } else if (el.classList.contains(one[3]) && !document.getElementById(num).classList.contains("block")) {
            el.classList.remove(one[3]);
            el.classList.add(two[3]);
            score.innerHTML = parseInt(score.textContent) + 1;//Adicionar score
            //alert("two4");
        }
    }

    //Validar se os card foram virados na sequencia correta
    if (el.classList.contains(one[0]) && el.classList.contains(one[1]) || el.classList.contains(one[0]) && el.classList.contains(one[2]) || el.classList.contains(one[1]) && el.classList.contains(one[2]) || el.classList.contains(one[0]) && el.classList.contains(one[3]) || el.classList.contains(one[1]) && el.classList.contains(one[3]) || el.classList.contains(one[2]) && el.classList.contains(one[3])) {

        for (var i = 0; i < 4; i++) {//Voltar ao status inicial
            el.classList.remove(one[i]);
            el.classList.remove(two[i]);
            el.classList.add(zero[i]);
        }

        score.innerHTML = "0";//zerar score

        setTimeout(() => {//Desvirar todos os cards
            for (var i = 0; i < 8; i++) {

                document.getElementById(i + 1).classList.remove('block');
                document.getElementById("cards" + (i + 1)).style.opacity = "100%";
            }
        }, 2000);
    } else {//Se entrar aqui é porque a sequencia é válida        

        //Condicional para evitar bugs de cliques multiplos (impedir o jogo de terminar sem que todos os cards estejam virados)
        if (score.textContent == 8 && el.classList.contains(two[0]) && el.classList.contains(two[1]) && el.classList.contains(two[2]) && el.classList.contains(two[3])) {
            document.getElementById("victory").style.display = "block";//Mostrar Modal de vitória
            score.innerHTML = "0";//zerar score
        }
    }
}

function victory() { // Fechar modal e recarregar página
    document.getElementById("victory").style.display = "none";
    location.reload();
}