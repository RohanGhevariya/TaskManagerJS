const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

// registration
    function addData(){
        var name = document.getElementById('uname').value;
        var email = document.getElementById("umail").value;
        var pass = document.getElementById("upaswd").value;

        localStorage.setItem('userName',name);
        localStorage.setItem('userEmail',email);
        localStorage.setItem('userPass',pass);
    }

    //login
    function checkData(){
        var loginEmail = document.getElementById('loginEmail').value;
        var loginpaswd = document.getElementById('loginPaswd').value;

        var getEmail = localStorage.getItem('userEmail');
        var getPaswd = localStorage.getItem('userPass');

        if(loginEmail == getEmail){
            if(loginpaswd == getPaswd){
                alert("Login  Successfull")
            }
            else{
                alert("Wrong Password!")
            }
        }else{
            alert("Please Enter valid Details")
        }
    }