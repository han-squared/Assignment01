let email = document.getElementById("email");
let phno = document.getElementById("phno");
let pwd = document.getElementById("pwd");

let error = document.getElementById("error");
let errorpwd = document.getElementById("errorpwd");
let errorphno = document.getElementById("errorphno");

let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ ;
let regphno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ ;

let strongPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let mediumPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

function validate()
{
    if(regexp.test(email.value)==false)
    {
        error.innerHTML = "Invalid email id.";
        error.style.color = "red";
        return false;
        
    }
    else
    {
        error.innerHTML = "";
        if(regphno.test(phno.value)==false)
        {
            errorphno.innerHTML = "Invalid Phone number.";
            errorphno.style.color = "red";
            return false;
        }
        else
        {
            errorphno.innerHTML = "";
            if(strongPassword.test(pwd.value)==false)
            {
                if(mediumPassword.test(pwd.value))
                {
                    errorpwd.innerHTML = "Medium";
                    errorpwd.style.color = "orange";
                    return false;
                    
                }
                else
                {
                    errorpwd.innerHTML = "Poor";
                    errorpwd.style.color = "red";
                    return false;
                }
                
            }
            else
            {
                errorpwd.innerHTML = "Strong";
                errorpwd.style.color = "green";
                return true;
            }
        }
    }
}
