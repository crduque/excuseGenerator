function generator (){
    var who = Math.floor(Math.random()*3+1);
    var did = Math.floor(Math.random()*3+1);
    var what = Math.floor(Math.random()*3+1);
    var when = Math.floor(Math.random()*3+1);

    var x = document.getElementById("excuse");

    var result = "";

    switch (who){
        case 1:
            result += "Mi perro ";
            break;
        case 2:
            result += "Mi novio ";
            break;
        case 3:
            result += "Mi madre ";
            break;
        default:
            result += "Yo "
    }
    switch (did){
        case 1:
            result += "rompió ";
            break;
        case 2:
            result += "perdió ";
            break;
        case 3:
            result += "destruyó ";
            break;
        default:
            result += "he perdido "
    }
    switch (what){
        case 1:
            result += "mis deberes ";
            break;
        case 2:
            result += "mi ordenador ";
            break;
        case 3:
            result += "mi móvil ";
            break;
        default:
            result += "la cabeza, "
    }
    switch (when){
        case 1:
            result += "esta mañana.";
            break;
        case 2:
            result += "anoche.";
            break;
        case 3:
            result += "hace un momento.";
            break;
        default:
            result += "como siempre, lo siento."
    }
    return result;
}
document.write(generator());