// ============================================================
// CYBERSURAKSHA - QUIZ FIX
// Replace your existing quiz JS with this complete block
// ============================================================

const quizQuestions = [
  {
    question: "आपको एक अनजान नंबर से call आती है और वो आपसे OTP मांगते हैं। आप क्या करेंगे?",
    english: "An unknown caller asks for your OTP. What do you do?",
    options: [
      "OTP दे दो, शायद जरूरी हो",
      "Call काट दो और नंबर block करो",
      "OTP का सिर्फ आधा बताओ",
      "बाद में call back करो"
    ],
    correct: 1,
    explanation: "कोई भी legitimate company या bank कभी OTP नहीं मांगती। तुरंत call काटें और नंबर block करें।"
  },
  {
    question: "आपके WhatsApp पर एक link आई है जिसमें लिखा है 'Free Jio Recharge - Click Now!'",
    english: "A WhatsApp message says 'Free Jio Recharge - Click Now!'",
    options: [
      "Link खोलो, free recharge मिलेगा",
      "दोस्तों को forward करो",
      "Link मत खोलो, यह phishing है",
      "Number save करके बाद में खोलो"
    ],
    correct: 2,
    explanation: "यह एक classic phishing scam है। Free offers के नाम पर आपकी personal info चुराई जाती है। ऐसे links कभी मत खोलो।"
  },
  {
    question: "Instagram पर एक verified जैसा account DM करता है: 'आपने lucky draw जीता! Details भेजो।'",
    english: "A 'verified-looking' Instagram account DMs: 'You won a lucky draw! Send details.'",
    options: [
      "Details भेज दो",
      "Account report करो और ignore करो",
      "थोड़ी details share करके देखो",
      "Account follow करो"
    ],
    correct: 1,
    explanation: "Fake verified accounts एक common scam है। Instagram कभी भी DM से lucky draw notify नहीं करता। Report और ignore करें।"
  },
  {
    question: "आपके phone पर एक SMS आई: 'Your SBI account will be blocked. Update KYC: [link]'",
    english: "SMS: 'Your SBI account will be blocked. Update KYC at [link]'",
    options: [
      "Link पर click करके KYC update करो",
      "SMS delete करो और bank को directly call करो",
      "Link share करो family के साथ",
      "Wait करो जब तक account block न हो"
    ],
    correct: 1,
    explanation: "Banks कभी SMS में links नहीं भेजते KYC के लिए। यह vishing/smishing attack है। सीधे bank branch जाएं।"
  },
  {
    question: "एक website पर shopping करते वक्त URL में क्या देखना जरूरी है?",
    english: "What should you check in a website URL before shopping online?",
    options: [
      "URL लंबा हो",
      "HTTPS और lock icon हो",
      "Website colorful हो",
      "बहुत सारे products हों"
    ],
    correct: 1,
    explanation: "HTTPS और lock icon मतलब connection secure है। HTTP वाली sites पर कभी payment मत करो।"
  },
  {
    question: "Cyber fraud होने पर सबसे पहले क्या करना चाहिए?",
    english: "What is the FIRST thing to do if you are a victim of cyber fraud?",
    options: [
      "Social media पर post करो",
      "1930 helpline call करो या cybercrime.gov.in पर report करो",
      "खुद से hack करने की कोशिश करो",
      "कुछ मत करो, पैसे वापस आ जाएंगे"
    ],
    correct: 1,
    explanation: "1930 National Cyber Crime Helpline है। जितनी जल्दी report करोगे, उतना chance है पैसे वापस मिलने का।"
  },
  {
    question: "Strong password कैसा होना चाहिए?",
    english: "Which is the strongest password?",
    options: [
      "password123",
      "aapkanaam1990",
      "Gy#7!mPq@2kL",
      "12345678"
    ],
    correct: 2,
    explanation: "Strong password में uppercase, lowercase, numbers, और special characters होने चाहिए। नाम या जन्म साल use मत करो।"
  },
  {
    question: "Public WiFi (जैसे railway station का) पर क्या नहीं करना चाहिए?",
    english: "What should you NEVER do on public WiFi (like at a railway station)?",
    options: [
      "News पढ़ना",
      "Net banking या UPI use करना",
      "YouTube देखना",
      "Weather check करना"
    ],
    correct: 1,
    explanation: "Public WiFi unsecured होती है। Hackers आपकी banking details चुरा सकते हैं। Net banking के लिए हमेशा mobile data use करो।"
  },
  {
    question: "Two-Factor Authentication (2FA) क्या करता है?",
    english: "What does Two-Factor Authentication (2FA) do?",
    options: [
      "Password double करता है",
      "Login के लिए दूसरी verification layer add करता है",
      "Internet speed बढ़ाता है",
      "Virus हटाता है"
    ],
    correct: 1,
    explanation: "2FA मतलब password के साथ OTP या authenticator app भी चाहिए। यह account हacking से बचाता है।"
  },
  {
    question: "आपके दोस्त का WhatsApp account hack हो गया और वो पैसे मांग रहा है। क्या करोगे?",
    english: "Your friend's WhatsApp is hacked and 'they' are asking for money. What do you do?",
    options: [
      "तुरंत पैसे भेज दो",
      "पहले directly call करके confirm करो",
      "बिना सोचे UPI transfer करो",
      "Screenshot लेकर forward करो"
    ],
    correct: 1,
    explanation: "Hacked accounts से paise maangna common scam है। हमेशा directly call करके confirm करो। पैसे कभी तुरंत मत भेजो।"
  }
];

