




// // const typingGround = document.querySelector('#textarea');
// // const btn = document.querySelector('#btn');
// // const result = document.querySelector('#result');
// // const showSentence = document.querySelector('#showSentence');

// // let startTime, endTime, totalTimeTaken;
// // let bestScore = 0;

// // // Prevent multiple consecutive spaces
// // typingGround.addEventListener('input', () => {
// //     const value = typingGround.value;
// //     typingGround.value = value.replace(/\s\s+/g, ' ');
// // });

// // btn.addEventListener('click', () => {
// //     switch (btn.innerText.toLowerCase()) {
// //         case "start":
// //             typingGround.removeAttribute('disabled');
// //             startTyping();
// //             break;
// //         case "done":
// //             typingGround.setAttribute('disabled', 'true');
// //             endTyping();
// //             break;
// //     }
// // });

// // const sentences = [
// //     'You will hear the three most deadly letters in Sports Entertainment: RKO.', 
// //     'The show is all about LA Knight, yeah!', 
// //     'The quick brown fox jumps over the lazy dog two times.',
// //     'Hello, World, I haven\'t said!'
// // ];

// // const startTyping = () => {
// //     const randomNum = Math.floor(Math.random() * sentences.length);
// //     showSentence.innerHTML = sentences[randomNum];
// //     let date = new Date();
// //     startTime = date.getTime();
// //     btn.innerText = "Done";
// // };

// // const endTyping = () => {
// //     btn.innerText = "Start";
// //     let date = new Date();
// //     endTime = date.getTime();
// //     totalTimeTaken = (endTime - startTime) / 1000;
// //     calculateTypingSpeed(totalTimeTaken);
// //     showSentence.innerHTML = '';
// //     typingGround.value = '';
// // };

// // const calculateTypingSpeed = (totalTimeTaken) => {
// //     const textvalue = typingGround.value.trim();
// //     const sentence = showSentence.innerHTML.trim();

// //     // Split words and punctuation marks
// //     const typedWords = splitText(textvalue);
// //     const displayedWords = splitText(sentence);

// //     let correctWords = 0;
// //     let totalWords = displayedWords.length;

// //     let minLength = Math.min(typedWords.length, displayedWords.length);

// //     for (let i = 0; i < minLength; i++) {
// //         if (typedWords[i] === displayedWords[i]) {
// //             correctWords++;
// //         }
// //     }

// //     // Count additional incorrect words if typedWords is longer than displayedWords
// //     const incorrectWords = typedWords.length > totalWords ? typedWords.length - totalWords : 0;

// //     const typingSpeed = Math.round((typedWords.length / totalTimeTaken) * 60);
// //     const accuracy = Math.round((correctWords / totalWords) * 100); // Changed to divide by totalWords
// //     const score = Math.round((typingSpeed * accuracy) / 100);

// //     if (typedWords.length === 0) {
// //         result.innerHTML = `No words written, you need to write to get a score.`;
// //     } else {
// //         result.innerHTML = `Your typing speed is ${typingSpeed} words per minute. Accuracy: ${accuracy}%. Score: ${score}`;
// //     }

// //     // Update best score if current score is higher
// //     if (score > bestScore) {
// //         bestScore = score;
// //         result.innerHTML += `<br>Congratulations! You achieved a new best score of ${bestScore}.`;
// //     } else {
// //         result.innerHTML += `<br>Your best score remains ${bestScore}.`;
// //     }
// // };

// // // Function to split text into words and punctuation marks
// // const splitText = (text) => {
// //     return text.match(/[\w]+|[.,!?;'"-]/g);
// // };




// const typingGround = document.querySelector('#textarea');
// const btn = document.querySelector('#btn');
// const result = document.querySelector('#result');
// const showSentence = document.querySelector('#showSentence');
// const timerDisplay = document.querySelector('#timer');

// let startTime, endTime, totalTimeTaken;
// let countdown;
// //let bestScore = 0;

// // Load the best score from local storage, or initialize to 0 if not found
// let bestScore = localStorage.getItem('bestScore') ? parseInt(localStorage.getItem('bestScore'), 10) : 0;

