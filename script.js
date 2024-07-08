const typingGround = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const showSentence = document.querySelector('#showSentence');

let startTime, endTime, totalTimeTaken;

//step1

btn.addEventListener('click', ()=>{
    switch (btn.innerText.toLowerCase()){
        case "start":
           typingGround.removeAttribute('disabled');
           startTyping();
           break; 
            case "done":
                typingGround.setAttribute('disabled', 'true');
                endTyping();
                break;
    }
})

//step2
const sentences = ['You will hear the three most deadly letters in Sports Entertainment RKO', 'The Show is all about LA Knight yeah', 'The quick brown Fox jumps over the lazy Dog 2 times'];
const startTyping = ()=> {
    const randomNum = Math.floor(Math.random() * sentences.length);
    //console.log(sentences[randomNum]);
    showSentence.innerHTML = sentences[randomNum];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
    
}

//step 3
const endTyping = ()=> {
    btn.innerText = "Start";
    let date = new Date();
    endTime = date.getTime();
    totalTimeTaken = (endTime - startTime) / 1000;
    //console.log(totalTimeTaken)
    calculateTypingSpeed(totalTimeTaken);
    showSentence.innerHTML = '';
    typingGround.value = '';

}

// step 4

const calculateTypingSpeed=(totalTimeTaken)=>{
    //typing speed = total words / total time taken * 60
    const textvalue = typingGround.value.trim();
    const totalWords = textvalue === '' ? 0 : textvalue.split(" ").length;
    const typingSpeed = Math.round((totalWords / totalTimeTaken) * 60);
    if(totalWords === 0)
        result.innerHTML = `No words written, you need to write to get a score`;

    else
    result.innerHTML = `Your typing speed is ${typingSpeed} words per minute and you wrote ${totalWords} words  and time taken ${totalTimeTaken}`

}