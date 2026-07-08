// Tiny dynamic JS for the Psychometric Quiz Engine, mood toggle, and fake CTA

const questionBank = [
  {
    text: "When your code inevitably breaks in production, what is your immediate coping mechanism?",
    options: [
      {
        text: "Gaslight your coworkers, blame a random dependency, and open a Jira ticket for someone else.",
        score: "J",
      },
      {
        text: "Close your laptop, ignore your phone, and pretend you don't belong to tech until Tuesday.",
        score: "P",
      },
    ],
  },
  {
    text: "Your absolute worst personality flaw in a group project is:",
    options: [
      {
        text: "Being an insufferable control freak who does everything poorly just to say you did it.",
        score: "I",
      },
      {
        text: "Doing absolutely zero work but loudly taking credit for the 'global vision.'",
        score: "E",
      },
    ],
  },
  {
    text: "When someone offers you genuine, constructive feedback, you secretly:",
    options: [
      {
        text: "Analyze their life choices to find a hidden flaw you can use to dismantle them later.",
        score: "T",
      },
      {
        text: "Go cry in a bathroom stall and convince yourself they are actively trying to ruin your life.",
        score: "F",
      },
    ],
  },
  {
    text: "How do you navigate through a massive, disorganized codebase?",
    options: [
      {
        text: "Memorize arbitrary patterns like a trained animal, understanding none of the architecture.",
        score: "S",
      },
      {
        text: "Guess wildly, change random lines of code, and pray the compiler takes pity on you.",
        score: "N",
      },
    ],
  },
  {
    text: "Your friend tells you about an incredibly tragic event in their life. You immediately:",
    options: [
      {
        text: "Offer an unsolicited, robotic 3-step solution that completely ignores their feelings.",
        score: "T",
      },
      {
        text: "Somehow derail the conversation to make it entirely about your own minor inconveniences.",
        score: "F",
      },
    ],
  },
  {
    text: "You are forced to attend a networking event. Your strategy is to:",
    options: [
      {
        text: "Stand awkwardly by the snack table looking at your phone until a socially acceptable departure time.",
        score: "I",
      },
      {
        text: "Trap an innocent stranger in a 45-minute monologue about your hyper-fixations.",
        score: "E",
      },
    ],
  },
  {
    text: "When planning a trip, your itinerary looks like:",
    options: [
      {
        text: "A color-coded, minute-by-minute Excel sheet that leaves absolutely zero room for joy.",
        score: "J",
      },
      {
        text: "Booking a one-way ticket with no hotel reservation and praying the universe figures it out.",
        score: "P",
      },
    ],
  },
  {
    text: "How do you handle your unread email notifications?",
    options: [
      {
        text: "You have exactly 0 unread messages, but your mental state is held together by scotch tape.",
        score: "S",
      },
      {
        text: "You have 4,821 unread messages and you treat them like a digital graveyard.",
        score: "N",
      },
    ],
  },
];

const typeRoasts = {
  INFP: "The Victim Complex. You are fundamentally unequipped for reality. You spend your entire life romanticizing your own mediocrity and waiting for a movie montage that will never happen to save you from your own lack of discipline.",
  INTJ: "The Defective Robot. You have a massive god complex for someone who panics when ordering food over the phone. You hide your lack of basic social skills behind a counterfeit label of 'intellectual superiority.' Nobody thinks you're a mastermind; they just think you're annoying.",
  ESTP: "The Shallow Escalator. You are a walking loud noise with the attention span of a fruit fly. You possess zero internal depth, meaning the second you are left alone with your own thoughts, you experience total existential horror. Please find a personality.",
  ENFJ: "The Aggressive Manipulator. You smother people with toxic positivity because you are utterly terrified of facing the absolute trainwreck of your own private life. You control others because you have zero control over yourself.",
  ISTJ: "The Dynamic Void. You find genuine comfort in bureaucracy because it shields you from having to possess a single original thought. Your obituary will look like a software terms and conditions page.",
  ENTP: "The Human Contrarian. You don't have opinions; you just have a desperate, pathetic need for attention. You will literally argue against human rights in a meeting just to hear your own voice. You aren't playing devil's advocate; you're just exhausting.",
  INTP: "The Incapable Theorist. A spectacular waste of baseline potential. You will spend four months researching the optimal layout for a project you will abandon after two hours. You talk like an expert but execute like a distracted toddler.",
  ENFP: "The Scattered Tragedy. A chaotic hurricane of unearned confidence and half-finished ideas. You abandon people, projects, and hobbies the second they require an ounce of real effort, wrapping your absolute flakey nature in a bow and calling it a 'vibe.'",
  DEFAULT:
    "The Total System Failure. Your metrics are so completely broken that psychologists don't even have a name for you. You're just a localized mistake.",
};

