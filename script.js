let len = document.getElementById("len")
let generate = document.getElementById("generate")
let view = document.getElementById("view")

const genPassword = (len) => {

  let pass = ""

  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowerCase = "abcdefghijklmnopqrstuvwxyz"
  let number = `0123456789`
  let symbol = `!@#$%^&*()"<>/,.?;'\][]{}~`

  if (len < 4) 
  {
    console.log("Password shoiuld be atleast 4 letters.")
  }
  else 
  {
    let i = 0
    while (i < len) 
    {
      pass += upperCase[Math.floor(Math.random() * upperCase.length)]
      pass += lowerCase[Math.floor(Math.random() * lowerCase.length)]
      pass += number[Math.floor(Math.random() * number.length)]
      pass += symbol[Math.floor(Math.random() * symbol.length)]
      i += 4;
    }

    pass = pass.substr(0, len)

  }
  view.innerHTML = `<h3> ${pass}</h3>`
}
generate.addEventListener("click", () => genPassword(len.value))

