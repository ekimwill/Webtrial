const radial =  document.getElementById('radial')
const linear =  document.getElementById('linear')
const hex1 = document.getElementById('hex-color1')
const hex2 = document.getElementById('hex-color2')
const pattern = document.getElementById('pattern')



linear.addEventListener('click', ()=>{

    let hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
    let code1 = ""
    let code2 = ""
    let index = 0

    for(let i =0 ;i < 6 ; i++){
        let rand = Math.floor(Math.random() * 16);
        code1 += hex_numbers[rand]
        rand = Math.floor(Math.random() * 16);
        code2 += hex_numbers[rand]
    }
    
    str = `linear-gradient(to right, #${code1} , #${code2})`
    document.body.style.background  = str
    pattern.innerHTML = str
    // hex1.textContent = code1
    // hex2.textContent = code2
    

})

radial.addEventListener('click', ()=>{

    let hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
    let code1 = ""
    let code2 = ""
    let code3 = ""
    let index = 0

    for(let i =0 ;i < 6 ; i++){
        let rand = Math.floor(Math.random() * 16);
        code1 += hex_numbers[rand]
        rand = Math.floor(Math.random() * 16);
        code2 += hex_numbers[rand]
        rand = Math.floor(Math.random() * 16);
        code3 += hex_numbers[rand]
    }
    
    // str = `linear-gradient(to right, #${code1} , #${code2})`
    str = `background-image: radial-gradient(circle ,#${code1} , #${code2}  , #${code3}  );`
    document.body.style = str
    pattern.innerHTML = str
    // hex1.textContent = code1
    // hex2.textContent = code2
    

})
