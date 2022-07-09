// getting the elements and setting variables
let resultholder = document.getElementsByClassName("value");
let result = document.querySelector(".value h1");
let theme = 1;
let header = document.getElementsByClassName("header");
let controller = document.getElementsByClassName("btn-changer");
let numbers = document.getElementsByClassName("controls");
let equation = "";
let theme_buttons = document.getElementsByClassName("btn");
let body = document.getElementsByTagName("body");


//for first time use
if (localStorage.getItem("theme") == undefined){
    localStorage.setItem("theme", 1);
    for (let i = 0; i < theme_buttons.length; i++){
        if (theme_buttons[i].getAttribute("id") === "1"){
            theme_buttons[0].style.backgroundColor = "hsl(6, 63%, 50%)"
        }else{
            theme_buttons[i].style.backgroundColor = "hsl(223, 31%, 20%)"
        }
    }
    controller[0].style.backgroundColor = "hsl(223, 31%, 20%)";
    header[0].style.color = "hsl(0, 0%, 100%)";
    result.style.color = "hsl(0, 0%, 100%)";
    body[0].style.backgroundColor = "hsl(222, 26%, 31%)";
    resultholder[0].style.backgroundColor = "hsl(224, 36%, 15%)";
    numbers[0].style.backgroundColor = "hsl(223, 31%, 20%)";
    let buttons = document.getElementsByClassName("buttons");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].children[0].style.backgroundColor = "hsl(30, 25%, 89%)";
        buttons[i].children[0].style.color = "hsl(221, 14%, 31%)";
    }
    
    document.getElementById("DEL").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementById("DEL").style.color = "hsl(0, 0%, 100%)";

    document.getElementById("reset").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementById("reset").style.color = "hsl(0, 0%, 100%)";
    
    document.getElementById("=").style.backgroundColor = "hsl(6, 63%, 50%)";
}else{
    console.log(localStorage.getItem("theme"));
    if (localStorage.getItem("theme") === "1"){
        localStorage.setItem("theme", 1);
        for (let i = 0; i < theme_buttons.length; i++){
            if (theme_buttons[i].getAttribute("id") === "1"){
                theme_buttons[i].style.backgroundColor = "hsl(6, 63%, 50%)";
            }else{
                theme_buttons[i].style.backgroundColor = "hsl(223, 31%, 20%)";
            }
        }
        controller[0].style.backgroundColor = "hsl(223, 31%, 20%)";
        header[0].style.color = "hsl(0, 0%, 100%)";
        result.style.color = "hsl(0, 0%, 100%)";
        body[0].style.backgroundColor = "hsl(222, 26%, 31%)";
        resultholder[0].style.backgroundColor = "hsl(224, 36%, 15%)";
        numbers[0].style.backgroundColor = "hsl(223, 31%, 20%)";
        let buttons = document.getElementsByClassName("buttons");
        for (let i = 0; i < buttons.length; i++){
            buttons[i].children[0].style.backgroundColor = "hsl(30, 25%, 89%)";
            buttons[i].children[0].style.color = "hsl(221, 14%, 31%)";
        }
        
        document.getElementById("DEL").style.backgroundColor = "hsl(225, 21%, 49%)";
        document.getElementById("DEL").style.color = "hsl(0, 0%, 100%)";
        
        document.getElementById("reset").style.backgroundColor = "hsl(225, 21%, 49%)";
        document.getElementById("reset").style.color = "hsl(0, 0%, 100%)";
        
        document.getElementById("=").style.backgroundColor = "hsl(6, 63%, 50%)";
    }else if(localStorage.getItem("theme") === "2"){
        localStorage.setItem("theme", 2);
        for (let i = 0; i < theme_buttons.length; i++){
            if (theme_buttons[i].getAttribute("id") === "2"){
                theme_buttons[i].style.backgroundColor = "hsl(25, 98%, 40%)";
            }else{
                theme_buttons[i].style.backgroundColor = "hsl(0, 5%, 81%)";
            }
        }
        controller[0].style.backgroundColor = "hsl(0, 5%, 81%)";
        header[0].style.color = "hsl(60, 10%, 19%)";
        result.style.color = "hsl(60, 10%, 19%)";
        body[0].style.backgroundColor = "hsl(0, 0%, 90%)";
        resultholder[0].style.backgroundColor = "hsl(0, 0%, 93%)";
        numbers[0].style.backgroundColor = "hsl(0, 5%, 81%)";
        let buttons = document.getElementsByClassName("buttons");
        for (let i = 0; i < buttons.length; i++){
            buttons[i].children[0].style.backgroundColor = "hsl(45, 7%, 89%)";
            buttons[i].children[0].style.color = "hsl(60, 10%, 19%)";
        }
        
        document.getElementById("DEL").style.backgroundColor = "hsl(185, 42%, 37%)";
        document.getElementById("DEL").style.color = "hsl(0, 0%, 100%)";
        
        document.getElementById("reset").style.backgroundColor = "hsl(185, 42%, 37%)";
        document.getElementById("reset").style.color = "hsl(0, 0%, 100%)";
        
        document.getElementById("=").style.backgroundColor = "hsl(25, 98%, 40%)";
        document.getElementById("=").style.color = "hsl(0, 0%, 100%)";
        
    }else if(localStorage.getItem("theme") === "3"){
        localStorage.setItem("theme", 3);
        for (let i = 0; i < theme_buttons.length; i++){
            if (theme_buttons[i].getAttribute("id") === "3"){
                theme_buttons[i].style.backgroundColor = "hsl(176, 100%, 44%)";
            }else{
                theme_buttons[i].style.backgroundColor = "hsl(268, 71%, 12%)";
            }
        }
        controller[0].style.backgroundColor = "hsl(268, 71%, 12%)";
        header[0].style.color = "hsl(52, 100%, 62%)";
        result.style.color = "hsl(52, 100%, 62%)";
        body[0].style.backgroundColor = "hsl(268, 75%, 9%)";
        resultholder[0].style.backgroundColor = "hsl(268, 71%, 12%)";
        numbers[0].style.backgroundColor = "hsl(268, 71%, 12%)";
        let buttons = document.getElementsByClassName("buttons");
        for (let i = 0; i < buttons.length; i++){
            buttons[i].children[0].style.backgroundColor = "hsl(268, 47%, 21%)";
            if (buttons[i].children[0].getAttribute("id") === "DEL" || buttons[i].children[0].getAttribute("id") === "reset"){
                buttons[i].children[0].style.color = "hsl(0, 0%, 100%)";
            }else{
                buttons[i].children[0].style.color = "hsl(52, 100%, 62%)";
            }
        }
        
        document.getElementById("DEL").style.backgroundColor = "hsl(281, 89%, 26%)";
        
        document.getElementById("reset").style.backgroundColor = "hsl(281, 89%, 26%)";
        
        document.getElementById("=").style.backgroundColor = "hsl(176, 100%, 44%)";
        document.getElementById("=").style.color = "hsl(198, 20%, 13%)";
        
    }
}


