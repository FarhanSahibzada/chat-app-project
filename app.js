let btn = document.getElementById("btn");
let message = document.getElementById("message");
let pc = document.getElementById("message2");


let date = new Date();
let todate = date.toDateString();

let time = date.toLocaleTimeString();
let totime = time.slice(0, 2);

let Time;
if (totime > 12) {
    Time = totime - 12 + time.slice(2, 5) + " " + "PM";
} else {
    Time = totime + time.slice(2, 5) + " " + "AM";
}


// let arr = ["how can i help you", "good", "i can't understand", "okey", "how are you?"];


btn.addEventListener("click", myfunction);
document.addEventListener("keypress", function (e) {

    if (e.key == "Enter") {
        return myfunction();
    }

});
let score = 1;
let num ;
let input = document.getElementById("input");
function myfunction() {
    let inputs = input.value.toLowerCase();
    let inslit = inputs.split(" ");
    // how are you
    let h = inslit.indexOf("how");
    let a = inslit.indexOf("are");
    let y = inslit.indexOf("you");
    
    // good
    let g = inslit.indexOf("good");
    
    //learn 
    let ht = inslit.indexOf("html");
    
    // hi
    let hi = inslit.indexOf("hi");
    // time
    let t = inslit.indexOf("time");
    // date
    let dat = inslit.indexOf("date");
    // feeling
    let fell = inslit.indexOf("feel")
    let felling = inslit.indexOf("feeling");
    
    // future
    let fu = inslit.indexOf("future");
    // love
    let love = inslit.indexOf("love");
    let i = inslit.indexOf("i");
    // day
    let day = inslit.indexOf("day");


    if (inputs.length > 30) {
        score++;
        num = `A${score}`;
        message.innerHTML += `<div class="message1" id="${num}">
        <h5 class="m1child"><br>ME</h5>
        <br>${inputs.slice(0, 10)}<br>${inputs.slice(10, 20)}<br>${inputs.slice(20, 30)}
        <a id="btn2-${num}" class="btn2">...Show More</a></div>`
        localStorage.setItem(`longmessage-${num}`,inputs);
    } else {
        message.innerHTML += `<div class="message1" id="message1"><h5 class="m1child"><br>ME</h5><br>${inputs}</div>`
    }
    if (h != -1 && a != -1 && y != -1) {
        setTimeout(() => {
            pc.innerHTML += `<div class="pcmess" id="pcmess"><h5 class="m2child"><br>AI Chatbot</h5><br>I'm doing well, thanks for asking! <br> how are you ?</div>`
        }, 800)
    } else if (g != -1) {
        setTimeout(() => {
            pc.innerHTML += `<div class="pcmess" id="pcmess"><h5 class="m2child"><br>AI Chatbot</h5><br>I'm also good <br> how can i help you ?</div>`
        }, 800)
    } else if (ht != -1) {
        setTimeout(() => {
            pc.innerHTML += `<div class="pcmess" id="pcmess"><h5 class="m2child"><br>AI Chatbot</h5><br>good here the names of websites where <br> you learn HTML step by step: <br>  1)w3schools <br> 2)Programiz <br>3)stack overflow </div>`
        }, 800)
    } else if (hi != -1) {
        setTimeout(() => {
            pc.innerHTML += `<div class="pcmess" id="pcmess"><h5 class="m2child"><br>AI Chatbot</h5><br>Hello</div>`
        }, 800)
    } else if (t != -1) {
        setTimeout(() => {
            pc.innerHTML += `<div class="pcmess" id="pcmess"><h5 class="m2child"><br>AI Chatbot</h5><br>${Time}</div>`
        }, 800)
    } else if (dat != -1) {
        setTimeout(() => {
            pc.innerHTML += `<div class="pcmess" id="pcmess"><h5 class="m2child"><br>AI Chatbot</h5><br>${todate}</div>`
        }, 800)
    } else if (fell != -1 || felling != -1) {
        setTimeout(() => {
            pc.innerHTML += `<div class="pcmess" id="pcmess"><h5 class="m2child"><br>AI Chatbot</h5><br>I'm an AI, so I don't have feelings or emotions. However, <br> I'm here to help you with any  questions or tasks you have. <br> How can I assist you today?</div>`
        }, 800);
    }else if (day != -1) {
        setTimeout(() => {
            console.log(add);    
            pc.innerHTML += `<div class="pcmess" id="pcmess"><h5 class="m2child"><br>AI Chatbot</h5><br>Today is ${todate.slice(0,3)} </div>`
        }, 800);
    
    }
    else if (fu != -1) {
        setTimeout(() => {
            pc.innerHTML += `<div class="pcmess" id="pcmess"><h5 class="m2child"><br>AI Chatbot</h5><br> <strong>Personal Development </strong> <br>Set Clear Goals: Define specific and achievable goals. <br>
Continuous Learning: Keep learning and updating your skills. <br>
Health and Well-being: Maintain a healthy lifestyle.<br>
<strong>Professional Growth </strong><br>
Expand Skills: Learn new technologies and improve your expertise.<br>
Network: Connect with other professionals.<br>
Build a Portfolio: Showcase your work online.<br>
<strong >Financial Stability</strong> <br>
Save and Invest: Manage your finances and invest wisely.<br>
Plan for the Future: Set long-term financial goals.<br>
 <strong>Personal Relationships </strong><br>
Build Relationships: Foster strong connections with others.<br>
Improve Communication: Develop effective communication skills.<br>
<strong>Adaptability</strong> <br>
Embrace Change: Be open to new experiences.<br>
Problem-Solving Skills: Enhance your ability to solve problems. </div>`
        }, 800);
    }else if (love != -1 && i != -1) {
        setTimeout(() => {
            pc.innerHTML += `<div class="pcmess" id="pcmess"><h5 class="m2child"><br>AI Chatbot</h5><br>I'm an AI, so I don't have feelings. i can't love you.</div>`
        }, 800);

        }    else {
        setTimeout(() => {
            pc.innerHTML += `<div class="pcmess" id="pcmess"><h5 class="m2child"><br>AI Chatbot</h5><br>I can't understand your words.<br> I'm an AI, so I don't have feelings or emotions. <br> i only understand limited questions :  </div>`
        }, 800);
    }


    input.value = "";
}


message.addEventListener("click", function (e) {
    if(e.target.classList.contains("btn2")){    
        let id = e.target.id.split("-")[1];
        let long = localStorage.getItem(`longmessage-${id}`);
        let messageDiv = document.getElementById(id);
        messageDiv.innerHTML = `
            <h5 class="m1child"><br>ME</h5><br>${long.slice(0, 25)}<br>${long.slice(25, 50)}<br>${long.slice(50)}
        `;
     }
});
