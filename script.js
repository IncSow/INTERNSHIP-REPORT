let IsButtonUsable = true
function IsAlreadyClicked(obj){
    if(!IsButtonUsable){ //Si un autre bouton écrit, ne rien faire
        return
    }
    if(obj.classList=='AlreadyClicked'){
        document.getElementById("chatinput").innerHTML ="Je crois que j'ai déjà répondu, non...?"
        answer.style.backgroundImage = "url(https://dsifrance.fr/wp-content/uploads/2021/05/chatblaze-1024x768.jpg)"}
    else{
        document.getElementById("chatinput").innerHTML =""
        var txt = obj.dataset.answer;
        IsButtonUsable = false // Permets d'éviter un bug qui me fait écrire des incantations en latin si j'utilise 2 boutons en même temps rigolo à voir, pas très user friendly.
        typingeffect(txt);
        setTimeout(function(){IsButtonUsable =true}, 500); // Le texte s'écrit forcément en 500ms, peut importe la longueur, donc aucun soucis avec cette méthode.
        answer.style.backgroundImage = obj.dataset.img;
    }
    document.body.scrollTop = 0; // Safari  
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE et Opera (erk)
    obj.classList.toggle('AlreadyClicked')
};


function pull(){
    if(document.getElementById("pullinfo").style.left=="0px"){ 
        document.getElementById("pullinfo").style.left = "-295px";
        document.getElementById("puller").innerHTML =">"
        document.getElementById("puller").style.color= "#FFD280";
    }else{
        document.getElementById("pullinfo").style.left = "0px";
        document.getElementById("puller").innerHTML ="<"
        document.getElementById("puller").style.color= "#A88054";
    }
}

let speed = 0
function typingeffect(txt, speed){ // J'ai passé beaucoup trop de temps à faire fonctionner cette fonction, au secours.
        
        speed = 500/txt.length // Me permets de faire écrire le texte en 5s, peut importe la taille du texte à écrire
        for (let i =0; i < txt.length; i++){
            speed += 500/txt.length // NECESSAIRE à cause du behavior de setTimeout. Sinon, la fonction attends (speed) secondes et écrit tout. Il faut donc rafraichir speed.
            setTimeout(function(){
                if (txt.charAt(i) == "<"){ 
                    document.getElementById("chatinput").innerHTML+= "<br>"} // Me permets de régler mon soucis avec mes <br>, qui apparaissaient en brut. J'ai du changer l'HTML aussi.
                    else{
                        document.getElementById("chatinput").innerHTML += txt.charAt(i);
                        }
                }, speed);
        }
} // JE VIENS DE ME RENDRE COMPTE QUE J'AURAI PU UTILISER UN setInterval AAAAAAAAAA

