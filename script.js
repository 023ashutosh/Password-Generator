let len = 


let pass ;

const genPassword = ((len) =>{ 
        
    let pass = ""
    
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let number = `0123456789`
    let symbol = `!@#$%^&*()"<>/,.?;'\][]{}~`
    
    if(len<4){
        console.log("Password shoiuld be atleast 4 letters.")
    }   
    else{
        let i=0
        while(i<len){
            pass = pass + upperCase [ Math.floor( Math.random() * upperCase.length) ]
            pass = pass + lowerCase [ Math.floor( Math.random() * lowerCase.length) ]
            pass = pass + number [ Math.floor( Math.random() * number.length) ]
            pass = pass + symbol [ Math.floor( Math.random() * symbol.length) ]
            i+=4;
        }

        pass = pass.substr(0,len)
        return pass
    }
        
})
