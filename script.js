const quizQuestions = [
  {
    question: "What is the safest action when receiving an unexpected email attachment?",
    options: [
      "Open it quickly to verify content",
      "Scan it and confirm sender authenticity first",
      "Forward it to all team members",
      "Reply with your password for verification",
    ],
    answer: 1,
  },
  {
    question: "Which password practice is most secure?",
    options: [
      "Using the same password for all accounts",
      "Using your birth date with your name",
      "Using unique, long passwords with a manager",
      "Writing passwords in public notes",
    ],
    answer: 2,
  },
  {
    question: "What does MFA (multi-factor authentication) provide?",
    options: [
      "Faster internet speed",
      "An extra security layer beyond password",
      "Automatic antivirus removal",
      "A guarantee against all cyber attacks",
    ],
    answer: 1,
  },
  {
    question: "If you suspect ransomware activity, what should you do first?",
    options: [
      "Ignore and continue work",
      "Disconnect from network and report immediately",
      "Pay the ransom instantly",
      "Delete all files manually",
    ],
    answer: 1,
  },
];

const API_BASE = "http://localhost:4000/api";
const quizContainer = document.getElementById("quiz-container");
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const locateBtn = document.getElementById("locate-btn");
const locationResult = document.getElementById("location-result");
const stationsList = document.getElementById("stations-list");
const refreshNewsBtn = document.getElementById("refresh-news-btn");
const newsList = document.getElementById("news-list");
const newsStatus = document.getElementById("news-status");

function initQuiz() {
  let score = 0;
  quizQuestions.forEach((q, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "quiz-question";
    wrapper.innerHTML = `<strong>Q${index + 1}. ${q.question}</strong>`;

    const options = document.createElement("div");
    options.className = "quiz-options";

    q.options.forEach((option, optIndex) => {
      const item = document.createElement("button");
      item.className = "quiz-option";
      item.textContent = option;
      item.addEventListener("click", () => {
        if (wrapper.dataset.answered === "true") {
          return;
        }

        wrapper.dataset.answered = "true";
        if (optIndex === q.answer) {
          item.classList.add("correct");
          score += 1;
        } else {
          item.classList.add("wrong");
          const correct = options.children[q.answer];
          correct.classList.add("correct");
        }

        scoreBoard.textContent = `Score: ${score}/${quizQuestions.length}`;
      });
      options.appendChild(item);
    });

    wrapper.appendChild(options);
    quizContainer.appendChild(wrapper);
  });

  const scoreBoard = document.createElement("p");
  scoreBoard.className = "result";
  scoreBoard.textContent = `Score: 0/${quizQuestions.length}`;
  quizContainer.appendChild(scoreBoard);
}

function addMessage(role, text) {
  const msg = document.createElement("div");
  msg.className = `chat-msg ${role}`;
  msg.innerHTML = `<strong>${role === "user" ? "You" : "AI"}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function askAssistant() {
  const question = chatInput.value.trim();

  if (!question) {
    return;
  }

  addMessage("user", question);
  chatInput.value = "";
  addMessage("assistant", "Analyzing your cyber issue...");

  try {
    const res = await fetch(`${API_BASE}/assistant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
      }),
    });

    if (!res.ok) {
      throw new Error("AI request failed. Please try again.");
    }

    const data = await res.json();
    const answer = data?.answer || "I could not generate a response right now.";

    chatBox.removeChild(chatBox.lastElementChild);
    addMessage("assistant", answer);
  } catch (error) {
    chatBox.removeChild(chatBox.lastElementChild);
    addMessage("assistant", error.message);
  }
}

function setupGeoLookup() {
  locateBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      locationResult.textContent =
        "Geolocation is not available in your browser.";
      return;
    }

    locationResult.textContent = "Fetching your location...";
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://www.google.com/maps/search/cyber+police+station/@${latitude},${longitude},13z`;
        locationResult.innerHTML =
          'Location detected. <a target="_blank" rel="noreferrer">Open nearest cyber police stations in Google Maps</a>';
        locationResult.querySelector("a").href = mapsUrl;

        stationsList.innerHTML = "";
        try {
          const response = await fetch(
            `${API_BASE}/stations?lat=${latitude}&lon=${longitude}`
          );
          if (!response.ok) {
            throw new Error("Could not load nearby stations");
          }

          const data = await response.json();
          if (!data.stations.length) {
            stationsList.innerHTML =
              '<div class="news-item">No nearby police records found from map data.</div>';
            return;
          }

          data.stations.forEach((station, idx) => {
            const card = document.createElement("div");
            card.className = "news-item";
            card.innerHTML = `
              <strong>${idx + 1}. ${station.name}</strong>
              <div class="news-source">${station.distanceKm} km away</div>
              <a href="${station.mapUrl}" target="_blank" rel="noreferrer">Open in maps</a>
            `;
            stationsList.appendChild(card);
          });
        } catch (error) {
          stationsList.innerHTML = `<div class="news-item">${error.message}</div>`;
        }
      }, () => {
        locationResult.textContent =
          "Unable to fetch location. Please allow location access and retry.";
      });
  });
}

async function loadNews() {
  newsStatus.textContent = "Loading cybersecurity headlines...";
  newsList.innerHTML = "";

  try {
    const res = await fetch(`${API_BASE}/news`);
    if (!res.ok) {
      throw new Error("Failed to load latest cybersecurity news");
    }
    const data = await res.json();
    (data.articles || []).forEach((article) => {
        const card = document.createElement("div");
        card.className = "news-item";
        card.innerHTML = `
          <a href="${article.link}" target="_blank" rel="noreferrer">${article.title}</a>
          <div class="news-source">${article.source} - ${new Date(article.date).toLocaleString()}</div>
        `;
        newsList.appendChild(card);
      });

    if (!newsList.children.length) {
      newsStatus.textContent =
        "No cybersecurity-specific headlines found right now. Try refreshing.";
    } else {
      newsStatus.textContent = "Latest headlines loaded.";
    }
  } catch (error) {
    newsStatus.textContent = `News loading failed: ${error.message}`;
  }
}

sendBtn.addEventListener("click", askAssistant);
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    askAssistant();
  }
});
refreshNewsBtn.addEventListener("click", loadNews);

initQuiz();
setupGeoLookup();
loadNews();
