// =======================================
// Greeting According to Time
// =======================================

const hour = new Date().getHours();

const greeting = document.getElementById("greeting");

if(hour < 12){

    greeting.innerHTML = "☀️ Good Morning";

}
else if(hour < 17){

    greeting.innerHTML = "🌤️ Good Afternoon";

}
else{

    greeting.innerHTML = "🌙 Good Evening";

}

// =======================================
// Mood Recommendation Data
// =======================================

const moods={

happy:{

recommendation:"😊 You're feeling happy! Keep smiling and spread positivity.",

book:"📖 Atomic Habits",

movie:"🎬 Zindagi Na Milegi Dobara",

music:"🎵 Happy Vibes Playlist",

food:"🍕 Pizza",

quote:"The best time to smile is always now."

},

sad:{

recommendation:"❤️ It's okay to feel sad. Better days are coming.",

book:"📖 Harry Potter",

movie:"🎬 The Pursuit of Happyness",

music:"🎵 Calm Piano",

food:"🍫 Chocolate",

quote:"Tough times never last, but tough people do."

},

calm:{

recommendation:"😌 Enjoy your peaceful moment.",

book:"📖 Ikigai",

movie:"🎬 Spirited Away",

music:"🎵 Nature Sounds",

food:"🍵 Green Tea",

quote:"Peace begins with a smile."

},

stressed:{

recommendation:"🧘 Take a deep breath. Everything will be okay.",

book:"📖 The Alchemist",

movie:"🎬 Inside Out",

music:"🎵 Relaxing Rain Sounds",

food:"🍦 Ice Cream",

quote:"Slow down. You don't have to solve everything today."

},

excited:{

recommendation:"🚀 Amazing! Use this energy wisely.",

book:"📖 Think Like a Monk",

movie:"🎬 Interstellar",

music:"🎵 Motivational Mix",

food:"🍔 Burger",

quote:"Dream big and dare to fail."

}

};

// =======================================
// Mood Selection
// =======================================

function changeMood(mood){

document.getElementById("recommendation").innerHTML=

moods[mood].recommendation;

document.getElementById("bookBox").innerHTML=

"<h3>"+moods[mood].book+"</h3><p>⭐⭐⭐⭐⭐</p>";

document.getElementById("movieBox").innerHTML=

"<h3>"+moods[mood].movie+"</h3><p>Recommended for your mood.</p>";

document.getElementById("musicBox").innerHTML=

"<h3>"+moods[mood].music+"</h3>";

document.getElementById("foodBox").innerHTML=

"<h3>"+moods[mood].food+"</h3>";

document.getElementById("quote").innerHTML=

moods[mood].quote;

// Happiness Meter

let value=70;

if(mood=="happy") value=95;

if(mood=="excited") value=90;

if(mood=="calm") value=80;

if(mood=="stressed") value=45;

if(mood=="sad") value=35;

document.getElementById("progress-bar").style.width=value+"%";

document.getElementById("meterText").innerHTML=

value+"% Happy";

}

// =======================================
// Comfort Food Suggestions
// =======================================

const foods=[

"🍕 Pizza",

"🍔 Burger",

"🍟 French Fries",

"🍦 Ice Cream",

"🍩 Donuts",

"🍫 Chocolate",

"🥞 Pancakes",

"🍜 Noodles",

"🧋 Bubble Tea"

];

function changeFood(){

let random=Math.floor(Math.random()*foods.length);

document.getElementById("foodBox").innerHTML=

"<h3>"+foods[random]+"</h3>";

}
// =======================================
// JOURNAL (Local Storage)
// =======================================

function saveJournal(){

let journal=document.getElementById("journal").value;

if(journal==""){

alert("Please write something first!");

return;

}

localStorage.setItem("MoodMateJournal",journal);

alert("📖 Journal Saved Successfully!");

}

window.onload=function(){

let savedJournal=localStorage.getItem("MoodMateJournal");

if(savedJournal){

document.getElementById("journal").value=savedJournal;

}

}

// =======================================
// WATER TRACKER
// =======================================

let water=0;

function drinkWater(){

water++;

document.getElementById("waterCount").innerHTML=

water+" Glasses";

}

// =======================================
// DAILY GOAL
// =======================================

function saveGoal(){

let goal=document.getElementById("goalInput").value;

if(goal==""){

alert("Enter your goal first!");

return;

}

document.getElementById("goalText").innerHTML=

"🎯 "+goal;

}

// =======================================
// PRODUCTIVITY TRACKER
// =======================================

const checks=document.querySelectorAll("input[type='checkbox']");

checks.forEach(function(box){

box.addEventListener("change",updateProgress);

});

function updateProgress(){

let completed=0;

checks.forEach(function(box){

if(box.checked){

completed++;

}

});

let percent=(completed/checks.length)*100;

document.getElementById("taskBar").style.width=

percent+"%";

document.getElementById("taskText").innerHTML=

Math.round(percent)+"% Completed";

}

// =======================================
// AI CHATBOT
// =======================================

function chatBot(){

let message=document.getElementById("userInput").value.toLowerCase();

let reply="❤️ I'm always here for you.";

if(message.includes("sad")){

reply="🌈 Everything will be okay. Try listening to calming music and remember that this feeling will pass.";

}

else if(message.includes("stress")){

reply="🧘 Take a deep breath. Try a 5-minute breathing exercise or go for a short walk.";

}

else if(message.includes("happy")){

reply="🎉 That's wonderful! Keep spreading positivity and enjoy your day!";

}

else if(message.includes("study")){

reply="📚 Study for 25 minutes, then take a 5-minute break. You've got this!";

}

else if(message.includes("lonely")){

reply="❤️ Reach out to someone you trust or spend time doing something you enjoy. You don't have to go through everything alone.";

}

else if(message.includes("hello")){

reply="👋 Hello! I'm MoodMate. How are you feeling today?";

}

else if(message.includes("tired")){

reply="😴 It sounds like you need some rest. Drink some water, stretch a little, and take a short break if you can.";

}

document.getElementById("aiReply").innerHTML=reply;

}

// =======================================
// DARK MODE
// =======================================

function darkMode(){

document.body.classList.toggle("dark");

}

// =======================================
// DAILY QUOTES
// =======================================

const quotes=[

"Believe in yourself. 🌸",

"You are stronger than you think. 💪",

"Every day is a fresh beginning. ☀️",

"Small progress is still progress. 🌱",

"Your future is created by what you do today. ✨",

"Take care of yourself first. ❤️",

"Keep smiling. Better days are coming. 😊",

"Stay positive and never give up. 🌈"

];

function randomQuote(){

let random=Math.floor(Math.random()*quotes.length);

document.getElementById("quote").innerHTML=

quotes[random];

}

setInterval(randomQuote,8000);

// =======================================
// WELCOME MESSAGE
// =======================================

setTimeout(function(){

alert("🌸 Welcome to MoodMate!\n\nTake care of your mental wellness today ❤️");

},800);

// =======================================
// END
// =======================================