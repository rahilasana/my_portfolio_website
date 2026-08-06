const chatBtn = document.getElementById("chatBtn");
const chatWindow = document.getElementById("chatWindow");
const closeBtn = document.getElementById("closeBtn");
let chatHistory = [];

// Robot button se Open/Close
chatBtn.addEventListener("click", () => {
  chatWindow.classList.toggle("hidden");
});

// Header ke X button se Close
closeBtn.addEventListener("click", () => {
  chatWindow.classList.add("hidden");
});

const messages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
function appendUserMessage(message, save = true) {
  const msg = document.createElement("div");

  msg.className = "flex justify-end";

  msg.innerHTML = `
        <div class="bg-slate-800 text-white p-4 rounded-2xl rounded-tl-sm max-w-[80%] whitespace-pre-line leading-7">
    ${message}
</div>
    `;

  messages.appendChild(msg);

  messages.scrollTop = messages.scrollHeight;
if (save) {

    chatHistory.push({
        sender: "user",
        message: message
    });

    localStorage.setItem(
        "chatHistory",
        JSON.stringify(chatHistory)
    );

}
// console.log(chatHistory);
}
function appendAIMessage(message, save = true) {
  const msg = document.createElement("div");

  msg.className = "flex items-start gap-3";

  msg.innerHTML = `
        <div class="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-robot text-white"></i>
        </div>

        <div class="bg-slate-800 text-white p-4 rounded-2xl rounded-tl-sm max-w-[80%]">
            ${message}
        </div>
    `;

  messages.appendChild(msg);

  messages.scrollTop = messages.scrollHeight;
if (save) {

    chatHistory.push({
        sender: "ai",
        message: message
    });

    localStorage.setItem(
        "chatHistory",
        JSON.stringify(chatHistory)
    );

}

// console.log(chatHistory);
}
function getAIResponse(message) {
  message = message.toLowerCase();
  if (
    message.includes("hi") ||
    message.includes("hello") ||
    message.includes("hey") ||
    message.includes("assalam")
  ) {
    return "👋 Hello! I'm Rahila's AI Assistant. Ask me about my skills, projects, experience or contact information.";
  }
  if (
    message.includes("thanks") ||
    message.includes("thank") ||
    message.includes("thank you") ||
    message.includes("tysm") ||
    message.includes("ty")
  ) {
    return "You're welcome! 😊";
  }

  if (message.includes("bye")) {
    return "Goodbye! Have a great day 👋";
  }
  if (message.includes("allah hafiz")) {
    return "Allah Hafiz! Have a great day 👋";
  }

  if (
    message.includes("about") ||
    message.includes("who are you") ||
    message.includes("introduce") ||
    message.includes("yourself") ||
    message.includes("tell me about yourself")
) {
    return portfolioData.about;
}

if (
    message.includes("skill") ||
    message.includes("technology") ||
    message.includes("technologies") ||
    message.includes("tech stack") ||
    message.includes("programming language") ||
    message.includes("languages") ||
    message.includes("tools") ||
    message.includes("what do you know")
) {

    return `
<h3 class="font-bold text-violet-300 mb-2">💻 Frontend</h3>

<ul class="list-disc ml-5 space-y-1">
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>Tailwind CSS</li>
<li>React (Learning)</li>
</ul>

<h3 class="font-bold text-violet-300 mt-4 mb-2">🛠 Tools</h3>

<ul class="list-disc ml-5 space-y-1">
<li>Git</li>
<li>GitHub</li>
<li>VS Code</li>
</ul>

<h3 class="font-bold text-violet-300 mt-4 mb-2">🤖 Learning</h3>

<ul class="list-disc ml-5 space-y-1">
<li>AI</li>
<li>Machine Learning</li>
<li>Cyber Security</li>
</ul>
`;

}

  if (
    message.includes("project") ||
    message.includes("portfolio") ||
    message.includes("work") ||
    message.includes("built") ||
    message.includes("experience")
) {

    return `
<h3 class="font-bold text-violet-300 text-lg mb-3">📂 My Projects</h3>

<div class="space-y-4">

<div class="border border-slate-700 rounded-xl p-3">
<h4 class="font-semibold">🌐 Portfolio Website</h4>
<p class="text-sm text-slate-300 mt-1">
Responsive personal portfolio website.
</p>

<p class="text-xs text-violet-300 mt-2">
HTML • Tailwind CSS • JavaScript
</p>
</div>

<div class="border border-slate-700 rounded-xl p-3">
<h4 class="font-semibold">🤖 AI Portfolio Assistant</h4>

<p class="text-sm text-slate-300 mt-1">
Interactive chatbot for portfolio.
</p>

<p class="text-xs text-violet-300 mt-2">
HTML • Tailwind CSS • JavaScript
</p>
</div>

<div class="border border-slate-700 rounded-xl p-3">
<h4 class="font-semibold">👨‍💼 Employee Management System</h4>

<p class="text-sm text-slate-300 mt-1">
Employee Management CRUD Application.
</p>

<p class="text-xs text-violet-300 mt-2">
HTML •Tailwind Css •React js
</p>
</div>

<div class="border border-slate-700 rounded-xl p-3">
<h4 class="font-semibold">🛒 E-Commerce UI</h4>

<p class="text-sm text-slate-300 mt-1">
Responsive shopping interface.
</p>

<p class="text-xs text-violet-300 mt-2">
HTML • Css •Js
</p>
</div>

</div>
`;

}

  if (message.includes("contact")) return portfolioData.contact;

  return "Sorry, I couldn't understand that. Try asking about About Me, Skills, Projects or Contact.";
}

function sendMessage() {
  const text = userInput.value.trim();

  if (text === "") return;

  appendUserMessage(text);

  userInput.value = "";

  userInput.focus();

  showTyping();

  setTimeout(() => {
    hideTyping();

    appendAIMessage(getAIResponse(text));
  }, 1200);
}
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
const typingIndicator = document.getElementById("typingIndicator");
function showTyping() {
  typingIndicator.classList.remove("hidden");

  requestAnimationFrame(() => {
    messages.scrollTop = messages.scrollHeight;
  });
}

function hideTyping() {
  typingIndicator.classList.add("hidden");
}
const questionBtns = document.querySelectorAll(".questionBtn");

questionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    userInput.value = btn.innerText;

    sendMessage();
  });
});
function loadChatHistory() {

    const savedChat = localStorage.getItem("chatHistory");

    if (!savedChat) return;

    chatHistory = JSON.parse(savedChat);

    console.log(chatHistory);
       chatHistory.forEach((chat) => {

    if (chat.sender === "user") {

        appendUserMessage(chat.message, false);

    } else {

        appendAIMessage(chat.message, false);

    }

});

}
loadChatHistory();
localStorage.removeItem("chatHistory");
localStorage.getItem("chatHistory")
typingIndicator.classList.remove("hidden")