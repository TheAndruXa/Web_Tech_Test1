const change = document.getElementById("changed")

function change_all(){

    if (document.getElementsByTagName('div')[3].innerText==='Akimov'){
        document.getElementsByTagName('div')[3].innerText='Акимов';
        document.getElementsByTagName('div')[4].innerText='Андрей';
        document.getElementsByTagName('div')[5].innerHTML='Антонович';
        document.getElementsByTagName('div')[6].innerHTML='муж.';
        document.getElementsByTagName('div')[7].innerHTML='30.05.2005';
        document.getElementsByTagName('div')[8].innerHTML='г.Москва';
    }
    else{

        if (document.getElementsByTagName('div')[3].innerText==='Акимов'){
            document.getElementsByTagName('div')[3].innerText='Akimov';
            document.getElementsByTagName('div')[4].innerText='Andrey';
            document.getElementsByTagName('div')[5].innerHTML='Antonovich';
            document.getElementsByTagName('div')[6].innerHTML='male';
            document.getElementsByTagName('div')[7].innerHTML='06.06.2006';
            document.getElementsByTagName('div')[8].innerHTML='Moscow';
        }
    }
}
change.addEventListener("click", change_all)