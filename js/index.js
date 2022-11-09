addEventListener('load',()=>{
    let btnSearch=document.getElementById('search');
    btnSearch.addEventListener('click',()=>{

        let id = FormManipulation.id;
        let nom = FormManipulation.name;
        let cognom = FormManipulation.surname;
        let group = FormManipulation.group;
        let course = FormManipulation.course;
        let correu = FormManipulation.mail;
    })
    let btnModify=document.getElementById('modify');

    btnModify.addEventListener('click',()=>{

        /*
        Crida a ModifyStudent
        Aquí caldrà recuperar el valor del camp idStudent i
        cercar l'estudiant a la col·lecció d'estudiants
        Modificarà els camps necessaris de l'objecte corresponent
        amb els valors obtinguts del formulari

        (Podeu fer servir la classe FormManipulation
        per modificar i obtenir els valors
        FormManipulation.id //No s'hauria de poder modificar, només per cerca
        FormManipulation.name
        FormManipulation.surname
        FormManipulation.group //No s'hauria de poder modifica
        FormManipulation.course
        FormManipulation.mail
        */
    })

})

function searchStudent(id){
    if(!id){
        return "Error";
    }
    if(stdCollTest.getStudent(id) === undefined){
        let alumneNou = new Alumne(id);
        return stdCollTest.add(alumneNou);
    }
    return stdCollTest.getStudent(id);
}

function newStudentForm(alumne,nom,cognom,group,course,correu){

    alumne.nom = nom;
    alumne.cognom = cognom;
    alumne.estudis = group;
    alumne.curs = course;
    alumne.correu = correu;
    return alumne;
}