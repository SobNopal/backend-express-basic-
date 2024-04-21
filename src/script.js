function validation(){
    if(document.formRegister.Name.value==""){
        document.getElementById("result").innerHTML="Enter Name*";
        return false;
    }
    else if(document.formRegister.Email.value==""){
        document.getElementById("result").innerHTML="Enter Email*";
        return false;
    }
    else if(document.formRegister.Phone.value==""){
        popup.classlist.add(".open-slide")
        return false;
    }
}

var popup = document.getElementById('popup');