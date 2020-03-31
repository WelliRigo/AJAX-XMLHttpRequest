function ajax(){
    var xmlHttp;

    //Dependendo do navegador
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest;
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //Se o status da requisição muda
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyStage == 4 && xmlHttp.status == 200){
            console.log(xmlHttp.responseText);
        }
    }

    // open() especifica o tipo de requisição
    // segundo param é a URL
    // terceiro param é se vai ser assincrona
    xmlHttp.open('GET', 'text.txt', true);

    // Cabeçalho
    // xmlHttp.setRequestHeader(header, value)
    // header: O nome do cabeçalho cujo valor está para ser definido.
    // value: O valor a ser definido como o corpo do cabeçalho

    xmlHttp.send();

}