const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789§±ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ'.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];
for (let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
  ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#00ff88';
  ctx.font = fontSize + 'px monospace';
  
  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 50);

const quizData = [
  { question: "You get an SMS: 'Your Electricity Bill is pending. Power will be cut by 9 PM. Call this number...'", options: ["Call immediately", "Pay through link in SMS", "Ignore it, electricity boards don't do this", "Forward it fast"], answer: 2, explanation: "Scammers use urgency. Official boards don't send personal mobile numbers for bill payments." },
  { question: "Someone asks you to scan a QR code to RECEIVE money on UPI. What do you do?", options: ["Scan it to receive", "Don't scan. QR codes are only for SENDING money.", "Share UPI PIN", "Ask them to send the QR over WhatsApp"], answer: 1, explanation: "You NEVER need to enter your UPI PIN or scan a QR to receive money." },
  { question: "Which makes a strong password?", options: ["Dog's name + birth year (Tommy90)", "12345678", "A mix of cases, symbols and numbers", "Your mobile number"], answer: 2, explanation: "A strong password contains a mix of upper/lower case letters, numbers, and symbols." },
  { question: "A friend texts you on Instagram: 'I need urgent help, please GPay me ₹5000'. You should:", options: ["Send money immediately", "Ask for bank details on chat", "Call the friend directly to verify", "Ignore forever"], answer: 2, explanation: "Accounts get hacked frequently. Verify urgent money requests by calling." },
  { question: "You connect to 'Free_Airport_WiFi'. What is safe to do?", options: ["Check bank balance via app", "Enter credit card details", "Browse regular news articles", "Login to corporate email"], answer: 2, explanation: "Public Wi-Fi is insecure. Avoid sensitive transactions without a VPN." },
  { question: "You receive a WhatsApp msg offering a part-time job to review YouTube videos for ₹5000/day.", options: ["Accept the job immediately", "Pay the small ₹500 registration fee", "Block and ignore the sender", "Share bank account to receive salary"], answer: 2, explanation: "This is a classic task-fraud scam. No one pays high amounts for simple tasks easily." },
  { question: "A caller claiming to be a bank manager asks for OTP to reverse a fraudulent transaction.", options: ["Give the OTP quickly", "Hang up, banks never ask for OTP", "Ask for his employee ID first", "Share OTP if caller ID says 'Bank'"], answer: 1, explanation: "Banks never ask for your OTP. Anyone asking for OTP is a scammer." },
  { question: "A free game app asks for permission to read your SMS and Contacts. You should:", options: ["Allow easily", "Deny, a game doesn't need to read SMS", "Allow only SMS", "Allow only Contacts"], answer: 1, explanation: "Apps often harvest data. Deny unnecessary permissions." },
  { question: "You search for a courier customer care number on Google and find a mobile number matching.", options: ["Call and download AnyDesk when asked", "Pay ₹5 registration fee as requested", "Check the official verified website only", "WhatsApp your tracking ID to it"], answer: 2, explanation: "Scammers upload fake numbers to Google. Only trust official source URLs." },
  { question: "An email from 'IT-Support@company-updats.com' asks you to reset your password.", options: ["Click the link and change it", "Reply with old password", "Check the domain typos and report phishing", "Forward to all colleagues"], answer: 2, explanation: "Look closely at the sender's email domain for slight spelling errors like 'updats'." }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
  if (currentQuestion >= quizData.length) {
    showQuizResults();
    return;
  }
  
  const q = quizData[currentQuestion];
  document.getElementById('q-num').innerText = currentQuestion + 1;
  document.getElementById('question-text').innerText = q.question;
  document.getElementById('quiz-progress').style.width = `${((currentQuestion) / quizData.length) * 100}%`;
  
  const optionsHtml = q.options.map((opt, i) => 
    `<button class="option-btn" onclick="checkAnswer(${i})">${['A', 'B', 'C', 'D'][i]}. ${opt}</button>`
  ).join('');
  
  document.getElementById('options-container').innerHTML = optionsHtml;
  document.getElementById('feedback').className = 'feedback hidden';
}

function checkAnswer(selectedIdx) {
  const q = quizData[currentQuestion];
  const btns = document.querySelectorAll('.option-btn');
  const feedbackEl = document.getElementById('feedback');
  
  btns.forEach(b => b.disabled = true);
  
  if (selectedIdx === q.answer) {
    btns[selectedIdx].classList.add('correct');
    feedbackEl.innerHTML = `✅ <strong>Correct!</strong> ${q.explanation}`;
    feedbackEl.className = 'feedback correct';
    score++;
  } else {
    btns[selectedIdx].classList.add('wrong');
    btns[q.answer].classList.add('correct');
    feedbackEl.innerHTML = `❌ <strong>Wrong!</strong> ${q.explanation}`;
    feedbackEl.className = 'feedback wrong';
  }
  
  setTimeout(() => {
    currentQuestion++;
    loadQuiz();
  }, 3500);
}

