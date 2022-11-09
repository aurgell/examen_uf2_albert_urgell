class Alumne {

    #id
    #nom;
    #cognom;
    #estudis;
    #curs;
    #correu;

    constructor(id) {
        this.id = this.#isNumeric(id);
        this.nom = this.#nom;
    }
    #nullIfUndefined(value) {
        if (!value) {
            value = null;
        }
        return value;
    }

    #isNumeric(value){
        if(isNaN(value)){
            return "Not a Number";
        }
        return value;
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get cognom() {
        return this.#cognom;
    }

    set cognom(value) {
        this.#cognom = value;
    }



    set estudis(value) {
        this.#estudis = value;
    }

    get curs() {
        return this.#curs;
    }

    set curs(value) {
        this.#curs = value;
    }

    get correu() {
        return this.#correu;
    }

    set correu(value) {
        this.#correu = value;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    getCodiEstudi(value){
        value.split("-");
        return value[0].trim()
    }

    getNomEstudi(value){
        value.split("-");
        return value[1].trim()
    }
}

let testStudent = new Alumne(1);
testStudent.nom="Prova";
testStudent.cognom="Prova";
testStudent.estudis="Prova";
testStudent.curs=2;
testStudent.correu="prova@cirvianum.cat";


let students = [
    [9641005012, 'Adrià', 'Neila Reguero', "ICC0 - Desenvolupament d'aplicacions web", 2, 'adria.neila@cirvianum.cat'],
    [1544905045, 'Albert', 'Urgell Caballeria',  "ICC0 - Desenvolupament d'aplicacions web", 2, 'albert.urgell@cirvianum.cat'],
    [15316198455, 'Rafael Andre', 'Sousa Silva', "ICC0 - Desenvolupament d'aplicacions web", 2, 'rafaelandre.sousa@cirvianum.cat'],
    [10140705019, 'Navjashan', 'Singh Kaur', "ICC0 - Desenvolupament d'aplicacions web", 2, 'navjashan.singh@cirvianum.cat'],
    [9732365012, 'Pau', 'Mas Vilar', "ICC0 - Desenvolupament d'aplicacions web", 2, 'pau.mas@cirvianum.cat'],
    [15503568549, 'Paulo Andree', 'Fraga Castro', "ICC0 - Desenvolupament d'aplicacions web", 2, 'paulo.fraga@cirvianum.cat'],
    [8363275019, 'Marçal', 'Clajer Regales', "ICC0 - Desenvolupament d'aplicacions web", 2, 'marcal.clajer@cirvianum.cat'],
    [9684995018, 'Genís', 'Berengueras Sentmarti', "ICC0 - Desenvolupament d'aplicacions web", 2, 'genis.berengueras@cirvianum.cat'],
    [1518095046, 'Jordi', 'Bargalló Segura', "ICC0 - Desenvolupament d'aplicacions web", 2, 'jordi.bargallo@cirvianum.cat'],
    [4440985095, 'Nil', 'Roura Gallardo', "IP10 - Perruqueria i cosmètica capil·lar", 2, 'nil.roura@cirvianum.cat'],
    [1476615042, 'Tatiana', 'Rodríguez', "IP10 - Perruqueria i cosmètica capil·lar", 2, 'tatiana.rodriguez@cirvianum.cat'],
    [6713295009, 'Aleix', 'Povedano Mas', "IC10 - Sistemes microinformàtics i xarxes", 2, 'aleix.povedano@cirvian   um.cat'],
    [6712625006, 'Marc', 'Penas Garrote', "IC10 - Sistemes microinformàtics i xarxes", 2, 'marc.penas@cirvianum.cat'],
    [891725033, 'Abril', 'Rivas Rodriguez', "BATXLOE - Batxillerat de ciències i tecnologia", 2, 'abril.rivas@cirvianum.cat'],
    [6407865005, 'Eloi', 'Puig Cotrina', "BATXLOE - Batxillerat de ciències i tecnologia", 2, 'eloi.puig@cirvianum.cat']
];



   let studentsObject = students.map((element)=>{
    let id = element[0];
    let alumne = new Alumne(id);
    alumne.nom = element[1];
    alumne.cognom = element[2];
    alumne.estudis = element[3];
    alumne.curs = element[4];
    alumne.correu = element[5];
    return alumne;
});


class StudentsCollection{

    #studentsArray;

    constructor(studentsArray) {
        this.studentsArray = studentsArray;
    }


    get studentsArray() {
        return this.#studentsArray;
    }

    set studentsArray(value) {
        this.#studentsArray = value;
    }

    add(student){
        this.studentsArray.forEach(element=>{
            if(element.id === student.id){
                return null;
            }
        })
        return this.studentsArray.push(student);
    }

    getStudent(id){
        let std;
        this.studentsArray.forEach(element=>{
            if(element.id === id){
                std = element;
            }
        })
        return std;
    }

    findStudentsByCode(studentsCode){
        let std = [];
        this.studentsArray.forEach(element=>{
            if(element.getCodiEstudi() === studentsCode){
                std.push(element);
            }
        })
        return std;
    }
}

let stdCollTest = new StudentsCollection(studentsObject);

console.log(stdCollTest.getStudent(1544905045));


