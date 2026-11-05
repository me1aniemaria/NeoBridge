// ================== NeoBridge settings ==================
// This is the ONLY file you normally need to edit.

window.NB_CONFIG = {
  // 1) CLOUD SYNC (optional)
  // Leave as null = "Demo mode": data stays inside one browser.
  //   (Tip: open the app in two tabs, one as Parent and one as ASHA,
  //    and alerts still appear live between the tabs.)
  // To sync between DIFFERENT phones, create a free Firebase project
  // (see README.md, "Turn on cloud sync") and paste its config here, e.g.
  // firebase: {
  //   apiKey: "AIza....",
  //   authDomain: "neobridge-xxxx.firebaseapp.com",
  //   projectId: "neobridge-xxxx",
  //   storageBucket: "neobridge-xxxx.appspot.com",
  //   messagingSenderId: "1234567890",
  //   appId: "1:1234567890:web:abcdef"
  // },
  firebase: null,

  // 2) AI (optional): Gemini API key from https://aistudio.google.com
  // When set, the mother can first describe the baby in her own words
  // and the AI pre-fills the answers. The AI NEVER decides the colour:
  // the fixed rules in rules.js do that.
  // Demo use only: a key placed here is visible to anyone who opens the app.
  geminiApiKey: "",
  geminiModel: "gemini-2.5-flash",   // check ai.google.dev if this name stops working

  // 3) Other settings
  emergencyNumber: "108",
  countryCode: "91",          // used for WhatsApp links
  kmcTargetHours: 12         // daily skin-to-skin goal shown to parents
};
