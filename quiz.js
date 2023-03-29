let punkty = 0;
function pytanie2() {
    if(document.forms.pytania.pyt.value=="correct") {
        punkty +=1;
    }
    document.getElementById("licznik").innerHTML = "Pytanie nr.2";
    document.getElementById("pytanie").innerHTML = "<p>Kto kierował zespołem odpowiedzialnym za stworzenie języka C#?</p><form name='pytania'><input type='radio' name='pyt'>Guido van Rossum</input><input type='radio' name='pyt'>Donald D. Chamberlin</input><input type='radio' value='correct' name='pyt'>Anders Hejlsberg</input><input type='radio' name='pyt'>John Chambers</input></form></div>";
    document.getElementById("dalej").innerHTML = "<a onclick='pytanie3()'>Dalej</a>";
}
function pytanie3() {
    if(document.forms.pytania.pyt.value=="correct") {
        punkty +=1;
    }
    document.getElementById("licznik").innerHTML = "Pytanie nr.3";
    document.getElementById("pytanie").innerHTML = "<p>W którym z podanych języków nazwe zmiennych poprzedza znak @?</p><form name='pytania'><input type='radio' name='pyt'>PHP</input><input type='radio' name='pyt'>R</input><input type='radio' value='correct' name='pyt'>SQL</input><input type='radio' name='pyt'>GO</input></form></div>";
    document.getElementById("dalej").innerHTML = "<a onclick='pytanie4()'>Dalej</a>";
}
function pytanie4() {
    if(document.forms.pytania.pyt.value=="correct") {
        punkty +=1;
    }
    document.getElementById("licznik").innerHTML = "Pytanie nr.4";
    document.getElementById("pytanie").innerHTML = "<p>W którym z podanych języków nie trzeba kończyć wiersza znakiem ;?</p><form name='pytania'><input type='radio' name='pyt'>Rust</input><input type='radio' name='pyt'>PHP</input><input type='radio' name='pyt'>C#</input><input type='radio' value='correct' name='pyt'>Python</input></form></div>";
    document.getElementById("dalej").innerHTML = "<a onclick='pytanie5()'>Dalej</a>";
}
function pytanie5() {
    if(document.forms.pytania.pyt.value=="correct") {
        punkty +=1;
    }
    document.getElementById("licznik").innerHTML = "Pytanie nr.5";
    document.getElementById("pytanie").innerHTML = "<p>Który z podanych języków programowania powstał najwcześniej?</p><form name='pytania'><input type='radio' value='correct' name='pyt'>C</input><input type='radio' name='pyt'>C++</input><input type='radio' name='pyt'>C#</input><input type='radio' name='pyt'>Swift</input></form></div>";
    document.getElementById("dalej").innerHTML = "<a onclick='punktacja()'>Dalej</a>";
}

function punktacja() {
    if(document.forms.pytania.pyt.value=="correct") {
        punkty +=1;
    }
    document.getElementById("licznik").innerHTML = "Ilość zdobytych punktów to: "+punkty+"/5";
    if(punkty == 0) {
        document.getElementById("pytanie").innerHTML = "Chyba niczego się nie nauczyłęś :/";
    }
    if(punkty > 1 && punkty < 4) {
        document.getElementById("pytanie").innerHTML = "Musisz jeszcze popracować :|";
    }
    if(punkty == 4) {
        document.getElementById("pytanie").innerHTML = "Dobrze, ale może być lepiej ;)";
    }
    if(punkty == 5) {
        document.getElementById("pytanie").innerHTML = "Brawo, odpowiedziałeś bezbłędnie :D";
    }
    document.getElementById("dalej").innerHTML = "<a href='quiz.html'>Powtórz Quiz</a><a href='index.html'>Powrót do strony głównej</a>";
}