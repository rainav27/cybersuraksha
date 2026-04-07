const cyberAlertsFallback = [
  {
    label: 'Alert',
    text: 'If money was lost in India, call 1930 and report at cybercrime.gov.in immediately.',
  },
  {
    label: 'Warning',
    text: 'Never share your OTP, PIN, CVV, or screen-sharing access with anyone.',
  },
  {
    label: 'UPI Safety',
    text: 'Verify the receiver name and UPI ID before approving a payment.',
  },
  {
    label: 'Phishing',
    text: 'Do not open unknown links asking for KYC, rewards, refunds, or account verification.',
  },
];

const quizQuestions = [
  {
    question: 'A caller says your bank KYC will expire today and asks for your OTP. What should you do?',
    options: ['Share OTP to avoid account blocking', 'Disconnect and contact the bank through official channels', 'Ask the caller to call later', 'Send only the last two digits'],
    answer: 1,
    explanation: 'Banks and officials do not need your OTP. Use only official numbers or apps.',
  },
  {
    question: 'A UPI collect request appears after someone says they are sending you money. What is safest?',
    options: ['Approve it quickly', 'Enter your PIN to receive money', 'Decline it unless you initiated the payment', 'Forward it to friends'],
    answer: 2,
    explanation: 'Entering a UPI PIN authorizes money to leave your account, not come in.',
  },
  {
    question: 'Which password is strongest?',
    options: ['Cyber@123', 'Your name plus birth year', 'A long unique passphrase with symbols', 'The same password used everywhere'],
    answer: 2,
    explanation: 'Long, unique passwords or passphrases are harder to guess and safer after breaches.',
  },
  {
    question: 'What should you do before clicking a link in a prize or refund message?',
    options: ['Check the sender and domain carefully', 'Click first and decide later', 'Forward it to groups', 'Enter minimal details only'],
    answer: 0,
    explanation: 'Phishing often uses fake domains and urgency. Verify before clicking.',
  },
  {
    question: 'Your social media account is hacked. What is the first practical step?',
    options: ['Ignore it for a day', 'Pay the attacker', 'Use account recovery and change passwords', 'Create a public argument'],
    answer: 2,
    explanation: 'Start recovery, secure email, change passwords, and enable two-factor authentication.',
  },
  {
    question: 'What does two-factor authentication add?',
    options: ['A second proof beyond password', 'A way to share passwords', 'A faster login only', 'A public recovery code'],
    answer: 0,
    explanation: 'Two-factor authentication helps protect accounts even if a password leaks.',
  },
  {
    question: 'A remote support agent asks you to install a screen-sharing app for a refund. What should you do?',
    options: ['Install it and share the code', 'Stop and verify through the company website or app', 'Share only your bank balance screen', 'Keep the call muted'],
    answer: 1,
    explanation: 'Screen-sharing scams can expose OTPs, banking apps, and private data.',
  },
  {
    question: 'Which is a safe response after accidentally sharing OTP or banking details?',
    options: ['Wait to see if anything happens', 'Immediately contact the bank and report at 1930 if money is lost', 'Delete the message only', 'Change your phone wallpaper'],
    answer: 1,
    explanation: 'Fast reporting improves the chance of blocking or tracing fraudulent transfers.',
  },
  {
    question: 'Why should apps be updated regularly?',
    options: ['Only to change icons', 'To get security fixes and bug patches', 'To make phones slower', 'Updates do not matter'],
    answer: 1,
    explanation: 'Updates often close security holes attackers can exploit.',
  },
  {
    question: 'Which information should never be shared on a suspicious call?',
    options: ['OTP, PIN, CVV, passwords, and screen-sharing codes', 'Your favorite color', 'A public website URL', 'General safety advice'],
    answer: 0,
    explanation: 'These secrets can directly enable account takeover or financial fraud.',
  },
];

