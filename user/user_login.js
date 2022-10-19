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
    // function addData(){
    //     var name = document.getElementById('uname').value;
    //     var email = document.getElementById("umail").value;
    //     var pass = document.getElementById("upaswd").value;

    //     localStorage.setItem('userName',name);
    //     localStorage.setItem('userEmail',email);
    //     localStorage.setItem('userPass',pass);
    // }
    function addData(e){
        var name = document.getElementById('uname').value;
        var email = document.getElementById("umail").value;
        var pass = document.getElementById("upaswd").value;
        let userDetails = new Array();
        userDetails = JSON.parse( localStorage.getItem("users"))?JSON.parse( localStorage.getItem("users")) :[];
        if(userDetails.some((v) => {return v.email==email}))
        {
            alert("Email Address is exists!!")

        }
        else
        {
            userDetails.push({
                "uname":name, 
                "umail":email,
                "upaswd":pass
    
            }); 
            localStorage.setItem("users", JSON.stringify(userDetails))
        }
      
    }

    //login
    function checkData(){
       
        var loginemail = document.getElementById("loginEmail").value;
        var loginpass = document.getElementById("loginPaswd").value;

        let userDetails = new Array();
        userDetails = JSON.parse( localStorage.getItem("users"))?JSON.parse( localStorage.getItem("users")) :[];
        if(userDetails.some((v) => {return v.umail == loginemail && v.upaswd == loginpass}))
        {
            alert('logged in');
            // let currentuser = userDetails.filter(() => {return v.email == loginemail && v.pass == loginpass})[0]
            // localStorage.setItem('uname',currentuser.name);
            // localStorage.setItem('loginEmail',currentuser.loginemail);
            window.location.replace("user_home.html");
        }
        else{
            alert("invalid data");
            location.replace('user_login.html');
        }
        
    }