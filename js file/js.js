let forch = document.getElementById('login-section-checkbox')
let ekhtar = document.getElementById('ekhtar')
let ekhtar1 = document.getElementById('ekhtar1')
let ekhtar2 = document.getElementById('ekhtar2')
let ekhtar3 = document.getElementById('ekhtar3')
let ekhtar4 = document.getElementById('ekhtar4')
let link = document.getElementById('registerLink')
let inputElement = document.getElementById("login-section-password")
let vlaueOfInputUsername = document.getElementById("login-section-username")
let vlaueOfInputPassword = document.getElementById("login-section-password")
let count = 0
let login = document.getElementById("login-section-button")
let allCharacter =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254]
function passwordShower(){
    if(inputElement.type==='password'){
        inputElement.setAttribute("type","text")
    }
    else{
        inputElement.setAttribute("type","password")
    }
}

function counterPasswordShower(){
    if(forch.Checked===true){
        
    }
    else{
        count+=1
    }
}

function doComplite(){
    if(count%2===1){
        ekhtar.style.display = 'none'
    }
    else{
        ekhtar.style.display = 'flex'
    }
    for(i=0 ;i<String(vlaueOfInputPassword.value).length ;i++){
        if(allCharacter.includes(String(vlaueOfInputPassword.value[i]).charCodeAt()) === false){
            ekhtar4.style.display = 'none'
        }else{
            ekhtar4.style.display = 'flex'
        }
    }
    for(i=0 ;i<String(vlaueOfInputUsername.value).length ;i++){
        if(allCharacter.includes(String(vlaueOfInputUsername.value[i]).charCodeAt()) === false){
            ekhtar3.style.display = 'none'
        }else{
            ekhtar3.style.display = 'flex'
        }
        
    }
    if(vlaueOfInputPassword.value.length<6){
        ekhtar2.style.display = 'flex'
        
    } 
    else{
        ekhtar2.style.display = 'none'
    }
    if(vlaueOfInputUsername.value.length<6){
        ekhtar1.style.display = 'flex'
    } 
    else{
        ekhtar1.style.display = 'none'
    }
}
function inter(){
    if(ekhtar1.style.display === 'none'&&ekhtar2.style.display==='none'&&ekhtar3.style.display==='none'&&ekhtar4.style.display==='none'&&ekhtar.style.display==='none'){
        link.setAttribute('href','./produce page/Buy page.html')
    }
    else{
        link.removeAttribute('href')
        event.preventDefault()
    }
}
vlaueOfInputUsername.addEventListener('click',function(event){
    console.log(event.se)
    if(event.keyCode===13){
        console.log(event === true)
        console.log("a")
    }

})


