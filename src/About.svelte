<script>
  import { MapPin } from "lucide-svelte";
  import yorkMap from "./assets/yorkmap.avif";

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
      if (shownOutputs < 3) {
        shownOutputs += 1;
      } else {
        clearInterval(interval);
      }
    }, 250);
  }

  setTimeout(graduallyShowOutputs, 1800);

  let commandPrompt = "";

  // Function to simulate typing of the command
  function writeCommand() {
    let promptTextContent = commandPrompt;
    const fullCommand = [" cat ", "stack", ".txt"];

    // remove  blinking cursor just before the command starts to appear
    document.getElementById("blinking-cursor").style.display = "none";

    for (let i = 0; i < fullCommand.length; i++) {
      setTimeout(() => {
        promptTextContent += fullCommand[i];
        commandPrompt = promptTextContent;
        document.getElementById("command").innerText = commandPrompt;
      }, i * 100);
    }
  }

  // show the blinking cursor before the command is typed
  function showBlinkingCursor() {
    document.getElementById("blinking-cursor").style.display = "inline-block";
  }

  setTimeout(showBlinkingCursor, 1000); // show cursor after 1 second
  setTimeout(writeCommand, 1500); // start typing the command after 1.5 seconds

  let showMap = $state(false);
  let isMapVisible = $state(false);

  let showClock = $state(false);
  let isClockVisible = $state(false);

  function handleClockShow() {
    showClock = true;
    isClockVisible = true;
  }

  function handleClockHide() {
    showClock = false;
    // delay removing element to allow animation to play
    setTimeout(() => {
      isClockVisible = false;
    }, 300); // matching with animation duration
  }

  function handleMapShow() {
    showMap = true;
    isMapVisible = true;
  }

  function handleMapHide() {
    showMap = false;
    // delay removing element to allow animation to play
    setTimeout(() => {
      isMapVisible = false;
    }, 300); // matching with animation duration
  }

  let gmtTime = $state("00:00");

  function updateTime() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    gmtTime = `${hours}:${minutes}`;
  }

  setInterval(updateTime, 1000);
  updateTime();
</script>

<div class="about-content content motion-opacity-in-0">
  <div class="about-header content-header">
    <span class="markdown-text"># </span>
    <h1 class="text-3xl font-geistmono" data-value="Who am I?">Who am I?</h1>
  </div>
  <p
    class="font-sans text-xl pr-12"
    style="font-family: 'Geist', sans-serif; font-weight: 500;"
  >
    My name is Bartosz Bak, and I'm a student and an aspiring full-stack
    software engineer who likes to craft nice things.
  </p>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="relative w-fit">
    <!-- svelte-ignore a11y_unknown_aria_attribute -->
    <!-- svelte-ignore a11y_mouse_events_have_key_events -->
    <div class="flex gap-2 items-center opacity-70">
      <MapPin size={18} />
      <!-- svelte-ignore a11y_mouse_events_have_key_events -->
      <span onmouseover={handleMapShow} onmouseleave={handleMapHide}
        >York, United Kingdom,</span
      >
      <!-- svelte-ignore a11y_mouse_events_have_key_events -->
      <span
        onmouseover={handleClockShow}
        onmouseleave={handleClockHide}
        class="cursor-pointer">GMT</span
      >
    </div>
    {#if isMapVisible}
      <div class="">
        <img
          src={yorkMap}
          alt="map of york"
          class="absolute bottom-10 right-0 mt-0 w-64 h-64 rounded-3xl shadow-lg motion-opacity-in-100 {showMap
            ? 'motion-opacity-in-100 motion-translate-y-in-25 motion-blur-in-md motion-scale-in-75'
            : 'motion-opacity-out-0 motion-translate-y-out-25 motion-blur-out-xl motion-scale-out-75'}"
          style="box-shadow: inset 0 0 50px 50px rgba(255, 255, 255, 0.5);"
        />
      </div>
    {/if}
    {#if isClockVisible}
      <div class="relative">
        <div
          class="bg-[#252525] text-white font-mono font-semibold text-2xl grid place-content-center absolute bottom-10 right-0 mt-0 w-32 h-16 rounded-xl shadow-lg motion-opacity-in-100 {showClock
            ? 'motion-opacity-in-100 motion-translate-y-in-25 motion-blur-in-md motion-scale-in-75'
            : 'motion-opacity-out-0 motion-translate-y-out-25 motion-blur-out-xl motion-scale-out-75'}"
        >
          {gmtTime}
        </div>
      </div>
    {/if}
  </div>

  <div class="shell-container">
    <p class="shell-prompt">
      bartosz@{userAgent} ~ $ <span id="command"></span><span
        id="blinking-cursor">█</span
      >
    </p>

    <p class="command-output" style="opacity: {shownOutputs >= 1 ? 1 : 0};">
      Svelte 5, Tailwind CSS, JavaScript
    </p>
    <p class="command-output" style="opacity: {shownOutputs >= 2 ? 1 : 0};">
      Python, Bash, Flask
    </p>
    <p class="command-output" style="opacity: {shownOutputs >= 3 ? 1 : 0};">
      Git, Docker, Unix systems
    </p>
  </div>

  <p
    style="display: flex; flex-direction: column; gap: 0.35rem; font-family: 'Geist', sans-serif; letter-spacing: 0.025rem;"
  >
    <span
      ><span class="mr-1">🎓</span> Studying Computer Science at the
      <span>University of York, UK.</span></span
    >
    <span
      ><span class="mr-1">🔍</span> Focused on web and backend development.</span
    >
    <span><span class="mr-1">🌟</span> Always open to new opportunities.</span>
  </p>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Geist:wght@500&display=swap");
  .shell-container {
    display: flex;
    flex-direction: column;
    background-color: #f6f8fa;
    padding: 0.75rem;
    border-radius: 0.25rem;
    width: 28rem;
  }

  .shell-prompt {
    color: #d20f39;
    margin-bottom: 0.75rem;
    font-weight: bold;
  }

  .command-output {
    opacity: 0;
    margin-bottom: 0.25rem;
    transition: opacity 0.3s;
  }

  #blinking-cursor {
    font-weight: bold;
    opacity: 1;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes tiltleftandright {
    0% {
      rotate: 0deg;
    }

    25% {
      rotate: 3deg;
    }

    75% {
      rotate: -3deg;
    }

    100% {
      rotate: 0deg;
    }
  }
</style>
