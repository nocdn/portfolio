<script>
  import ContentHeader from "./lib/ContentHeader.svelte";
  import Skybordered from "./lib/Skybordered.svelte";
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

<about
  class="flex flex-col gap-9.5 {contentAnimationDirection === 'up'
    ? 'animate-small-fade-up'
    : 'animate-small-fade-down'}"
>
  <ContentHeader title="Who am I?" />
  <header class="flex flex-col gap-3">
    <p class="text-md pr-24 text-balance font-geist-mono font-medium">
      My name is Bartosz Bak, and I'm a student at the University of York and an
      aspiring full-stack engineer who likes to craft nice things.
    </p>
  </header>
  <div class="flex flex-col bg-gray-50 p-3 rounded-sm w-lg">
    <div class="flex gap-2 items-center pb-2 pt-1">
      {#each ["#FF5F57", "#FDBC2C", "#29C941"] as color}
        <div
          style="background-color: {color};"
          class="h-2.5 w-2.5 rounded-full"
        ></div>
      {/each}
    </div>
    <p class="text-red-700 font-geist-mono mb-2 font-bold">
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
</about>
