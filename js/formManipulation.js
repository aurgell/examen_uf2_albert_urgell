class FormManipulation{
    static get id(){
        return document.getElementById('idStudent').value;
    }
    static set id(value){
        return document.getElementById('idStudent').value=value;
    }

    static get name(){
        return document.getElementById('name').value;
    }
    static set name(value){
        return document.getElementById('name').value=value;
    }

    static get surname(){
        return document.getElementById('surname').value;
    }
    static set surname(value){
        return document.getElementById('surname').value=value;
    }


    static get group(){
        return document.getElementById('group').value;
    }
    static set group(value){
        return document.getElementById('group').value=value;
    }

    static get course(){
        return document.getElementById('course').value;
    }
    static set course(value){
        return document.getElementById('course').value=value;
    }

    static get mail(){
        return document.getElementById('mail').value;
    }
    static set mail(value){
        return document.getElementById('mail').value=value;
    }



}