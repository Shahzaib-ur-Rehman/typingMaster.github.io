let Message = document.querySelector('.Message');
let textArea = document.querySelector('#textArea');
let Result = document.querySelector('.Result');
let startTime, endTime;
let myArray = ["The analysis or classification paragraph develops a topic by distinguishing its component parts and discussing each of these parts separately.", " All these characters, as enactors of fate, unknowingly drive Harry toward his destiny by attempting to control or to direct his life, while themselves controlled and directed by fate.", "Decide whether to deal only with similarities or only with differences, or to cover both. Also, keep in mind that a single comparison can be spread out over two separate paragraphs.", "This study was a preliminary study of high school student value changes because of the terrorist attack on the U.S", "Resterilization of the cavities, perfuming, closing the incision, and wrapping the body with linen and with beeswax completed the process."];
let btn1 = document.querySelector('.btn1');
let btn2=document.querySelector('.btn2');
btn2.addEventListener('click',function(){
   location.reload(); 
});

function startPlay() {
    let date = new Date();
    startTime = date.getTime();
    btn1.innerText = "Done";
}
function myWordCounter(words)
{
    let conuter= words.split(" ").length;
    return conuter;
}
let compare =(str1,str2)=>{
    let word1=str1.split(" ");
    let word2=str2.split(" ");
    let count=0;
    word2.forEach(function(item, index){
       if(item==word1[index])
           {
               count++;
           }
    });
    let totalError = word1.length - count;
    return (count + " corrected words out of " + word1.length + " and the total error is " + totalError + " !");
}
function endGame(){
    let date =new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);
    console.log(totalTime);
    let words=textArea.value;
    let wordCounter= myWordCounter(words);
    console.log(wordCounter);
    let speed=Math.round((wordCounter/totalTime)*60);
    let finalResult="Your Typing Speed is "+speed+" Words per minutes";
    finalResult+=compare(Message.innerText,words);
    Result.innerText=finalResult;
}

btn1.addEventListener('click', function () {

    if (btn1.innerText == "Start") {
        textArea.disabled = false;
        textArea.focus();
        let randomNumber = Math.round(
            Math.random() * myArray.length);
        Message.innerText = myArray[randomNumber];
        startPlay();
    }
    else if(btn1.innerText=="Done")
        {
            textArea.disabled=true;
            endGame();
            btn1.innerText="Start";
        }
});
btn2