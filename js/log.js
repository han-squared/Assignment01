let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

let error = document.getElementById("error");
let errorpwd = document.getElementById("errorpwd");

let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ ;

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
