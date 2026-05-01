const navShell = document.querySelector('.site-nav-shell');
let lastScrollY = window.scrollY;

function updateNavVisibility() {
  if (!navShell) return;

  const currentScrollY = window.scrollY;
  const scrollingDown = currentScrollY > lastScrollY;
  const shouldHide = scrollingDown && currentScrollY > 96;

  navShell.classList.toggle('is-hidden', shouldHide);
  lastScrollY = currentScrollY;
}

window.addEventListener('scroll', updateNavVisibility, { passive: true });
window.addEventListener('load', updateNavVisibility);

const feedbackForm = document.getElementById('feedback-form');
const feedbackSuccess = document.getElementById('feedback-success');
const signupForm = document.getElementById('signup-form');
const signupSuccess = document.getElementById('signup-success');

if (feedbackForm) {
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(feedbackForm);
    const name = String(formData.get('name') ?? '').trim() || 'friend';

    if (feedbackSuccess) {
      feedbackSuccess.hidden = false;
      feedbackSuccess.textContent = `Thanks, ${name}. Your feedback has been received and is helping us improve SeniorStories.`;
    }

    feedbackForm.reset();
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const firstName = String(formData.get('first_name') ?? '').trim() || 'there';

    if (signupSuccess) {
      signupSuccess.hidden = false;
      signupSuccess.textContent = `Welcome, ${firstName}. Your SeniorStories account is ready in this demo experience.`;
    }

  signupForm.reset();
  });
}

const chatQuickReplies = [
  'How do I start my first video?',
  'What does the free plan include?',
  'How do I post to TikTok?'
];

function getChatbotReply(message) {
  const text = message.trim().toLowerCase();

  if (!text) {
    return "Ask me anything about getting started, choosing a topic, editing your post, or publishing to TikTok.";
  }

  if (text.includes('price') || text.includes('cost') || text.includes('free') || text.includes('plan')) {
    return "SeniorStories starts with a free trial that gives you 10 uses. After that, the Unlimited Plan is $20 per month for unlimited story drafts, captions, hooks, and hashtag support.";
  }

  if (
    text.includes('start') ||
    text.includes('first video') ||
    text.includes('topic') ||
    text.includes('idea') ||
    text.includes('story prompt')
  ) {
    return "Start by choosing one topic that feels easy to talk about, like a life lesson, money habit, or advice for younger people. The studio then guides you into uploading your video and shaping the final post.";
  }

  if (text.includes('upload') || text.includes('video') || text.includes('record')) {
    return "In Step 2, you record or choose a video file and upload it. The demo accepts common browser-supported formats like MP4 and MOV, then automatically moves you into the editing step.";
  }

  if (
    text.includes('caption') ||
    text.includes('title') ||
    text.includes('hook') ||
    text.includes('hashtag') ||
    text.includes('edit')
  ) {
    return "In Step 3, SeniorStories suggests a title, hook, and hashtags for your story. You can tap the suggestions, edit the text yourself, and review everything next to the feed-video preview.";
  }

  if (text.includes('tiktok') || text.includes('publish') || text.includes('post')) {
    return "After reviewing your draft, choose 'Post in TikTok' and SeniorStories opens TikTok's upload page in a new tab. If you want extra guidance, the 'How to Post' button opens TikTok's help page too.";
  }

  if (text.includes('account') || text.includes('sign up') || text.includes('signup')) {
    return "You can create an account from the Sign up page, or try the studio demo first without committing. The flow is designed to feel simple even for first-time creators.";
  }

  if (text.includes('help') || text.includes('person') || text.includes('support') || text.includes('feedback')) {
    return "You can send feedback from the website, and I can also guide you through the demo step by step. If you'd like, ask me about topics, pricing, or posting to TikTok.";
  }

  return "I can help with topic ideas, uploading a video, editing titles and hashtags, pricing, or posting to TikTok. Try asking something like 'How do I start?' or 'What does the free plan include?'";
}

