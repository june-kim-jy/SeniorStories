const topics = [
  {
    id: "20s",
    label: "What I wish I knew in my 20s",
    subtext: "Share advice your younger self needed most.",
    guide: [
      "Start with one thing you worried about too much.",
      "Explain what changed with time and experience.",
      "End with a simple message for younger viewers."
    ],
    script: [
      "If I could go back to my 20s, I would spend less time worrying about what other people thought of me.",
      "Back then, I thought I had to follow the same timeline as everyone else.",
      "Now I know that trusting yourself earlier can save you a lot of stress.",
      "If you are in your 20s, remember this: your life does not have to look like anyone else’s."
    ],
    result: {
      title: "The Advice I Wish I Heard at 25",
      hook: "If I could go back to my 20s, this is what I would tell myself.",
      captions: [
        "I spent too much time worrying about what others thought.",
        "Looking back, I wish I had trusted myself earlier.",
        "Your life does not need to follow someone else’s timeline."
      ],
      hashtags: ["#LifeAdvice", "#SeniorWisdom", "#TikTokAdvice", "#LessonsLearned"]
    }
  },
  {
    id: "lesson",
    label: "A life lesson I learned the hard way",
    subtext: "Turn a difficult moment into helpful wisdom.",
    guide: [
      "Describe the challenge in one or two short lines.",
      "Say what it taught you about people, money, or time.",
      "Offer one lesson that could help someone today."
    ],
    script: [
      "One hard lesson I learned was that rushing important decisions can cost you later.",
      "At the time, I thought moving fast meant I was being smart.",
      "Instead, I learned that slowing down and asking questions would have saved me a lot of pain.",
      "That lesson still stays with me, and it might help someone listening today."
    ],
    result: {
      title: "A Hard Lesson That Changed My Life",
      hook: "One painful mistake taught me something I never forgot.",
      captions: [
        "I learned that rushing important decisions usually costs more later.",
        "Pride can keep you from asking for help when you need it most.",
        "A hard lesson can become a gift if you pass it on."
      ],
      hashtags: ["#LifeLessons", "#WisdomTok", "#SeniorStories", "#AdviceThatMatters"]
    }
  },
  {
    id: "money",
    label: "One money habit that helped me",
    subtext: "Share a practical financial habit that lasted.",
    guide: [
      "Name the habit clearly in your first sentence.",
      "Give a real example of how it helped you.",
      "Keep your advice realistic and encouraging."
    ],
    script: [
      "One money habit that helped me was saving a little bit consistently, even when it did not feel like much.",
      "I learned that small amounts add up over time and create peace of mind.",
      "It was not about being perfect. It was about building a steady habit.",
      "If I could offer one money tip, it would be to start small and stay consistent."
    ],
    result: {
      title: "The Money Habit I Still Believe In",
      hook: "This simple money habit helped me feel more secure over time.",
      captions: [
        "Saving a little regularly mattered more than trying to be perfect.",
        "I learned to separate wants from needs before spending.",
        "Small habits can build peace of mind year after year."
      ],
      hashtags: ["#MoneyTips", "#SeniorWisdom", "#FinancialHabits", "#PracticalAdvice"]
    }
  },
  {
    id: "career",
    label: "Career advice for young people",
    subtext: "Offer encouragement from years of work experience.",
    guide: [
      "Talk about one mindset that helped your career grow.",
      "Mention a workplace lesson that still matters.",
      "Finish with advice a young person can use this week."
    ],
    script: [
      "If I could give young people one piece of career advice, it would be to focus on being dependable.",
      "You do not have to know everything right away, but people remember when they can count on you.",
      "Ask questions, keep learning, and do the small things well.",
      "A strong career is usually built one thoughtful decision at a time."
    ],
    result: {
      title: "Career Advice I’d Give Any Young Person",
      hook: "You do not need to know everything at the start to build a good career.",
      captions: [
        "Being dependable often matters just as much as being talented.",
        "Ask questions early instead of pretending you already know.",
        "A strong reputation is built one small decision at a time."
      ],
      hashtags: ["#CareerAdvice", "#WorkWisdom", "#SeniorStories", "#MentorMindset"]
    }
  }
];

