<script>
  import { MapPin } from "lucide-svelte";
  import yorkMap from "./assets/yorkmap.avif";

  let userAgent = "";
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

    // Remove the blinking cursor just before the command starts to appear
    document.getElementById("blinking-cursor").style.display = "none";

    for (let i = 0; i < fullCommand.length; i++) {
      setTimeout(() => {
        promptTextContent += fullCommand[i];
        commandPrompt = promptTextContent;
        document.getElementById("command").innerText = commandPrompt;
      }, i * 100);
    }
  }

  // Show the blinking cursor before the command is typed
  function showBlinkingCursor() {
    document.getElementById("blinking-cursor").style.display = "inline-block";
  }

  setTimeout(showBlinkingCursor, 1000); // Show cursor after 1 second
  setTimeout(writeCommand, 1500); // Start typing the command after 1.5 seconds

  let showMap = $state(false);
</script>

<div class="about-content content">
  <div class="about-header content-header">
    <span class="markdown-text"># </span>
    <h1 class="text-3xl" data-value="Who am I?">Who am I?</h1>
  </div>
  <p
    class="font-sans text-xl pr-12"
    style="font-family: 'Geist', sans-serif; font-weight: 500;"
  >
    Hey, World! My name is Bartek, and I'm a student and an aspiring full-stack
    software engineer who likes to craft nice things.
  </p>
  <div class="relative">
    <div
      onmouseover={() => {
        showMap = true;
        console.log("showMap", showMap);
      }}
      class="flex gap-2 items-center opacity-70"
    >
      <MapPin size={18} /> York, United Kingdom, GMT
    </div>
    {#if showMap}
      <div class="">
        <img
          src={yorkMap}
          alt="map of york"
          class="absolute bottom-10 mt-0 w-64 h-64 rounded-3xl shadow-lg motion-opacity-in-100 motion-translate-y-in-25 motion-blur-in-md motion-scale-in-75"
        />
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
    style="display: flex; flex-direction: column; gap: 0.35rem; font-family: 'Geist', sans-serif; letter-spacing: 0.05rem;"
  >
    <span
      >🎓 Studying Computer Science at the <span>University of York, UK.</span
      ></span
    >
    <span>🔍 Focused on web and backend development.</span>
    <span>🌟 Always open to new opportunities.</span>
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

  .tilting {
    animation: tiltleftandright 0.75s linear infinite;
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
