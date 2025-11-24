// Tiny fun JS for quips, mood toggle, and fake CTA

const quips = [
  "You absolutely deserve a website this dramatic.",
  "Look at you, building things instead of just thinking about them.",
  "This layout? Cleaner than your notifications bar.",
  "You’re one semi-colon away from greatness.",
  "Somewhere, a framework is jealous this works without it.",
  "You didn’t choose the dev life. The dev life opened a tab and chose you.",
  "Somewhere in the cloud, an API is proud of you.",
  "Your code is cleaner than your search history. Respect.",
  "One more click and you’re basically a front-end sorcerer.",
  "Behold: a developer who actually *finishes* things.",
  "Your UI is smoother than the lies you tell your sleep schedule.",
  "This layout goes harder than your motivation at 2 AM.",
  "Your design sense? Criminally underrated.",
  "Congratulations. You’ve unlocked ‘responsible adult energy’… temporarily.",
  "90% vibes, 10% code — and somehow it still works.",
  "You just wrote something a hiring manager would call ‘impressive’ on LinkedIn.",
  "This page loads faster than you reply to texts.",
  "Your HTML tags line up better than your life choices.",
  "This is giving ‘I know what I’m doing’ energy — even if you don’t.",
  "Your CSS? Flawless. Your mental state? TBD.",
  "Your JavaScript is out here behaving better than half the people you know.",
  "Hot take: you’re actually good at this.",
  "Somewhere, a senior dev whispered… 'nice.'",
];

const vibes = [
  "“Trying my best (kinda)”",
  "“Main character with side quests”",
  "“Highly caffeinated, mildly prepared”",
  "“Silently judging bad kerning”",
  "“Powered by vibes and CSS variables”",
  "“Running on caffeine, confidence, and questionable decisions”",
  "“Overthinking, but in an aesthetic way”",
  "“Low chaos, high talent”",
  "“‘Just one more tweak’ at 3 AM”",
  "“A little unhinged, but fully functional”",
  "“Channeling my inner main character with CSS shadows”",
  "“Barely holding it together, but the UI looks great”",
  "“Running on pure delusion and a good gradient”",
  "“Powered by spite and good typography”",
  "“Surprisingly productive today — what’s happening?”",
  "“Brain at 2% battery, creativity at 98%”",
  "“Elegant code, feral energy”",
  "“Calm on the outside, screaming in React inside”",
  "“Living, laughing, linting”",
  "“Currently fighting for my life in VS Code”",
  "“A professional guesser disguised as a developer”",
];

const moods = ["chill", "chaotic", "productive"];

const quipBtn = document.getElementById("quipBtn");
const quipOutput = document.getElementById("quipOutput");
const vibeLabel = document.getElementById("vibeLabel");
const moodToggle = document.getElementById("moodToggle");
const fakeSubmit = document.getElementById("fakeSubmit");
const ctaMessage = document.getElementById("ctaMessage");
const emailInput = document.getElementById("email");

// Helper: random item
function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Quip button
if (quipBtn && quipOutput && vibeLabel) {
  quipBtn.addEventListener("click", () => {
    quipOutput.textContent = randomFrom(quips);
    vibeLabel.textContent = randomFrom(vibes);
  });
}

// Mood toggle cycles body[data-mood]
let moodIndex = 0;

if (moodToggle) {
  document.body.dataset.mood = moods[moodIndex];

  moodToggle.addEventListener("click", () => {
    moodIndex = (moodIndex + 1) % moods.length;
    const mood = moods[moodIndex];
    document.body.dataset.mood = mood;

    switch (mood) {
      case "chill":
        moodToggle.textContent = "Vibe: Chill";
        break;
      case "chaotic":
        moodToggle.textContent = "Vibe: Chaotic Good";
        break;
      case "productive":
        moodToggle.textContent = "Vibe: Actually Doing Things";
        break;
    }
  });
}

// Fake submit for CTA
if (fakeSubmit && ctaMessage && emailInput) {
  fakeSubmit.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (!email) {
      ctaMessage.textContent = "At least pretend and type something in. 😅";
      return;
    }

    ctaMessage.textContent = `Nice. If this were real, we’d totally spam you with useful things, ${email}.`;
  });
}