const moods = ["mild", "savage", "nuclear"];

// DOM Target Handlers
const quipBtn = document.getElementById("quipBtn");
const quipOutput = document.getElementById("quipOutput");
const vibeLabel = document.getElementById("vibeLabel");
const moodToggle = document.getElementById("moodToggle");
const fakeSubmit = document.getElementById("fakeSubmit");
const ctaMessage = document.getElementById("ctaMessage");
const emailInput = document.getElementById("email");

// Game Engine Local Variables
let activeQuestions = [];
let currentQuestionIndex = 0;
let userProfile = { E_I: "", S_N: "", T_F: "", J_P: "" };

function startQuiz() {
  // Shuffle pool array and grab exactly 4 random items for this run
  activeQuestions = [...questionBank]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  currentQuestionIndex = 0;
  userProfile = { E_I: "", S_N: "", T_F: "", J_P: "" };
  if (quipBtn) quipBtn.style.display = "none";
  renderQuestion();
}

function renderQuestion() {
  if (currentQuestionIndex < activeQuestions.length) {
    const q = activeQuestions[currentQuestionIndex];
    quipOutput.innerHTML = `<strong class="quiz-step-label">Audit Phase ${currentQuestionIndex + 1}/4:</strong><span class="quiz-question-text">${q.text}</span>`;

    vibeLabel.innerHTML = `
      <div class="quiz-options-wrapper" style="display: flex; flex-direction: column; gap: 0.65rem; margin-top: 0.85rem;">
        <button class="quiz-opt-btn option-click" data-score="${q.options[0].score}">A) ${q.options[0].text}</button>
        <button class="quiz-opt-btn option-click" data-score="${q.options[1].score}">B) ${q.options[1].text}</button>
      </div>
    `;

    document.querySelectorAll(".option-click").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const choice = e.currentTarget.dataset.score;
        assignScore(choice);
        currentQuestionIndex++;
        renderQuestion();
      });
    });
  } else {
    evaluateResults();
  }
}

function assignScore(letter) {
  if (letter === "E" || letter === "I") userProfile.E_I = letter;
  if (letter === "S" || letter === "N") userProfile.S_N = letter;
  if (letter === "T" || letter === "F") userProfile.T_F = letter;
  if (letter === "J" || letter === "P") userProfile.J_P = letter;
}

function evaluateResults() {
  const finalType = `${userProfile.E_I}${userProfile.S_N}${userProfile.T_F}${userProfile.J_P}`;
  const roast = typeRoasts[finalType] || typeRoasts["DEFAULT"];

  quipOutput.innerHTML = `<strong class="quiz-step-label">Your Chaos Identity:</strong> <span class="identity-type-highlight">${finalType}</span>`;
  vibeLabel.innerHTML = `“${roast}”`;

  if (quipBtn) {
    quipBtn.style.display = "inline-flex";
    quipBtn.textContent = "Re-Audit Your Identity";
  }
}

if (quipBtn) quipBtn.addEventListener("click", startQuiz);

// Mood level attributes wrapper logic toggles body[data-mood]
let moodIndex = 0;

if (moodToggle) {
  document.body.dataset.mood = moods[moodIndex];

  moodToggle.addEventListener("click", () => {
    moodIndex = (moodIndex + 1) % moods.length;
    const mood = moods[moodIndex];
    document.body.dataset.mood = mood;

    switch (mood) {
      case "mild":
        moodToggle.textContent = "Burn Level: Mild";
        break;
      case "savage":
        moodToggle.textContent = "Burn Level: Savage";
        break;
      case "nuclear":
        moodToggle.textContent = "Burn Level: Nuclear";
        break;
    }
  });
}

// Fake submit for CTA
if (fakeSubmit && ctaMessage && emailInput) {
  fakeSubmit.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (!email) {
      ctaMessage.textContent =
        "Type in an email first if you want the smoke. 😅";
      return;
    }

    ctaMessage.textContent = `Nice try. If this form worked, we'd sign you up for spam alerts, ${email}.`;
  });
}