function showQuizResults() {
  document.getElementById('quiz-content').classList.add('hidden');
  document.getElementById('quiz-progress').style.width = '100%';
  const resultEl = document.getElementById('quiz-result');
  resultEl.classList.remove('hidden');
  
  let rank = "";
  if(score <= 4) rank = "Noob 😢";
  else if(score <= 7) rank = "Aware 🤔";
  else if(score <= 9) rank = "Guardian 🛡️";
  else rank = "CyberHero 🦸‍♂️";

  resultEl.innerHTML = `
    <h2>Quiz Complete!</h2>
    <div class="score-badge">${score} / ${quizData.length}</div>
    <h3>Cyber Level: ${rank}</h3>
    <p style="margin:1rem 0; color:#888;">Share your score and challenge your friends to check their digital safety awareness!</p>
    <div class="share-buttons">
      <button class="btn btn-secondary" onclick="shareWhatsApp()"><i class="fab fa-whatsapp"></i> WhatsApp</button>
      <button class="btn btn-secondary" onclick="shareInsta()"><i class="fab fa-instagram"></i> Instagram</button>
    </div>
    <br><br>
    <button class="btn btn-primary" onclick="location.reload()">Retake Quiz</button>
  `;
}
loadQuiz();

window.shareWhatsApp = function() {
    window.open(`https://api.whatsapp.com/send?text=I just scored ${score}/10 on the CyberSuraksha Digital Safety test! Am I safer than you? Take the quiz to check!`);
}
window.shareInsta = function() {
    alert("Share snapshot saved successfully! You can now post it onto your Instagram story.");
}

const chatbotScenarios = {
  kyc: [
    "Step 1: 🛑 Do NOT panic. Bank officials never call and threaten to block accounts immediately.",
    "Step 2: 🙅‍♂️ Do NOT download any apps like AnyDesk, TeamViewer, or QuickSupport if they ask you to.",
    "Step 3: 📞 Disconnect the call. Call your bank's official customer care number to verify."
  ],
  insta: [
    "Step 1: 🔒 Try to reset your password via the 'Forgot Password' link immediately if you still have access to your email/phone.",
    "Step 2: 🛑 Let your friends and contacts know NOT to send money to anyone messaging from your account.",
    "Step 3: 📄 Report the compromised account to Instagram via their official help center (help.instagram.com)."
  ],
  upi: [
    "Step 1: 🛑 NEVER enter your UPIN PIN to receive money. PIN is only for sending money.",
    "Step 2: 🚫 Decline the request in your UPI app (GPay/PhonePe/Paytm).",
    "Step 3: ❌ Block the contact/number on the app so they can't send requests again."
  ],
  otp: [
    "Step 1: 🚨 If you shared an OTP for a bank transaction, immediately call your bank to block the card/account.",
    "Step 2: 📞 Dial 1930 (National Cyber Crime Helpline) if money has already been deducted.",
    "Step 3: 💻 Register a formal complaint at cybercrime.gov.in."
  ],
  link: [
    "Step 1: 🔌 Disconnect your mobile data or Wi-Fi immediately to stop any background downloads.",
    "Step 2: 🗑️ Clear your browser history, cache, and cookies.",
    "Step 3: 💼 Change passwords for your important accounts using a different device."
  ]
};

const chatMessages = document.getElementById('chat-messages');
const typingIndicator = document.getElementById('typing-indicator');

document.querySelectorAll('.scenario-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    
    const scenario = e.target.getAttribute('data-scenario');
    const userText = e.target.innerText;
    
    addChatMessage(userText, 'user');
    typingIndicator.classList.remove('hidden');
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    setTimeout(() => {
      typingIndicator.classList.add('hidden');
      const responses = chatbotScenarios[scenario];
      responses.forEach((resp, i) => {
        setTimeout(() => {
          addChatMessage(resp, 'ai');
        }, i * 800);
      });
    }, 1000);
  });
});

function addChatMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `msg ${sender}-msg`;
  const avatar = sender === 'ai' ? '🤖' : '👤';
  msgDiv.innerHTML = `<span class="avatar">${avatar}</span> <div class="msg-content">${text}</div>`;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

