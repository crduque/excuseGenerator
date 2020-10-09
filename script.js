function generator (){
    let who = Math.floor(Math.random()*3+1);
    let did = Math.floor(Math.random()*3+1);
    let what = Math.floor(Math.random()*3+1);
    let when = Math.floor(Math.random()*3+1);

    let x = document.getElementById("excuse");

    let result = "";

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