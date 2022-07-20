let cards = [...set1,...set2,...set3,...set4,...set5,...set6];
for(let i = 0 ; i < cards.length ; i++){
    for(let j = i + 1 ; j < cards.length; j++){
        if(i!=j && cards[j].cardCode.includes(cards[i].cardCode)){
            cards.splice(j,1);
            j--;
        }
    }
}

//console.log(cards.length);
for(let i = 0 ; i < cards.length ; i++){
    for(let j = 0; j < cards.length; j++){
        if(i!=j && cards[j].cardCode.includes(cards[i].cardCode)){
            //console.log("wtf");
            cards.splice(j,1);
            j--;
        }
    }
}
//console.log(cards.length);
for(let i = 0 ; i < cards.length ; i++){
    for(let j = 0; j < cards.length; j++){
        if(i!=j && cards[j].cardCode.includes(cards[i].cardCode)){
            //console.log("wtf");
            cards.splice(j,1);
            j--;
        }
    }
}
//console.log(cards.length);
for(let i = 0 ; i < cards.length ; i++){
    for(let j = 0; j < cards.length; j++){
        if(i!=j && cards[j].cardCode.includes(cards[i].cardCode)){
            //console.log("wtf");
            cards.splice(j,1);
            j--;
        }
    }
}
//console.log(cards.length);
for(let i = 0 ; i < cards.length ; i++){
    for(let j = 0; j < cards.length; j++){
        if(i!=j && cards[j].cardCode.includes(cards[i].cardCode)){
            //console.log("wtf");
            cards.splice(j,1);
            j--;
        }
    }
}
//console.log(cards.length);
for(let i = 0 ; i < cards.length ; i++){
    if(cards[i].subtypes.length == 0){
        cards[i].subtypes = ["None"];
    }
    if(cards[i].keywords.length == 0){
        cards[i].keywords = ["None"];
    }
    cards[i].name = cards[i].name.toUpperCase();
    if(cards[i].collectible == false){
        cards.splice(i,1);
        i--;
    }
}
// for(let i = 0 ; i < cards.length; i++){
//     console.log(cards[i].name);
// }
//console.log(cards.length);