const videoData = [
  { title: "How UPI Scams Work in India", category: "financial", thumb: "https://images.unsplash.com/photo-1614680376593-902f74a936c7?auto=format&fit=crop&q=80&w=600", duration: "5:20" },
  { title: "OTP Fraud Explained", category: "financial", thumb: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600", duration: "4:15" },
  { title: "Deepfake Scams Targeting Indians", category: "identity", thumb: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600", duration: "7:30" },
  { title: "WhatsApp Hacking — Real Case", category: "social", thumb: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=600", duration: "6:45" },
  { title: "Dark Web and Indian Data Leaks", category: "identity", thumb: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600", duration: "8:10" },
  { title: "AIIMS Ransomware Explained", category: "ransomware", thumb: "https://images.unsplash.com/photo-1510511459019-5efa326ae50a?auto=format&fit=crop&q=80&w=600", duration: "12:05" }
];

const videoGrid = document.getElementById('video-grid');

function renderVideos(filter) {
  videoGrid.innerHTML = '';
  const filtered = filter === 'all' ? videoData : videoData.filter(v => v.category === filter);
  
  filtered.forEach(vid => {
    videoGrid.innerHTML += `
      <div class="video-card">
        <div class="vid-thumb" style="background-image: url('${vid.thumb}')">
          <span class="vid-badge">${vid.duration}</span>
        </div>
        <div class="vid-info">
          <h3>${vid.title}</h3>
          <p>Learn how this scam operates and how to spot the red flags before it's too late.</p>
          <a href="#" class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.8rem;">Watch Now</a>
        </div>
      </div>
    `;
  });
}
renderVideos('all');

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderVideos(e.target.getAttribute('data-filter'));
  });
});

const storiesData = [
  { state: "🗺️ Maharashtra", threat: "UPI Fraud", title: "The ₹34 Lakh UPI Scam That Fooled a Retired Teacher in Pune", desc: "A seemingly harmless text about a pending electricity bill turned into a nightmare for this Pune resident." },
  { state: "🗺️ Telangana", threat: "Social Media", title: "How a Hyderabad Student Lost Her Instagram to Hackers", desc: "A 'vote for my contest' DM from a friend's compromised account led to financial demands from her followers." },
  { state: "🗺️ Jharkhand", threat: "Phishing", title: "Jamtara: India's Phishing Capital", desc: "How a coordinated group of youngsters manage to siphon money by pretending to be bank executives doing KYC updates." },
  { state: "🗺️ Delhi", threat: "Marketplace Scam", title: "Fake Army Officers Scamming Delhi Families on OLX", desc: "Scammers posing as military personnel lured buyers with cheap second-hand vehicles, stealing lakhs via advance payments." },
  { state: "🗺️ Delhi", threat: "Ransomware", title: "AIIMS Ransomware Attack — What Really Happened", desc: "India's premier hospital was brought to its knees when a ransomware gang encrypted their central databases." },
  { state: "🗺️ Rajasthan", threat: "Sextortion", title: "The WhatsApp Video Call Sextortion Trap", desc: "Answering an unknown video call quickly escalated into blackmail for this businessman." }
];

const storiesFeed = document.getElementById('stories-feed');
storiesData.forEach(story => {
  storiesFeed.innerHTML += `
    <div class="story-card">
      <div class="story-tags">
        <span class="tag state">${story.state}</span>
        <span class="tag threat">⚠️ ${story.threat}</span>
      </div>
      <h3>${story.title}</h3>
      <p>${story.desc}</p>
      <a href="#" class="read-more">Read Full Story →</a>
    </div>
  `;
});

const tips = [
  { icon: "🔒", title: "Use Strong Passwords", text: "Combine letters, numbers, and symbols." },
  { icon: "📱", title: "Enable 2FA", text: "Two-factor authentication adds an extra layer of security." },
  { icon: "👀", title: "Check URLs carefully", text: "Look out for typos in website names (e.g., amozon.com)." },
  { icon: "🤫", title: "Never Share OTPs", text: "Not even if they say they are from the bank." },
  { icon: "🛑", title: "Avoid Public Wi-Fi", text: "Do not do banking on an open network." },
  { icon: "📲", title: "Update Apps", text: "Software updates patch security vulnerabilities." }
];

const tipsTrack = document.getElementById('tips-track');
const repeatedTips = [...tips, ...tips];
repeatedTips.forEach(tip => {
  tipsTrack.innerHTML += `
    <div class="tip-card">
      <div class="tip-icon">${tip.icon}</div>
      <div class="tip-text">
        <h4>${tip.title}</h4>
        <p>${tip.text}</p>
      </div>
    </div>
  `;
});
