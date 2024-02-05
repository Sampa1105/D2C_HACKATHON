function validation(){
    if(document.formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;

    }
    else if(document.formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleast Six Letter*";
        return false;
    }
    else if(document.formfill.email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.formfill.password.value==""){
        document.getElementById("result").innerHTML="Enter your Password*";
        return false;
    }
    else if(document.formfill.password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6 digits";
        return false;
    }
   
    else if(document.formfill.Cpassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password";
        return false;
    }
    else if(document.formfill.Cpassword.value !== document.formfill.password.value){
        document.getElementById("result").innerHTML="Password does not match*";
        return false;
    }
    else if(document.formfill.password.value == document.formfill.Cpassword.value){
        popup.classList.add("open-slide")
        return false;
    }



}
var popup =document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove('open-slide')
}