//setting event-listeners
numbers[0].addEventListener("click", function(e){
    let victim = e.target;
    let decider = victim.getAttribute("id");
    switch(decider){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "+":
        case "-":
        case "*":
        case "/":
        case ".":
            equation = equation + decider;
            result.textContent = equation;
            break;
            case "reset":
                result.textContent = "";
                equation = "";
                break;
                case "=":
            evaluate(equation);
            break;
        case "DEL":
            equation = equation.slice(0, equation.length - 1);
            result.textContent = equation;
            break;
        }
    }, false);
    
    controller[0].addEventListener("click", function(e){
        let mode = e.target;
        theme = mode.getAttribute("id");
        if (theme === "1"){
            localStorage.theme = 1;
            for (let i = 0; i < theme_buttons.length; i++){
                if (theme_buttons[i].getAttribute("id") === "1"){

                    theme_buttons[i].style.backgroundColor = "hsl(6, 63%, 50%)";
                }else{

                    theme_buttons[i].style.backgroundColor = "hsl(223, 31%, 20%)";
                }
            }
            controller[0].style.backgroundColor = "hsl(223, 31%, 20%)";
            header[0].style.color = "hsl(0, 0%, 100%)";
            result.style.color = "hsl(0, 0%, 100%)";
            body[0].style.backgroundColor = "hsl(222, 26%, 31%)";
            resultholder[0].style.backgroundColor = "hsl(224, 36%, 15%)";
            numbers[0].style.backgroundColor = "hsl(223, 31%, 20%)";
            let buttons = document.getElementsByClassName("buttons");
            for (let i = 0; i < buttons.length; i++){
                buttons[i].children[0].style.backgroundColor = "hsl(30, 25%, 89%)";
                buttons[i].children[0].style.color = "hsl(221, 14%, 31%)";
            }
            
            document.getElementById("DEL").style.backgroundColor = "hsl(225, 21%, 49%)";
            document.getElementById("DEL").style.color = "hsl(0, 0%, 100%)";

            document.getElementById("reset").style.backgroundColor = "hsl(225, 21%, 49%)";
            document.getElementById("reset").style.color = "hsl(0, 0%, 100%)";
            
            document.getElementById("=").style.backgroundColor = "hsl(6, 63%, 50%)";
        }else if(theme === "2"){
            localStorage.theme = 2;
            for (let i = 0; i < theme_buttons.length; i++){
                if (theme_buttons[i].getAttribute("id") === "2"){
                    theme_buttons[i].style.backgroundColor = "hsl(25, 98%, 40%)";

                }else{

                    theme_buttons[i].style.backgroundColor = "hsl(0, 5%, 81%)";
                }
            }
            controller[0].style.backgroundColor = "hsl(0, 5%, 81%)";
            header[0].style.color = "hsl(60, 10%, 19%)";
            result.style.color = "hsl(60, 10%, 19%)";
            body[0].style.backgroundColor = "hsl(0, 0%, 90%)";
            resultholder[0].style.backgroundColor = "hsl(0, 0%, 93%)";
            numbers[0].style.backgroundColor = "hsl(0, 5%, 81%)";
            let buttons = document.getElementsByClassName("buttons");
            for (let i = 0; i < buttons.length; i++){
                buttons[i].children[0].style.backgroundColor = "hsl(45, 7%, 89%)";
                buttons[i].children[0].style.color = "hsl(60, 10%, 19%)";
            }
            
            document.getElementById("DEL").style.backgroundColor = "hsl(185, 42%, 37%)";
            document.getElementById("DEL").style.color = "hsl(0, 0%, 100%)";

            document.getElementById("reset").style.backgroundColor = "hsl(185, 42%, 37%)";
            document.getElementById("reset").style.color = "hsl(0, 0%, 100%)";
            
            document.getElementById("=").style.backgroundColor = "hsl(25, 98%, 40%)";
            document.getElementById("=").style.color = "hsl(0, 0%, 100%)";
            
        }else if(theme === "3"){
            localStorage.theme = 3;
            for (let i = 0; i < theme_buttons.length; i++){
                if (theme_buttons[i].getAttribute("id") === "3"){

                    theme_buttons[i].style.backgroundColor = "hsl(176, 100%, 44%)";
                }else{

                    theme_buttons[i].style.backgroundColor = "hsl(268, 71%, 12%)";
                }
            }
            controller[0].style.backgroundColor = "hsl(268, 71%, 12%)";
            header[0].style.color = "hsl(52, 100%, 62%)";
            result.style.color = "hsl(52, 100%, 62%)";
            body[0].style.backgroundColor = "hsl(268, 75%, 9%)";
            resultholder[0].style.backgroundColor = "hsl(268, 71%, 12%)";
            numbers[0].style.backgroundColor = "hsl(268, 71%, 12%)";
            let buttons = document.getElementsByClassName("buttons");
            for (let i = 0; i < buttons.length; i++){
                buttons[i].children[0].style.backgroundColor = "hsl(268, 47%, 21%)";
                if (buttons[i].children[0].getAttribute("id") === "DEL" || buttons[i].children[0].getAttribute("id") === "reset"){
                    buttons[i].children[0].style.color = "hsl(0, 0%, 100%)";
                }else{
                    buttons[i].children[0].style.color = "hsl(52, 100%, 62%)";
                }
            }
            
            document.getElementById("DEL").style.backgroundColor = "hsl(281, 89%, 26%)";

            document.getElementById("reset").style.backgroundColor = "hsl(281, 89%, 26%)";

            document.getElementById("=").style.backgroundColor = "hsl(176, 100%, 44%)";
            document.getElementById("=").style.color = "hsl(198, 20%, 13%)";

        }  
}, false);


// evaluation of equation 
function evaluate(equation){
    result.textContent = eval(equation).toLocaleString();
}