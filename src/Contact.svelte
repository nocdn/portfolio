<script>
  import GithubChip from "./lib/GithubChip.svelte";
  import MailChip from "./lib/MailChip.svelte";
  import LinkedInChip from "./lib/LinkedInChip.svelte";
  import TwitterChip from "./lib/TwitterChip.svelte";
  import InstagramChip from "./lib/InstagramChip.svelte";

  import SocialChip from "./SocialChip.svelte";
  import github from "./assets/github.svg";

  const phrases = ["github", "email", "linkedin", "twitter", "instagram"];

  let changingString = $state(phrases[0]);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  let currentPhraseIndex = 0;
  let frame = 0;
  let frameRequest;
  let queue = [];
  let isHovered = false;
  let animationTimeout;

  function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  function setText(newText) {
    const oldText = changingString;
    const length = Math.max(oldText.length, newText.length);
    queue = [];

    // create transition queue for each character
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(frameRequest);
    frame = 0;
    update();
  }
  let currentlyShowing = $state("");
  function update() {
    let output = "";
    let complete = 0;

    for (let i = 0; i < queue.length; i++) {
      let { from, to, start, end, char } = queue[i];

      if (frame >= end) {
        complete++;
        output += to;
      } else if (frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar();
          queue[i].char = char;
        }
        output += char;
      } else {
        output += from;
      }
    }

    changingString = output;

    if (complete === queue.length) {
      return true;
    } else {
      frameRequest = requestAnimationFrame(update);
      frame++;
      return false;
    }
  }

  function next() {
    const nextPhrase = phrases[currentPhraseIndex];
    setText(nextPhrase);
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;

    // Only schedule next animation if not hovered
    if (!isHovered) {
      animationTimeout = setTimeout(next, 1700);
    }
  }

  let currentHover = $state("");

  function handleMouseEnter() {
    isHovered = true;
    // Clear any pending animation timeout
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
    // Get the current phrase by looking at the previous index
    const currentIndex =
      (currentPhraseIndex - 1 + phrases.length) % phrases.length;
    console.log("Currently displaying:", phrases[currentIndex]);
    currentHover = phrases[currentIndex];
  }

  function handleMouseLeave() {
    isHovered = false;
    // Resume animation
    animationTimeout = setTimeout(next, 1700);

    currentHover = "";
  }

  // start the animation
  // inspiration from https://codepen.io/soulwire/pen/mEMPrK
  setTimeout(() => {
    next();
  }, 800);
</script>

<div class="education-content content h-4/6">
  <div class="education-header content-header">
    <span class="markdown-text"># </span>
    <h1
      class="text-3xl"
      data-value="You can reach me on"
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
    >
      You can reach me on {changingString}
    </h1>
  </div>
  <div id="contact-chip-grid" class="flex flex-col gap-7">
    <div class="grid grid-cols-2 gap-3">
      <GithubChip pulsating={currentHover === "github"} faded={1 != 1} />
      <LinkedInChip pulsating={currentHover === "linkedin"} faded={1 != 1} />
      <InstagramChip pulsating={currentHover === "instagram"} faded={1 != 1} />
      <TwitterChip pulsating={currentHover === "twitter"} faded={1 != 1} />
    </div>
    <p>Or, most directly through e-mail</p>
    <div class="grid">
      <MailChip />
    </div>
  </div>
</div>