const extraTopics = [
  {
    id: "family",
    label: "A family value I still believe in",
    subtext: "Share a lesson your family passed down.",
    guide: [
      "Name the family value in your first sentence.",
      "Tell a short story about where it came from.",
      "Explain why it still matters today."
    ],
    script: [
      "One family value I still believe in is showing up for people when it matters most.",
      "I learned that from watching the older people in my family make time for each other.",
      "That lesson stayed with me long after I grew up and built my own life.",
      "It is simple advice, but it makes a real difference in how people feel loved."
    ],
    result: {
      title: "The Family Value I Still Carry With Me",
      hook: "One lesson from my family still guides how I treat people today.",
      captions: [
        "The values you grow up with can shape you for life.",
        "Showing up for people matters more than perfect words.",
        "Simple family lessons often stay with you the longest."
      ],
      hashtags: ["#FamilyWisdom", "#SeniorStories", "#LifeAdvice", "#ValuesThatMatter"]
    }
  },
  {
    id: "confidence",
    label: "A time I learned to trust myself",
    subtext: "Tell a story about confidence that grew over time.",
    guide: [
      "Describe the moment when self-doubt was strongest.",
      "Share what helped you move forward anyway.",
      "End with encouragement for someone who needs confidence now."
    ],
    script: [
      "There was a time in my life when I kept doubting every decision I made.",
      "Over time, I learned that confidence often grows after you take the step, not before.",
      "I stopped waiting to feel perfectly ready and started trusting my own judgment more.",
      "That change helped me build a life that felt more like my own."
    ],
    result: {
      title: "How I Learned to Trust Myself More",
      hook: "Confidence did not appear overnight, but one lesson changed everything for me.",
      captions: [
        "You do not need to feel fearless to move forward.",
        "Confidence often grows after the decision, not before it.",
        "Trusting yourself is something you build step by step."
      ],
      hashtags: ["#Confidence", "#SeniorWisdom", "#TrustYourself", "#LifeLessons"]
    }
  },
  {
    id: "friendship",
    label: "What good friendship taught me",
    subtext: "Share a lesson about choosing and keeping good friends.",
    guide: [
      "Describe the kind of friend who made a difference in your life.",
      "Explain what that friendship taught you.",
      "Offer one sign of a healthy friendship."
    ],
    script: [
      "Good friendship taught me that the right people make hard seasons easier to carry.",
      "Some friends may not fix the problem, but they remind you that you are not alone.",
      "As I got older, I learned to value the people who were steady, kind, and honest.",
      "That kind of friendship is something worth protecting."
    ],
    result: {
      title: "What Real Friendship Looks Like to Me",
      hook: "One lesson about friendship became clearer to me as I got older.",
      captions: [
        "Good friends do not have to be loud to be loyal.",
        "Steady kindness matters more than flashy attention.",
        "Healthy friendship feels safe, honest, and mutual."
      ],
      hashtags: ["#Friendship", "#LifeAdvice", "#SeniorStories", "#MeaningfulRelationships"]
    }
  },
  {
    id: "change",
    label: "How I handled a big life change",
    subtext: "Turn a major transition into a helpful story.",
    guide: [
      "Name the life change in clear, simple words.",
      "Share what felt difficult at first.",
      "Explain what helped you adjust over time."
    ],
    script: [
      "One big life change taught me that even difficult transitions can open a new chapter.",
      "At first, I felt unsure and out of place, and I did not know what would come next.",
      "Little by little, I found a rhythm by focusing on what I could do that day.",
      "That experience taught me that resilience often looks quiet at the beginning."
    ],
    result: {
      title: "What a Big Life Change Taught Me",
      hook: "A major turning point in my life taught me more than I expected.",
      captions: [
        "Big changes rarely feel easy at first.",
        "Focusing on one day at a time can help you adjust.",
        "Resilience often begins before you realize it."
      ],
      hashtags: ["#LifeChange", "#Resilience", "#SeniorStories", "#GrowthOverTime"]
    }
  }
];

