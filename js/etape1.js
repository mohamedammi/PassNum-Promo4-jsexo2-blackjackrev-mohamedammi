    //initialiser les compteurs
    var NbEssais = 0;
    var NbGagne = 0;
    var NbPerdu = 0;

    function Devine() {
        var num = Math.floor(Math.random() * 11);
        var choisi = document.getElementById("form__text").value;
        var result;
        NbEssais++;
        if (isNaN(choisi) | choisi=="") {
            result = "vous devez saisir un nombre entre 1 et 10";
            NbPerdu++;
        }
        else if (choisi > num) {
            result = "Perdu, le nombre est plus grand. ";
            NbPerdu++;
        } else if (choisi < num) {
            result = "Bravo, le nombre est plus petit. ";
            NbGagne++;
        } else if (choisi = num) {
            result = "la machine a gagné!!";
        } 
        document.getElementById("form__result").innerHTML = result;


        if (NbEssais == 10) {
            alert("C'est fini. Vous avez gagné " + NbGagne + " fois et perdu " + NbPerdu + " fois. A la prochaine");

        }
    }