const responseGuides = {
  kyc: {
    title: 'Fake KYC call response',
    steps: [
      'Disconnect the call immediately. Do not argue or continue verification.',
      'Do not share OTP, card details, PIN, Aadhaar details, or screen-sharing codes.',
      'Open the official bank app or website yourself and check whether any KYC alert exists.',
      'If money was debited, call 1930 and report at cybercrime.gov.in as soon as possible.',
    ],
  },
  insta: {
    title: 'Hacked Instagram account response',
    steps: [
      'Use the official account recovery flow from the Instagram app or website.',
      'Change the password for the linked email account first, then the social account.',
      'Revoke unknown sessions and connected apps, then enable two-factor authentication.',
      'Warn friends not to send money or click links from the compromised account.',
    ],
  },
  upi: {
    title: 'Suspicious UPI request response',
    steps: [
      'Decline collect requests you did not initiate. Receiving money never requires your UPI PIN.',
      'Check the receiver name before every payment approval.',
      'Block and report the suspicious account in your UPI app if the option is available.',
      'If money was transferred, call 1930 quickly and keep transaction IDs ready.',
    ],
  },
  otp: {
    title: 'OTP shared accidentally response',
    steps: [
      'End the interaction and do not share any additional OTPs or personal details.',
      'Change the password or PIN for the affected account immediately.',
      'Log out of all sessions where the service allows it, then enable two-factor authentication.',
      'Contact the bank/platform support and report financial loss through 1930 and cybercrime.gov.in.',
    ],
  },
  link: {
    title: 'Clicked phishing link response',
    steps: [
      'Close the page. Do not submit forms, install apps, or grant permissions.',
      'If credentials were entered, change that password from the official site immediately.',
      'Run a device security scan and remove unfamiliar apps or browser extensions.',
      'Monitor accounts for unusual activity and report financial loss quickly.',
    ],
  },
};

const learningCards = [
  {
    category: 'financial',
    title: 'UPI collect request scam',
    duration: '4 min',
    description: 'Learn why receiving money does not require entering your UPI PIN.',
  },
  {
    category: 'financial',
    title: 'Fake refund and customer-care calls',
    duration: '5 min',
    description: 'Spot callers who pressure you into installing apps or sharing OTPs.',
  },
  {
    category: 'social',
    title: 'Social account takeover',
    duration: '6 min',
    description: 'Secure email, sessions, recovery options, and two-factor authentication.',
  },
  {
    category: 'identity',
    title: 'Identity theft basics',
    duration: '5 min',
    description: 'Protect personal documents and reduce exposure of sensitive IDs.',
  },
  {
    category: 'phishing',
    title: 'How phishing pages trick users',
    duration: '3 min',
    description: 'Check domain names, urgency cues, attachments, and short links.',
  },
  {
    category: 'ransomware',
    title: 'Ransomware prevention for families',
    duration: '4 min',
    description: 'Use backups, updates, least privilege, and attachment discipline.',
  },
];

const storyCards = [
  {
    state: 'Maharashtra',
    threat: 'Investment fraud',
    title: 'The too-good-to-be-true trading group',
    summary: 'A victim joined a messaging group promising guaranteed daily returns. The lesson: verify licenses and never trust pressure-driven investment links.',
  },
  {
    state: 'Delhi',
    threat: 'KYC phishing',
    title: 'The urgent account-blocking call',
    summary: 'A caller created panic about account closure and asked for OTP. The lesson: banks do not ask for OTPs on calls.',
  },
  {
    state: 'Karnataka',
    threat: 'UPI collect scam',
    title: 'The fake marketplace buyer',
    summary: 'A buyer sent a collect request instead of paying. The lesson: entering a PIN sends money out of your account.',
  },
];

const safetyTips = [
  { title: 'Pause', text: 'Scammers use urgency. Slow down before acting.' },
  { title: 'Verify', text: 'Use official apps, websites, and helpline numbers.' },
  { title: 'Protect', text: 'Keep OTPs, PINs, CVVs, and passwords private.' },
  { title: 'Report', text: 'For financial cyber fraud in India, call 1930 quickly.' },
  { title: 'Update', text: 'Install security updates for devices and apps.' },
];

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let quizIndex = 0;
let quizScore = 0;
let quizLocked = false;

const getElement = (id) => document.getElementById(id);

const makeElement = (tagName, options = {}) => {
  const element = document.createElement(tagName);

  if (options.className) {
    element.className = options.className;
  }

  if (options.text) {
    element.textContent = options.text;
  }

  if (options.attributes) {
    Object.entries(options.attributes).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });
  }

  return element;
};

const parseTickerItems = (ticker) => {
  if (!ticker || !ticker.dataset.tickerItems) {
    return cyberAlertsFallback;
  }

  try {
    const parsed = JSON.parse(ticker.dataset.tickerItems);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : cyberAlertsFallback;
  } catch (error) {
    console.warn('Ticker data was invalid. Falling back to built-in alerts.', error);
    return cyberAlertsFallback;
  }
};

const renderTicker = () => {
  const ticker = getElement('ticker');
  if (!ticker) {
    return;
  }

  const tickerItems = [...parseTickerItems(ticker), ...parseTickerItems(ticker)];
  const fragment = document.createDocumentFragment();

  tickerItems.forEach((item) => {
    const tickerItem = makeElement('span', {
      className: 'ticker__item',
      text: `${item.label}: ${item.text}`,
    });
    fragment.appendChild(tickerItem);
  });

  ticker.replaceChildren(fragment);
};