const state = {
  screen: "topics",
  selectedTopic: null,
  videoFile: null,
  videoUrl: "",
  processingTimer: null,
  thumbnailUrl: "",
  thumbnailKey: "",
  transcriptCaptions: [],
  draft: null,
  extraTopicsShown: 0
};

const TIKTOK_UPLOAD_URL = "https://www.tiktok.com/upload";
const TIKTOK_HELP_URL = "https://www.tiktok.com/support/faq_detail?id=7581826684085606968&category=web_account";

const screens = [...document.querySelectorAll("[data-screen]")];
const progressSteps = document.getElementById("progress-steps");
const studioNavShell = document.querySelector(".site-nav-shell");
const topicGrid = document.getElementById("topic-grid");
const topicSummary = document.getElementById("topic-summary");
const topicsPanel = document.getElementById("topics-panel");
const videoInput = document.getElementById("video-input");
const videoPreview = document.getElementById("video-preview");
const previewPlayer = document.getElementById("preview-player");
const uploadStatus = document.getElementById("upload-status");
const resultPlayer = document.getElementById("result-player");
const videoName = document.getElementById("video-name");
const resultTitle = document.getElementById("result-title");
const resultHook = document.getElementById("result-hook");
const hashtagList = document.getElementById("hashtag-list");
const titleOptions = document.getElementById("title-options");
const hookOptions = document.getElementById("hook-options");
const resultFeedTopic = document.getElementById("result-feed-topic");
const resultFeedTitle = document.getElementById("result-feed-title");
const resultFeedHook = document.getElementById("result-feed-hook");
const resultFeedTags = document.getElementById("result-feed-tags");
const resultCaptionOverlay = document.getElementById("result-caption-overlay");

const buttons = {
  toUpload: document.querySelector('[data-action="to-upload"]'),
  moreStories: document.querySelector('[data-action="more-stories"]')
};

function renderTopics() {
  topicGrid.innerHTML = "";

  const visibleTopics = [
    ...topics,
    ...extraTopics.slice(0, state.extraTopicsShown)
  ];

  visibleTopics.forEach((topic) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "topic-card rounded-[1.75rem] bg-white/90 p-6 text-left shadow-sm";
    button.setAttribute("role", "listitem");
    button.dataset.topicId = topic.id;
    button.innerHTML = `
      <span class="topic-card__label">${topic.label}</span>
      <span class="topic-card__subtext">${topic.subtext}</span>
    `;
    button.addEventListener("click", () => selectTopic(topic.id));
    topicGrid.appendChild(button);
  });

  if (buttons.moreStories) {
    const hasMoreStories = state.extraTopicsShown < extraTopics.length;
    buttons.moreStories.disabled = !hasMoreStories;
    buttons.moreStories.innerHTML = hasMoreStories
      ? '<span class="material-symbols-outlined feature-button__icon" aria-hidden="true">add</span>More story'
      : '<span class="material-symbols-outlined feature-button__icon" aria-hidden="true">check</span>More stories added';
  }
}

function selectTopic(topicId) {
  state.selectedTopic = [...topics, ...extraTopics].find((topic) => topic.id === topicId) ?? null;

  document.querySelectorAll(".topic-card").forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.topicId === topicId);
  });

  if (!state.selectedTopic) {
    buttons.toUpload.disabled = true;
    return;
  }

  buttons.toUpload.disabled = false;
  const guideItems = state.selectedTopic.guide
    .map((item) => `<li>${item}</li>`)
    .join("");
  const scriptText = escapeHtml(state.selectedTopic.script.join("\n\n"));

  topicSummary.innerHTML = `
    <p class="selection-summary__eyebrow">Speaking Guide</p>
    <h3 class="selection-summary__title">${state.selectedTopic.label}</h3>
    <p class="selection-summary__text">${state.selectedTopic.subtext}</p>
    <ul>${guideItems}</ul>
    <div class="sample-script">
      <p class="sample-script__eyebrow">Sample Script</p>
      <label class="sr-only" for="sample-script-editor">Editable sample script</label>
      <textarea id="sample-script-editor" class="sample-script__editor" rows="8">${scriptText}</textarea>
    </div>
  `;
}

