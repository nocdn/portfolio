<script>
  import ContentHeader from "./lib/ContentHeader.svelte";
  import { Globe } from "lucide-svelte";
  // accept the prop
  let { contentAnimationDirection } = $props();

  let userAgent = $state("");
  if (window.navigator.userAgent.includes("Mac")) {
    userAgent = "macintosh";
  } else if (window.navigator.userAgent.includes("Windows")) {
    userAgent = "windows";
  } else if (window.navigator.userAgent.includes("Linux")) {
    userAgent = "linux";
  } else {
    userAgent = "unknown";
  }

  let shownOutputs = $state(0);
  function graduallyShowOutputs() {
    const interval = setInterval(() => {
      if (shownOutputs < 4) {
        shownOutputs += 1;
      } else {
        clearInterval(interval);
      }
    }, 250);
  }

  setTimeout(graduallyShowOutputs, 1800);

  let commandPrompt = "";

  // simulate typing of the command
  function writeCommand() {
    let promptTextContent = commandPrompt;
    const fullCommand = [" cat ", "stack", ".txt"];

    // remove blinking cursor just before the command starts to appear
    const cursor = document.getElementById("blinking-cursor");
    if (cursor) cursor.style.display = "none";

    for (let i = 0; i < fullCommand.length; i++) {
      setTimeout(() => {
        promptTextContent += fullCommand[i];
        commandPrompt = promptTextContent;
        const commandEl = document.getElementById("command");
        if (commandEl) commandEl.innerText = commandPrompt;
      }, i * 100);
    }
  }

  // show the blinking cursor before the command is typed
  function showBlinkingCursor() {
    const cursor = document.getElementById("blinking-cursor");
    if (cursor) cursor.style.display = "inline-block";
  }

  setTimeout(showBlinkingCursor, 1000); // show cursor after 1 second
  setTimeout(writeCommand, 1500); // start typing the command after 1.5 seconds
</script>

<!-- remove old animation, apply conditional class -->
<about
  class="flex flex-col gap-9.5 {contentAnimationDirection === 'up'
    ? 'animate-small-fade-up'
    : 'animate-small-fade-down'}"
>
  <ContentHeader title="Who am I?" />
  <header class="flex flex-col gap-3">
    <p class="text-lg font-geist pr-24 text-balance">
      My name is Bartosz Bak, and I'm a student and an aspiring full-stack
      engineer who likes to craft nice things.
    </p>
    <div class="flex flex-col group h-8 transition-all">
      <a
        href="https://maps.app.goo.gl/1wJWH9Vi86rza4iY9"
        class="flex gap-2 items-center font-geist-mono text-md"
      >
        <Globe size={14} strokeWidth={2.5} /> York, United Kingdom, GMT
      </a>
    </div>
  </header>
  <div class="flex flex-col bg-gray-50 p-3 rounded-sm w-lg">
    <p class="text-red-700 font-geist-mono mb-3 font-bold">
      bartosz@{userAgent} ~ $ <span id="command"></span><span
        id="blinking-cursor">█</span
      >
    </p>

    <p
      class="mb-1 opacity-70 transition-opacity duration-300 font-geist-mono"
      style="opacity: {shownOutputs >= 1 ? 1 : 0};"
    >
      TypeScript, JavaScript, Python, Bash
    </p>
    <p
      class="mb-1 opacity-70 transition-opacity duration-300 font-geist-mono"
      style="opacity: {shownOutputs >= 2 ? 1 : 0};"
    >
      SvelteKit, Flask, Tailwind CSS
    </p>
    <p
      class="mb-1 opacity-70 transition-opacity duration-300 font-geist-mono"
      style="opacity: {shownOutputs >= 3 ? 1 : 0};"
    >
      Git, Docker, Unix systems, Nginx, PostgreSQL
    </p>
    <p
      class="mb-1 opacity-70 transition-opacity duration-300 font-geist-mono"
      style="opacity: {shownOutputs >= 4 ? 1 : 0};"
    >
      AWS, GCP, Supabase, OCI, CI/CD understanding
    </p>
  </div>
  <p class="flex flex-col gap-1.5 text-md font-geist tracking-[0.025rem]">
    <span
      ><span class="mr-1">🎓</span> Studying Computer Science at the
      <span>University of York, UK.</span></span
    >
    <span><span class="mr-1">🔍</span> Focused on full-stack development.</span>
    <span
      ><span class="mr-1">🌟</span> Interested in AI research, modern frameworks
      and UI/UX design.</span
    >
  </p>
</about>