const updateQuizProgress = () => {
  const progress = getElement('quiz-progress');
  if (!progress) {
    return;
  }

  const percentage = Math.round((quizIndex / quizQuestions.length) * 100);
  progress.style.width = `${percentage}%`;
  progress.setAttribute('aria-valuenow', String(percentage));
};

const showQuizResult = () => {
  const quizContent = getElement('quiz-content');
  const result = getElement('quiz-result');
  const progress = getElement('quiz-progress');

  if (!quizContent || !result || !progress) {
    return;
  }

  const percentage = Math.round((quizScore / quizQuestions.length) * 100);
  const advice = percentage >= 80
    ? 'Strong cyber hygiene. Keep practicing and help others learn.'
    : percentage >= 50
      ? 'Good start. Review the missed topics and strengthen daily habits.'
      : 'High risk. Start with OTP safety, UPI safety, and account recovery basics.';

  const title = makeElement('h3', { text: 'Quiz complete' });
  const badge = makeElement('div', {
    className: 'score-badge',
    text: `${quizScore}/${quizQuestions.length} (${percentage}%)`,
  });
  const message = makeElement('p', { text: advice });
  const restartButton = makeElement('button', {
    className: 'btn btn-primary',
    text: 'Retake quiz',
    attributes: { type: 'button' },
  });

  restartButton.addEventListener('click', () => {
    quizIndex = 0;
    quizScore = 0;
    quizLocked = false;
    result.classList.add('hidden');
    quizContent.classList.remove('hidden');
    renderQuizQuestion();
  });

  quizContent.classList.add('hidden');
  result.replaceChildren(title, badge, message, restartButton);
  result.classList.remove('hidden');
  progress.style.width = '100%';
  progress.setAttribute('aria-valuenow', '100');
};

const renderQuizQuestion = () => {
  const questionNumber = getElement('q-num');
  const questionText = getElement('question-text');
  const optionsContainer = getElement('options-container');
  const feedback = getElement('feedback');

  if (!questionNumber || !questionText || !optionsContainer || !feedback) {
    return;
  }

  if (quizIndex >= quizQuestions.length) {
    showQuizResult();
    return;
  }

  const activeQuestion = quizQuestions[quizIndex];
  questionNumber.textContent = String(quizIndex + 1);
  questionText.textContent = activeQuestion.question;
  feedback.textContent = '';
  feedback.className = 'feedback hidden';
  quizLocked = false;
  updateQuizProgress();

  const fragment = document.createDocumentFragment();
  activeQuestion.options.forEach((option, optionIndex) => {
    const button = makeElement('button', {
      className: 'option-btn',
      text: option,
      attributes: { type: 'button' },
    });

    button.addEventListener('click', () => handleQuizAnswer(optionIndex));
    fragment.appendChild(button);
  });

  optionsContainer.replaceChildren(fragment);
};

const handleQuizAnswer = (selectedIndex) => {
  if (quizLocked) {
    return;
  }

  const activeQuestion = quizQuestions[quizIndex];
  const feedback = getElement('feedback');
  const buttons = document.querySelectorAll('.option-btn');
  const isCorrect = selectedIndex === activeQuestion.answer;
  quizLocked = true;

  if (isCorrect) {
    quizScore += 1;
  }

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === activeQuestion.answer) {
      button.classList.add('correct');
    }
    if (index === selectedIndex && !isCorrect) {
      button.classList.add('wrong');
    }
  });

  if (feedback) {
    feedback.textContent = `${isCorrect ? 'Correct.' : 'Not quite.'} ${activeQuestion.explanation}`;
    feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
  }

  window.setTimeout(() => {
    quizIndex += 1;
    renderQuizQuestion();
  }, reducedMotion ? 300 : 1400);
};

const addChatMessage = (message, type) => {
  const chatMessages = getElement('chat-messages');
  if (!chatMessages) {
    return;
  }

  const wrapper = makeElement('div', { className: `msg ${type}-msg` });
  const avatar = makeElement('span', {
    className: 'avatar',
    text: type === 'ai' ? 'CS' : 'You',
    attributes: { 'aria-hidden': 'true' },
  });
  const content = makeElement('div', { className: 'msg-content', text: message });

  wrapper.append(avatar, content);
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

const setTypingIndicator = (isVisible) => {
  const typingIndicator = getElement('typing-indicator');
  if (!typingIndicator) {
    return;
  }

  typingIndicator.classList.toggle('hidden', !isVisible);
};

const setupScenarioButtons = () => {
  const buttons = document.querySelectorAll('.scenario-btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const scenario = button.dataset.scenario;
      const guide = responseGuides[scenario];
      if (!guide) {
        return;
      }

      buttons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      addChatMessage(button.textContent.trim(), 'user');
      setTypingIndicator(true);

      window.setTimeout(() => {
        setTypingIndicator(false);
        addChatMessage(`${guide.title}: ${guide.steps.join(' ')}`, 'ai');
      }, reducedMotion ? 250 : 700);
    });
  });
};