function scrollToTopics() {
  if (!topicsPanel) return;
  topicsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToProgressSteps() {
  if (!progressSteps) return;
  const topOffset = 24;
  const absoluteTop = window.scrollY + progressSteps.getBoundingClientRect().top - topOffset;
  window.scrollTo({ top: Math.max(0, absoluteTop), behavior: "smooth" });
}

function updateStudioFlowMode(screenName) {
  const isFocusedFlow = !["landing", "topics"].includes(screenName);
  document.body.classList.toggle("studio-flow--focused", isFocusedFlow);

  if (studioNavShell && isFocusedFlow) {
    studioNavShell.classList.remove("is-hidden");
  }
}

function updateSampleScript(value) {
  if (!state.selectedTopic) return;
  state.selectedTopic.script = value
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function showScreen(screenName) {
  state.screen = screenName;
  updateStudioFlowMode(screenName);

  screens.forEach((screen) => {
    screen.classList.toggle("panel--visible", screen.dataset.screen === screenName);
  });

  const stepState = getStepState(screenName);
  document.querySelectorAll(".step").forEach((step) => {
    const stepNumber = Number(step.dataset.step);
    step.classList.toggle("is-active", stepNumber === stepState.active);
    step.classList.toggle("is-complete", stepNumber < stepState.active);
  });

  if (screenName !== "landing") {
    scrollToProgressSteps();
  }
}

function getStepState(screenName) {
  const map = {
    landing: { active: 1 },
    topics: { active: 1 },
    upload: { active: 2 },
    processing: { active: 3 },
    results: { active: 3 }
  };

  return map[screenName] ?? { active: 1 };
}

function setVideo(file) {
  if (state.videoUrl) {
    URL.revokeObjectURL(state.videoUrl);
  }

  state.videoFile = file;
  state.videoUrl = file ? URL.createObjectURL(file) : "";
  state.thumbnailUrl = "";
  state.thumbnailKey = "";

  if (!file) {
    if (previewPlayer) previewPlayer.removeAttribute("src");
    resultPlayer.removeAttribute("src");
    if (videoPreview) videoPreview.hidden = true;
    if (uploadStatus) uploadStatus.hidden = true;
    return;
  }

  if (previewPlayer) previewPlayer.src = state.videoUrl;
  resultPlayer.src = state.videoUrl;
  if (uploadStatus) uploadStatus.hidden = false;
  if (videoName) videoName.textContent = `${file.name} selected and ready for review.`;
  if (videoPreview) videoPreview.hidden = false;
}

function renderResults() {
  if (!state.selectedTopic) return;

  const draft = ensureDraft();
  state.transcriptCaptions = buildTranscriptCaptions(draft.captions);
  renderOptionChips(titleOptions, draft.titleOptions, draft.title, "title");
  renderOptionChips(hookOptions, draft.hookOptions, draft.hook, "hook");
  resultTitle.value = draft.title;
  resultHook.value = draft.hook;
  hashtagList.value = draft.hashtags.join(" ");
  resultFeedTopic.textContent = state.selectedTopic.label;
  resultFeedTitle.textContent = draft.title;
  resultFeedHook.textContent = draft.hook;
  resultFeedTags.innerHTML = "";
  draft.hashtags.forEach((tag) => {
    const previewTag = document.createElement("span");
    previewTag.className = "tag tag--feed";
    previewTag.textContent = tag;
    resultFeedTags.appendChild(previewTag);
  });
  updateResultCaptionOverlay(0);
}

function ensureDraft() {
  if (!state.selectedTopic) return null;
  const base = state.selectedTopic.result;
  const transcriptCaptions = buildTranscriptCaptions(state.selectedTopic.script);

  if (!state.draft || state.draft.topicId !== state.selectedTopic.id) {
    state.draft = {
      topicId: state.selectedTopic.id,
      title: base.title,
      hook: base.hook,
      captions: transcriptCaptions,
      hashtags: [...base.hashtags],
      titleOptions: buildTitleOptions(base.title),
      hookOptions: buildHookOptions(base.hook, state.selectedTopic.label)
    };
  }

  return state.draft;
}

function buildTitleOptions(baseTitle) {
  return [
    baseTitle,
    `A Lesson I Want to Share`,
    `What Life Taught Me Over Time`
  ];
}

function buildHookOptions(baseHook, topicLabel) {
  return [
    baseHook,
    `Here is the advice I would share with anyone younger than me.`,
    `This ${topicLabel.toLowerCase()} still matters to me today.`
  ];
}

function renderOptionChips(container, options, selectedValue, field) {
  container.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-chip";
    button.textContent = option;
    button.classList.toggle("is-selected", option === selectedValue);
    button.addEventListener("click", () => {
      applyOption(field, option);
    });
    container.appendChild(button);
  });
}

