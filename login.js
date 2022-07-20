// set keys , values in local storage
localStorage.setItem("username", "trofi92");
localStorage.setItem("password", "123456789");


const setIdValue = localStorage.getItem("username");
const setPwValue = localStorage.getItem("password");

// console.log(setIdValue);
// console.log(setPwValue);


// get values in html input tags

const getIdValue = document.getElementById("id-inner-input");
const getPwValue = document.getElementById("pw-inner-input");
const submit = document.getElementById("login-button")

function openMain(){
    window.close(self)
    window.open("file:///home/edu02/sample/index.html")

}

function onLoginSubmit(event){
    const checkPwValue = getPwValue.value;
    const checkIdValue = getIdValue.value;
        if(setPwValue==checkPwValue && setIdValue==checkIdValue){
            alert(`Welcome ${setIdValue}`);           
            
            return (
                
                openMain()
                
                )
                
            
        }
            
        else
        {
            alert(`Please check your ID or PW!`)
        }
    

    }
    