const renderLearningCards = (filter = 'all') => {
  const videoGrid = getElement('video-grid');
  if (!videoGrid) {
    return;
  }

  const cards = filter === 'all'
    ? learningCards
    : learningCards.filter((card) => card.category === filter);

  const fragment = document.createDocumentFragment();
  cards.forEach((card) => {
    const article = makeElement('article', { className: 'video-card' });
    const thumb = makeElement('div', {
      className: `vid-thumb vid-thumb-${card.category}`,
      attributes: { 'aria-hidden': 'true' },
    });
    const badge = makeElement('span', { className: 'vid-badge', text: card.duration });
    const info = makeElement('div', { className: 'vid-info' });
    const title = makeElement('h3', { text: card.title });
    const description = makeElement('p', { text: card.description });
    const category = makeElement('span', { className: 'tag threat', text: card.category });

    thumb.appendChild(badge);
    info.append(title, description, category);
    article.append(thumb, info);
    fragment.appendChild(article);
  });

  videoGrid.replaceChildren(fragment);
};

const setupFilters = () => {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      renderLearningCards(button.dataset.filter || 'all');
    });
  });
};

const renderStories = () => {
  const storyFeed = getElement('stories-feed');
  if (!storyFeed) {
    return;
  }

  const fragment = document.createDocumentFragment();
  storyCards.forEach((story) => {
    const article = makeElement('article', { className: 'story-card', attributes: { role: 'article' } });
    const tags = makeElement('div', { className: 'story-tags' });
    const state = makeElement('span', { className: 'tag state', text: story.state });
    const threat = makeElement('span', { className: 'tag threat', text: story.threat });
    const title = makeElement('h3', { text: story.title });
    const summary = makeElement('p', { text: story.summary });
    const action = makeElement('a', {
      className: 'read-more',
      text: 'Review response steps',
      attributes: { href: '#help' },
    });

    tags.append(state, threat);
    article.append(tags, title, summary, action);
    fragment.appendChild(article);
  });

  storyFeed.replaceChildren(fragment);
};

const renderTips = () => {
  const tipsTrack = getElement('tips-track');
  if (!tipsTrack) {
    return;
  }

  const fragment = document.createDocumentFragment();
  [...safetyTips, ...safetyTips].forEach((tip) => {
    const card = makeElement('article', { className: 'tip-card' });
    const icon = makeElement('span', { className: 'tip-icon', text: '!' });
    const text = makeElement('div', { className: 'tip-text' });
    const title = makeElement('h4', { text: tip.title });
    const body = makeElement('p', { text: tip.text });

    text.append(title, body);
    card.append(icon, text);
    fragment.appendChild(card);
  });

  tipsTrack.replaceChildren(fragment);
};

const setupMobileMenu = () => {
  const toggle = getElement('mobile-menu');
  const navLinks = getElement('nav-links');
  if (!toggle || !navLinks) {
    return;
  }

  const setMenuOpen = (isOpen) => {
    navLinks.classList.toggle('open', isOpen);
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  };

  toggle.addEventListener('click', () => {
    setMenuOpen(!navLinks.classList.contains('open'));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
};

const setupMatrixCanvas = () => {
  const canvas = getElement('matrixCanvas');
  if (!canvas || reducedMotion) {
    return;
  }

  const context = canvas.getContext('2d');
  if (!context) {
    return;
  }

  const glyphs = '01CYBERSURAKSHA';
  const fontSize = 16;
  let columns = 0;
  let drops = [];

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array.from({ length: columns }, () => 1);
  };

  const draw = () => {
    context.fillStyle = 'rgba(10, 10, 15, 0.08)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#00ff88';
    context.font = `${fontSize}px monospace`;

    drops.forEach((drop, index) => {
      const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
      context.fillText(glyph, index * fontSize, drop * fontSize);

      if (drop * fontSize > canvas.height && Math.random() > 0.975) {
        drops[index] = 0;
      }

      drops[index] += 1;
    });

    window.requestAnimationFrame(draw);
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  window.requestAnimationFrame(draw);
};

const init = () => {
  renderTicker();
  renderQuizQuestion();
  setupScenarioButtons();
  renderLearningCards();
  setupFilters();
  renderStories();
  renderTips();
  setupMobileMenu();
  setupMatrixCanvas();
};

document.addEventListener('DOMContentLoaded', init);