// // Prevent multiple consecutive spaces
// typingGround.addEventListener('input', () => {
//     const value = typingGround.value;
//     typingGround.value = value.replace(/\s\s+/g, ' ');
// });

// btn.addEventListener('click', () => {
//     switch (btn.innerText.toLowerCase()) {
//         case "start":
//             typingGround.removeAttribute('disabled');
//             startTyping();
//             break;
//         case "done":
//             typingGround.setAttribute('disabled', 'true');
//             endTyping();
//             break;
//     }
// });

// const sentences = [
//     'You will hear the three most deadly letters in Sports Entertainment: RKO.', 
//     'The show is all about LA Knight, yeah!', 
//     'The quick brown fox jumps over the lazy dog two times.',
//     'Hello, World, I haven\'t said!'
// ];

// const startTyping = () => {
//     clearInterval(countdown);
//     const randomNum = Math.floor(Math.random() * sentences.length);
//     showSentence.innerHTML = sentences[randomNum];
//     let date = new Date();
//     startTime = date.getTime();
//     btn.innerText = "Done";
//     startTimer();
// };

// const endTyping = () => {
//     clearInterval(countdown);
//     btn.innerText = "Start";
//     let date = new Date();
//     endTime = date.getTime();
//     totalTimeTaken = (endTime - startTime) / 1000;
//     calculateTypingSpeed(totalTimeTaken);
//     showSentence.innerHTML = '';
//     typingGround.value = '';

//     // setTimeout(()=> {
//     //     window.location.href = `result.html?typingSpeed=${typingSpeed}&accuracy=${accuracy}&score=${score}&bestScore=${bestScore}&isNewBest=${isNewBest}`;
//     // }, 2000);
// };

// const calculateTypingSpeed = (totalTimeTaken) => {
//     const textvalue = typingGround.value.trim();
//     const sentence = showSentence.innerHTML.trim();

//     // Split words and punctuation marks
//     const typedWords = splitText(textvalue) || [];
//     const displayedWords = splitText(sentence) || [];

//     let correctWords = 0;
//     let totalWords = displayedWords.length;

//     if (typedWords.length === 0) {
//         result.innerHTML = `No words written, you need to write to get a score.`;
//         return;
//     }

//     let minLength = Math.min(typedWords.length, displayedWords.length);

//     for (let i = 0; i < minLength; i++) {
//         if (typedWords[i] === displayedWords[i]) {
//             correctWords++;
//         }
//     }

//     // Count additional incorrect words if typedWords is longer than displayedWords
//     const incorrectWords = typedWords.length > totalWords ? typedWords.length - totalWords : 0;

//     const typingSpeed = Math.round((typedWords.length / totalTimeTaken) * 60);
//     const accuracy = Math.round((correctWords / (totalWords + incorrectWords)) * 100);
//     const score = Math.round((typingSpeed * accuracy) / 100);


//     let isNewBest = 0;
//     // Update best score if current score is higher
//     if (score > bestScore) {
//         bestScore = score;
//         isNewBest = 1;
//        // console.log(bestScore)
//         // Store the new best score in local storage
//         localStorage.setItem('bestScore', bestScore);
//     }

//    // result.innerHTML = `Your typing speed is ${typingSpeed} words per minute. Accuracy: ${accuracy}%. Score: ${score}`;
//    window.location.href = `result.html?typingSpeed=${typingSpeed}&accuracy=${accuracy}&score=${score}&bestScore=${bestScore}&isNewBest=${isNewBest}`;//new one
//     // Update best score if current score is higher
//     // if (score > bestScore) {
//     //     bestScore = score;
//     //     result.innerHTML += `<br>Congratulations! You achieved a new best score of ${bestScore}.`;
//     // } else {
//     //     result.innerHTML += `<br>Your best score remains ${bestScore}.`;
//     // }
// };

// // Function to split text into words and punctuation marks
// const splitText = (text) => {
//     return text.match(/[\w']+|[.,!?;'"-]/g) || [];
// };