function applyOption(field, value) {
  const draft = ensureDraft();
  if (!draft) return;

  draft[field] = value;
  state.thumbnailUrl = "";
  state.thumbnailKey = "";
  renderResults();
}

async function generateThumbnailFromVideo(title, subtitle, thumbnailKey) {
  if (!state.videoUrl) return;

  try {
    const dataUrl = await captureThumbnailFrame(state.videoUrl, title, subtitle);
    if (state.thumbnailKey !== thumbnailKey) return;
    state.thumbnailUrl = dataUrl;
    if (state.selectedTopic?.result.title === title) {
      thumbnailPreview.src = dataUrl;
    }
  } catch {
    if (state.thumbnailKey !== thumbnailKey) return;
    state.thumbnailUrl = buildFallbackThumbnail(title, subtitle);
    if (state.selectedTopic?.result.title === title) {
      thumbnailPreview.src = state.thumbnailUrl;
    }
  }
}

function captureThumbnailFrame(videoUrl, title, subtitle) {
  return new Promise((resolve, reject) => {
    const frameVideo = document.createElement("video");
    frameVideo.preload = "metadata";
    frameVideo.muted = true;
    frameVideo.playsInline = true;
    frameVideo.src = videoUrl;

    frameVideo.addEventListener("loadeddata", () => {
      const safeTargetTime = frameVideo.duration && Number.isFinite(frameVideo.duration)
        ? Math.min(Math.max(frameVideo.duration * 0.18, 0.1), Math.max(frameVideo.duration - 0.1, 0.1))
        : 0;

      const drawFrame = () => {
        try {
          const dataUrl = drawThumbnailCanvas(frameVideo, title, subtitle);
          resolve(dataUrl);
        } catch (error) {
          reject(error);
        }
      };

      if (safeTargetTime > 0) {
        frameVideo.currentTime = safeTargetTime;
        frameVideo.addEventListener("seeked", drawFrame, { once: true });
      } else {
        drawFrame();
      }
    }, { once: true });

    frameVideo.addEventListener("error", () => reject(new Error("Video frame capture failed")), {
      once: true
    });
  });
}