function createChatbot() {
  if (document.querySelector('[data-chatbot-shell]')) return;

  const shell = document.createElement('div');
  shell.className = 'chatbot-shell';
  shell.dataset.chatbotShell = 'true';
  shell.innerHTML = `
    <section class="chatbot-panel" id="chatbot-panel" hidden aria-label="SeniorStories chatbot">
      <div class="chatbot-panel__header">
        <div>
          <p class="chatbot-panel__eyebrow">SeniorStories Assistant</p>
          <h2 class="chatbot-panel__title">Ask anything</h2>
        </div>
        <button class="chatbot-panel__close" type="button" data-chatbot-close aria-label="Close chat">Close</button>
      </div>
      <div class="chatbot-messages" data-chatbot-messages></div>
      <div class="chatbot-quick-replies" data-chatbot-quick-replies></div>
      <form class="chatbot-form" data-chatbot-form>
        <label class="sr-only" for="chatbot-input">Ask the chatbot a question</label>
        <textarea id="chatbot-input" class="chatbot-form__input" rows="2" placeholder="Ask about topics, pricing, uploads, or posting to TikTok..." required></textarea>
        <button class="chatbot-form__submit" type="submit">Send</button>
      </form>
    </section>
    <button class="chatbot-toggle" type="button" aria-expanded="false" aria-controls="chatbot-panel" data-chatbot-toggle>
      <span class="material-symbols-rounded chatbot-toggle__icon" aria-hidden="true">chat_bubble</span>
      <span>Ask SeniorStories</span>
    </button>
  `;

  document.body.appendChild(shell);

  const panel = shell.querySelector('.chatbot-panel');
  const toggle = shell.querySelector('[data-chatbot-toggle]');
  const close = shell.querySelector('[data-chatbot-close]');
  const form = shell.querySelector('[data-chatbot-form]');
  const input = shell.querySelector('#chatbot-input');
  const messages = shell.querySelector('[data-chatbot-messages]');
  const quickReplies = shell.querySelector('[data-chatbot-quick-replies]');

  function appendMessage(author, content) {
    const message = document.createElement('article');
    message.className = `chatbot-message chatbot-message--${author}`;
    message.innerHTML = `
      <p class="chatbot-message__label">${author === 'assistant' ? 'SeniorStories' : 'You'}</p>
      <div class="chatbot-message__bubble">${content}</div>
    `;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  function appendTypingMessage() {
    const message = document.createElement('article');
    message.className = 'chatbot-message chatbot-message--assistant';
    message.dataset.typing = 'true';
    message.innerHTML = `
      <p class="chatbot-message__label">SeniorStories</p>
      <div class="chatbot-message__bubble chatbot-message__bubble--typing">
        <span></span><span></span><span></span>
      </div>
    `;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    return message;
  }

  function openChat() {
    panel.hidden = false;
    shell.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    input.focus();
  }

  function closeChat() {
    panel.hidden = true;
    shell.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function askQuestion(question) {
    appendMessage('user', question);
    const typingMessage = appendTypingMessage();

    window.setTimeout(() => {
      typingMessage.remove();
      appendMessage('assistant', getChatbotReply(question));
    }, 420);
  }

  appendMessage(
    'assistant',
    "Hi, I'm the SeniorStories assistant. I can help you choose a topic, understand pricing, upload a video, or get ready to post on TikTok."
  );

  chatQuickReplies.forEach((question) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chatbot-quick-replies__button';
    button.textContent = question;
    button.addEventListener('click', () => {
      openChat();
      askQuestion(question);
    });
    quickReplies.appendChild(button);
  });

  toggle.addEventListener('click', () => {
    if (panel.hidden) {
      openChat();
      return;
    }

    closeChat();
  });

  close.addEventListener('click', closeChat);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const question = input.value.trim();

    if (!question) return;

    input.value = '';
    askQuestion(question);
  });
}

createChatbot();
