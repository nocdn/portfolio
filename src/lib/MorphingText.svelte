<script>
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

<span
  class="text-3xl font-geist-mono font-bold motion-opacity-in-0"
  role="button"
  tabindex="0"
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
>
  {changingString}
</span>