function drawThumbnailCanvas(video, title, subtitle) {
  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 1600;
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas context unavailable");
  }

  drawCoverImage(
    context,
    video,
    0,
    0,
    canvas.width,
    canvas.height
  );

  const topShade = context.createLinearGradient(0, 0, 0, canvas.height * 0.55);
  topShade.addColorStop(0, "rgba(0, 0, 0, 0.18)");
  topShade.addColorStop(1, "rgba(0, 0, 0, 0)");
  context.fillStyle = topShade;
  context.fillRect(0, 0, canvas.width, canvas.height * 0.55);

  const bottomShade = context.createLinearGradient(0, canvas.height * 0.62, 0, canvas.height);
  bottomShade.addColorStop(0, "rgba(0, 0, 0, 0)");
  bottomShade.addColorStop(1, "rgba(0, 0, 0, 0.68)");
  context.fillStyle = bottomShade;
  context.fillRect(0, canvas.height * 0.62, canvas.width, canvas.height * 0.38);

  const titleLines = wrapCanvasText(context, title.toUpperCase(), 760, "900 88px Arial, sans-serif");
  context.textAlign = "center";
  context.lineJoin = "round";
  context.strokeStyle = "rgba(0, 0, 0, 0.92)";
  context.fillStyle = "#ffffff";
  context.lineWidth = 12;

  let titleY = 210;
  titleLines.slice(0, 3).forEach((line) => {
    context.strokeText(line, canvas.width / 2, titleY);
    context.fillText(line, canvas.width / 2, titleY);
    titleY += 96;
  });

  const subtitleLines = wrapCanvasText(context, subtitle, 680, "700 italic 42px Georgia, serif");
  context.font = "700 italic 42px Georgia, serif";
  context.lineWidth = 7;
  let subtitleY = canvas.height - 190;
  subtitleLines.slice(0, 2).forEach((line) => {
    context.strokeText(line, canvas.width / 2, subtitleY);
    context.fillText(line, canvas.width / 2, subtitleY);
    subtitleY += 54;
  });

  return canvas.toDataURL("image/png");
}

function drawCoverImage(context, image, dx, dy, dWidth, dHeight) {
  const sourceWidth = image.videoWidth || image.naturalWidth;
  const sourceHeight = image.videoHeight || image.naturalHeight;
  const sourceRatio = sourceWidth / sourceHeight;
  const destRatio = dWidth / dHeight;

  let sx = 0;
  let sy = 0;
  let sWidth = sourceWidth;
  let sHeight = sourceHeight;

  if (sourceRatio > destRatio) {
    sWidth = sourceHeight * destRatio;
    sx = (sourceWidth - sWidth) / 2;
  } else {
    sHeight = sourceWidth / destRatio;
    sy = (sourceHeight - sHeight) / 2;
  }

  context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
}