// ============================================================
// QUIZ ENGINE - Paste this where your quiz JS goes
// ============================================================

let currentQuestion = 0;
let score = 0;
let answered = false;

function initQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;
  renderQuestion();
}

function renderQuestion() {
  const q = quizQuestions[currentQuestion];
  const container = document.getElementById('quiz-container');
  if (!container) return;

  container.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${(currentQuestion / quizQuestions.length) * 100}%"></div>
      </div>
      <p class="quiz-counter">Question ${currentQuestion + 1} of ${quizQuestions.length} &nbsp;|&nbsp; Score: ${score}</p>
    </div>

    <div class="quiz-question-card">
      <p class="quiz-hindi">${q.question}</p>
      <p class="quiz-english">${q.english}</p>
      <div class="quiz-options" id="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" onclick="selectAnswer(${i})" id="opt-${i}">
            <span class="opt-label">${String.fromCharCode(65 + i)}</span>
            ${opt}
          </button>
        `).join('')}
      </div>
      <div class="quiz-explanation" id="quiz-explanation" style="display:none"></div>
      <button class="quiz-next-btn" id="quiz-next-btn" onclick="nextQuestion()" style="display:none">
        ${currentQuestion < quizQuestions.length - 1 ? 'Agla Sawaal →' : 'Result Dekho 🏆'}
      </button>
    </div>
  `;
  answered = false;
}

function selectAnswer(selectedIdx) {
  if (answered) return;
  answered = true;

  const q = quizQuestions[currentQuestion];
  const correct = q.correct;

  document.querySelectorAll('.quiz-option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('quiz-correct');
    else if (i === selectedIdx && selectedIdx !== correct) btn.classList.add('quiz-wrong');
  });

  if (selectedIdx === correct) score++;

  const expDiv = document.getElementById('quiz-explanation');
  expDiv.style.display = 'block';
  expDiv.innerHTML = `
    <span class="exp-icon">${selectedIdx === correct ? '✅' : '❌'}</span>
    <span>${q.explanation}</span>
  `;

  document.getElementById('quiz-next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= quizQuestions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

function showResult() {
  const container = document.getElementById('quiz-container');
  const percent = Math.round((score / quizQuestions.length) * 100);
  let badge, msg;

  if (percent >= 90) { badge = '🛡️ Cyber Guardian'; msg = 'Waah! Aap ek sachche Digital Warrior hain!'; }
  else if (percent >= 70) { badge = '🔐 Cyber Aware'; msg = 'Acha score! Thodi aur practice karo.'; }
  else if (percent >= 50) { badge = '⚠️ Learning Phase'; msg = 'Theek hai, lekin aur seekhne ki zaroorat hai.'; }
  else { badge = '🚨 At Risk'; msg = 'Kripya hamare videos aur stories padho - aap vulnerable hain!'; }

  container.innerHTML = `
    <div class="quiz-result-card">
      <div class="quiz-result-badge">${badge}</div>
      <div class="quiz-result-score">${score}/${quizQuestions.length}</div>
      <div class="quiz-result-percent">${percent}%</div>
      <p class="quiz-result-msg">${msg}</p>
      <button class="quiz-retry-btn" onclick="initQuiz()">Dobara Khelo 🔄</button>
    </div>
  `;
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initQuiz);
