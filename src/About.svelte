<script>
  import ContentHeader from "./lib/ContentHeader.svelte";
  import { MapPin } from "lucide-svelte";

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

  // simulate typing of the command
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
</script>

<about class="flex flex-col gap-12 motion-opacity-in-0">
  <ContentHeader title="Who am I?" />
  <p class="text-lg font-geist pr-24 text-balance">
    My name is Bartosz Bak, and I'm a student and an aspiring full-stack
    software engineer who likes to craft nice things.
  </p>
  <div class="flex flex-col group h-8 hover:h-24 bg-red-100 transition-all">
    <div class="flex gap-2 items-center opacity-70 font-geist-mono">
      <MapPin size={18} />
      <span>York, United Kingdom,</span>
      <span>GMT</span>
    </div>
    <div
      class="group-hover:motion-scale-y-in-0 opacity-0 group-hover:opacity-100"
    >
      map goes here
    </div>
  </div>
  <div class="flex flex-col bg-gray-50 p-3 rounded-sm w-md">
    <p class="text-red-700 font-geist-mono mb-3 font-bold">
      bartosz@{userAgent} ~ $ <span id="command"></span><span
        id="blinking-cursor">█</span
      >
    </p>

    <p
      class="mb-1 opacity-70 transition-opacity duration-300 font-geist-mono"
      style="opacity: {shownOutputs >= 1 ? 1 : 0};"
    >
      Svelte 5, Tailwind CSS, JavaScript
    </p>
    <p
      class="mb-1 opacity-70 transition-opacity duration-300 font-geist-mono"
      style="opacity: {shownOutputs >= 2 ? 1 : 0};"
    >
      Python, Bash, Flask
    </p>
    <p
      class="mb-1 opacity-70 transition-opacity duration-300 font-geist-mono"
      style="opacity: {shownOutputs >= 3 ? 1 : 0};"
    >
      Git, Docker, Unix systems
    </p>
  </div>
  <p class="flex flex-col gap-1.5 text-md font-geist tracking-[0.025rem]">
    <span
      ><span class="mr-1">🎓</span> Studying Computer Science at the
      <span>University of York, UK.</span></span
    >
    <span
      ><span class="mr-1">🔍</span> Focused on web and backend development.</span
    >
    <span><span class="mr-1">🌟</span> Always open to new opportunities.</span>
  </p>
</about>