function wrapCanvasText(context, text, maxWidth, font) {
  context.font = font;
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;
    if (context.measureText(nextLine).width <= maxWidth || !currentLine) {
      currentLine = nextLine;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  });

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function buildFallbackThumbnail(title, subtitle) {
  const escapedTitle = escapeSvgText(title.toUpperCase());
  const escapedSubtitle = escapeSvgText(subtitle);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1600" viewBox="0 0 900 1600">
      <defs>
        <linearGradient id="bg" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#b9d0e8" />
          <stop offset="100%" stop-color="#efc39b" />
        </linearGradient>
      </defs>
      <rect width="900" height="1600" fill="url(#bg)" />
      <text x="450" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="88" font-weight="900" fill="#ffffff" stroke="#000000" stroke-width="12" paint-order="stroke">${escapedTitle}</text>
      <text x="450" y="1415" text-anchor="middle" font-family="Georgia, serif" font-size="42" font-style="italic" font-weight="700" fill="#ffffff" stroke="#000000" stroke-width="6" paint-order="stroke">${escapedSubtitle}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeSvgText(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function updateResultCaptionOverlay(currentTime = 0) {
  if (!resultCaptionOverlay) {
    return;
  }

  if (!state.selectedTopic) {
    resultCaptionOverlay.textContent = "";
    return;
  }

  const captions = state.transcriptCaptions;
  if (!captions.length) {
    resultCaptionOverlay.textContent = "";
    return;
  }

  const duration = resultPlayer.duration && Number.isFinite(resultPlayer.duration)
    ? resultPlayer.duration
    : captions.length * 2.5;
  const segmentLength = duration / captions.length;
  const index = Math.min(
    captions.length - 1,
    Math.max(0, Math.floor(currentTime / Math.max(segmentLength, 0.1)))
  );

  resultCaptionOverlay.textContent = captions[index] ?? "";
}

function buildTranscriptCaptions(source) {
  if (Array.isArray(source)) {
    return source
      .map((line) => line.trim())
      .filter(Boolean);
  }

  const sourceText = String(source ?? "").replace(/\s+/g, " ").trim();
  if (!sourceText) return [];

  return sourceText
    .split(/(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function updateDraftFromEditors() {
  const draft = ensureDraft();
  if (!draft) return;

  draft.title = resultTitle.value.trim() || draft.titleOptions[0];
  draft.hook = resultHook.value.trim() || draft.hookOptions[0];
  draft.hashtags = hashtagList.value
    .split(/\s+/)
    .map((tag) => tag.trim())
    .filter(Boolean);
  state.thumbnailUrl = "";
  state.thumbnailKey = "";
  renderResults();
}

function beginProcessing() {
  showScreen("processing");
  clearTimeout(state.processingTimer);
  state.processingTimer = window.setTimeout(() => {
    renderResults();
    showScreen("results");
  }, 1800);
}

function showMoreStories() {
  state.extraTopicsShown = Math.min(extraTopics.length, state.extraTopicsShown + 2);
  renderTopics();

  if (state.selectedTopic) {
    document.querySelectorAll(".topic-card").forEach((card) => {
      card.classList.toggle("is-selected", card.dataset.topicId === state.selectedTopic.id);
    });
  }
}

function restartApp() {
  clearTimeout(state.processingTimer);
  state.selectedTopic = null;
  if (state.videoUrl) {
    URL.revokeObjectURL(state.videoUrl);
  }
  state.videoFile = null;
  state.videoUrl = "";
  state.thumbnailUrl = "";
  state.thumbnailKey = "";
  state.transcriptCaptions = [];
  state.draft = null;
  state.extraTopicsShown = 0;
  videoInput.value = "";
  if (previewPlayer) previewPlayer.removeAttribute("src");
  resultPlayer.removeAttribute("src");
  if (videoPreview) videoPreview.hidden = true;
  if (uploadStatus) uploadStatus.hidden = true;
  buttons.toUpload.disabled = true;
  resultCaptionOverlay.textContent = "";
  resultFeedTopic.textContent = "";
  resultFeedTitle.textContent = "";
  resultFeedHook.textContent = "";
  resultFeedTags.innerHTML = "";
  topicSummary.innerHTML = `
    <p class="selection-summary__text">Select a topic card to see a friendly prompt, talking points, and a sample script.</p>
  `;
  document.querySelectorAll(".topic-card").forEach((card) => {
    card.classList.remove("is-selected");
  });
  showScreen("topics");
}

function openTikTokUpload() {
  window.open(TIKTOK_UPLOAD_URL, "_blank", "noopener,noreferrer");
}

function openTikTokHelp() {
  window.open(TIKTOK_HELP_URL, "_blank", "noopener,noreferrer");
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const action = target.dataset.action;
  if (!action) return;

  switch (action) {
    case "start":
      showScreen("topics");
      scrollToTopics();
      break;
    case "jump-topics":
    case "back-home":
      showScreen("topics");
      break;
    case "more-stories":
      showMoreStories();
      break;
    case "to-upload":
      if (state.selectedTopic) showScreen("upload");
      break;
    case "back-topics":
      showScreen("topics");
      break;
    case "back-upload":
      showScreen("upload");
      break;
    case "open-tiktok-upload":
      openTikTokUpload();
      break;
    case "open-tiktok-help":
      openTikTokHelp();
      break;
    case "restart":
      restartApp();
      break;
    default:
      break;
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLTextAreaElement)) return;
  if (target.id !== "sample-script-editor") return;
  updateSampleScript(target.value);
});

videoInput.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  const [file] = target.files ?? [];
  setVideo(file ?? null);
  if (file && state.selectedTopic) {
    beginProcessing();
  }
});

resultTitle.addEventListener("change", updateDraftFromEditors);
resultHook.addEventListener("change", updateDraftFromEditors);
hashtagList.addEventListener("change", updateDraftFromEditors);

resultPlayer.addEventListener("timeupdate", () => {
  updateResultCaptionOverlay(resultPlayer.currentTime);
});

resultPlayer.addEventListener("loadedmetadata", () => {
  updateResultCaptionOverlay(0);
});

resultPlayer.addEventListener("play", () => {
  updateResultCaptionOverlay(resultPlayer.currentTime);
});

renderTopics();
showScreen("topics");
