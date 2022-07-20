
let time_guess = 0;
let time_guess_name = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen",
"fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty",
"twenty-one","twenty-two","twenty-three","twenty-four","twenty-five",
"twenty-six","twenty-seven","twenty-eight","twenty-nine"];
let today_card = Math.floor(Math.random() * 1188);
let simicnt = 0;
let limit = 13;
let haveguess = [];
function result(){
    simicnt = 0;
    ans = document.getElementById('content');
    user_ans = document.getElementById('ans').value;
    user_ans = user_ans.toUpperCase();
    // check if invalid input
    let chk = 0;
    for(let i = 0; i < cards.length; i++){
        if(cards[i].name == user_ans){
            user_ans = cards[i];
            chk = 1;
            break;
        }
    }
    if(chk == 0){
        alert("Please enter a legend of runeterra's card")
        return;
    }
    for(let i = 0 ; i < haveguess.length ; i++){
        if(user_ans.name == haveguess[i].name){
            alert("You have already guessed this card!!!");
            return;
        }
    }
    haveguess.push(user_ans);
    time_guess++;
    const ans_container = document.createElement("div");
    ans_container.setAttribute("class", "ans-container");
    ans_container.setAttribute("id",time_guess_name[time_guess]);
    document.getElementById("ans-display").appendChild(ans_container);
    if(user_ans.name == today_card.name){
        for(let i = 0 ; i < 12 ; i++){
            addsquare("correct");
        }

        alert("gg you win");
        return;

    }else{
        check(user_ans);
        if(simicnt >= 9){
            limit++;
        }
        console.log("incorrect");
        if(time_guess>=limit){
            alert("you lose");
            document.getElementById("next").removeAttribute("onclick");
        }
    }
    document.getElementById("time_left").innerHTML = limit - time_guess;
}

function addsquare(verdict,user_ans,key){
    ans_container = document.getElementById(time_guess_name[time_guess]);
    let clas = "square " + verdict;
    const square = document.createElement("div");
    square.setAttribute("class", clas);
    const content = document.createElement("div")
    content.setAttribute("class", "content center");
    content.innerHTML = user_ans[key];
    square.appendChild(content);
    ans_container.appendChild(square);
}
function addsquareth(){
    ans_container = document.getElementById(time_guess_name[time_guess]);
    let clas = "square ";
    const square = document.createElement("div");
    square.setAttribute("class", clas);
    const content = document.createElement("div")
    content.setAttribute("class", "content center");
    content.innerHTML = time_guess;
    square.appendChild(content);
    ans_container.appendChild(square);
}

function check(user_ans){
    addsquareth();
    checkval("name",user_ans);
    checkarr("regions",user_ans);
    checkval("attack",user_ans);
    checkval("health",user_ans);
    checkval("cost",user_ans);
    checkarr("keywords",user_ans);
    checkval("type",user_ans);
    checkarr("subtypes",user_ans);
    checkval("rarity",user_ans);
    checkval("artistName",user_ans);
    checkval("set",user_ans);
}
function checkval(key,user_ans){
    if(user_ans[key] == today_card[key]){
        addsquare("correct",user_ans,key);
    }else{
        addsquare("incorrect",user_ans,key);
    }
}
function checkarr(key,user_ans){
    let cnt = 0;
    for(let i = 0 ; i < user_ans[key].length ; i++){
        for(let j = 0 ; j < today_card[key].length ; j++){
            if(user_ans[key][i] == today_card[key][j]){
                cnt++;
                break;
            }
        }
    }
    if(cnt == user_ans[key].length && cnt == today_card[key].length){
        addsquare("correct",user_ans,key);
        simicnt++;
        return;
    }
    if(cnt > 0){
        addsquare("have-correct",user_ans,key);
        return;
    }
    addsquare("incorrect",user_ans,key);
}