// const startTimer = ()=> {
//     let timeleft = 60;
//     timerDisplay.innerText = `Time: ${timeleft}s`;
//     countdown = setInterval(()=>{
//         timeleft--;
//         timerDisplay.innerText = `Time: ${timeleft}s`;
//         if(timeleft <= 0){
//             clearInterval(countdown); 
//             endTyping();
//         }
//     },1000);
// }







const typingGround = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const showSentence = document.querySelector('#showSentence');
const timerDisplay = document.querySelector('#timer');
const loading = document.querySelector('#loading');


let startTime, endTime, totalTimeTaken;
let countdown;
let bestScore = localStorage.getItem('bestScore') ? parseInt(localStorage.getItem('bestScore'), 10) : 0;
let sentences = [];

// Prevent multiple consecutive spaces
typingGround.addEventListener('input', () => {
    const value = typingGround.value;
    typingGround.value = value.replace(/\s\s+/g, ' ');
});

btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typingGround.removeAttribute('disabled');
            startTyping();
            break;
        case "done":
            typingGround.setAttribute('disabled', 'true');
            endTyping();
            break;
    }
});

const fetchSentences = async () => {
    try {
        const response = await fetch('sentences.json');
        const data = await response.json();
        sentences = data.sentences;
    } catch (error) {
        console.error('Error fetching sentences:', error);
    }
};

const getRandomSentence = () => {
    const randomNum = Math.floor(Math.random() * sentences.length);
    return sentences[randomNum];
};

const startTyping = () => {
    clearInterval(countdown); // Clear any existing countdown
    const sentence = getRandomSentence();
    showSentence.innerHTML = sentence;
    startTimer();
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
};

const endTyping = () => {
    clearInterval(countdown);
    btn.innerText = "Start";
    let date = new Date();
    endTime = date.getTime();
    totalTimeTaken = (endTime - startTime) / 1000;
    showLoadingSpinner(() => {
        calculateTypingSpeed(totalTimeTaken);
        showSentence.innerHTML = '';
        typingGround.value = '';
    });
};

const startTimer = () => {
    let timeLeft = 60;
    timerDisplay.innerText = `Time left: ${timeLeft}s`;
    countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            endTyping();
        }
    }, 1000);
};

const calculateTypingSpeed = (totalTimeTaken) => {
    const textvalue = typingGround.value.trim();
    const sentence = showSentence.innerHTML.trim();

    // Split words and punctuation marks
    const typedWords = splitText(textvalue) || [];
    const displayedWords = splitText(sentence) || [];

    let correctWords = 0;
    let totalWords = displayedWords.length;

    if (typedWords.length === 0) {
        result.innerHTML = `No words written, you need to write to get a score.`;
        return;
    }

    let minLength = Math.min(typedWords.length, displayedWords.length);

    for (let i = 0; i < minLength; i++) {
        if (typedWords[i] === displayedWords[i]) {
            correctWords++;
        }
    }

    // Count additional incorrect words if typedWords is longer than displayedWords
    const incorrectWords = typedWords.length > totalWords ? typedWords.length - totalWords : 0;

    const typingSpeed = Math.round((typedWords.length / totalTimeTaken) * 60);
    const accuracy = Math.round((correctWords / (totalWords + incorrectWords)) * 100);
    const score = Math.round((typingSpeed * accuracy) / 100);

    let isNewBest = 0;
    // Update best score if current score is higher
    if (score > bestScore) {
        bestScore = score;
        isNewBest = 1;
        localStorage.setItem('bestScore', bestScore);
    }

    window.location.href = `result.html?typingSpeed=${typingSpeed}&accuracy=${accuracy}&score=${score}&bestScore=${bestScore}&isNewBest=${isNewBest}`;
};

// Function to split text into words and punctuation marks
const splitText = (text) => {
    return text.match(/[\w']+|[.,!?;'"-]/g) || [];
};


// Show loading spinner for 2 seconds before displaying result
const showLoadingSpinner = (callback) => {
    loading.style.display = 'block';
    setTimeout(() => {
        loading.style.display = 'none';
        callback();
    }, 2000);
};

// Fetch sentences on page load
fetchSentences();


