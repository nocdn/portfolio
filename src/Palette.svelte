<script>
  import { onMount, onDestroy } from "svelte";
  import { ScanSearch, X } from "lucide-svelte";
  let { onDismiss = () => {} } = $props();

  let dismissing = $state(false);
  function dismissPalette() {
    dismissing = true;
    setTimeout(() => {
      onDismiss();
    }, 300);
  }

  let inputElement = $state();

  function handleKeydown(event) {
    if (event.key === "Escape") {
      dismissPalette();
    }
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      event.preventDefault();
      dismissPalette();
      return;
    }
    if (event.target === inputElement) {
      setTimeout(() => {
        console.log("search", searchValue);
      }, 0);
    }
  }

  onMount(() => {
    inputElement?.focus();
    setTimeout(() => {
      window.addEventListener("keydown", handleKeydown);
    }, 100);
  });

  onDestroy(() => {
    // cleanup event listener on component destroy
    window.removeEventListener("keydown", handleKeydown);
  });

  const options = {
    social_links: [
      {
        name: "Github",
        link: "https://github.com/nocdn",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/bartoszbak/",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/bartoszbak",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/bartoszbak/",
      },
    ],
    links: [
      {
        name: "CV",
        link: "https://cv.bartoszbak.org",
      },
      {
        name: "E-mail",
        link: "mailto:contact@bartoszbak.org",
      },
    ],
    projects: [
      {
        name: "Cloudflare Temp Mail",
        githubLink: "https://github.com/nocdn/cloudflare-temp-mail",
        demoLink: "",
      },
      {
        name: "Transcriptions",
        githubLink: "https://github.com/nocdn/transcriptions",
        demoLink: "https://whisper.bartoszbak.org",
      },
      {
        name: "Society Voting Platform",
        githubLink: "https://github.com/nocdn/voting",
        demoLink: "https://voting.bartoszbak.org",
      },
      {
        name: "Shared Calendar, Notes and Files",
        githubLink: "https://github.com/nocdn/Non-Exam-Assessment",
        demoLink: "",
      },
      {
        name: "Ad Segment Remover",
        githubLink: "https://github.com/nocdn/ad-segment-remover",
        demoLink: "https://segments.bartoszbak.org",
      },
      {
        name: "Psychology MCQs",
        githubLink: "https://github.com/nocdn/mcqs",
        demoLink: "https://mcqs.bartoszbak.org",
      },
      {
        name: "Language Learning App",
        githubLink: "https://github.com/nocdn/language-learning",
        demoLink: "",
      },
      {
        name: "Elo Film Ranking",
        githubLink: "https://github.com/nocdn/films-elo",
        demoLink: "https://films-elo.vercel.app/",
      },
      {
        name: "This Website",
        githubLink: "https://github.com/nocdn/portfolio",
        demoLink: "https://bartoszbak.org",
      },
      {
        name: "Minecraft Account Finder",
        githubLink: "https://github.com/nocdn/namesniper",
        demoLink: "",
      },
      {
        name: "Curseforge Pack Downloader",
        githubLink: "https://github.com/nocdn/curseforge-modpack-downloader",
        demoLink: "",
      },
      {
        name: "Random Topic for Revision",
        githubLink: "https://github.com/nocdn/random-revision",
        demoLink: "https://random-revision.vercel.app",
      },
    ],
  };

  let searchValue = $state("");
</script>

<container
  onmousedown={dismissPalette}
  role="button"
  tabindex="0"
  class="grid place-content-center w-full h-full absolute z-90 bg-black/40 {dismissing
    ? 'animate-bg-fade-out'
    : 'animate-bg-fade-in'}"
>
  <palette
    role="dialog"
    tabindex="0"
    onmousedown={(e) => e.stopPropagation()}
    class="w-md h-96 bg-white font-mono {dismissing
      ? 'animate-palette-out'
      : 'animate-palette-in'} border border-gray-200 rounded-xl overflow-hidden flex flex-col"
  >
    <search
      style="border-bottom: 1.5px solid #eaeaea"
      class="flex gap-3 items-center p-4 flex-shrink-0"
    >
      <ScanSearch size={20} class="opacity-50" />
      <input
        bind:this={inputElement}
        bind:value={searchValue}
        type="text"
        placeholder="choose a command or search..."
        class="w-full focus:outline-none font-medium font-jetbrains-mono text-sm"
      />
      <button
        class="focus:outline-none"
        onclick={dismissPalette}
        aria-label="Close command palette"
      >
        <X size={20} class="opacity-50 cursor-pointer" />
      </button>
    </search>
    <content class="flex flex-col gap-4 p-4 overflow-y-auto">
      <p class="text-sm font-jetbrains-mono font-semibold">LINKS:</p>
      <div class="flex flex-col gap-2.5">
        {#each options.links as link}
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
          >
            {link.name}
          </a>
        {/each}
      </div>
      <p class="text-sm font-jetbrains-mono font-semibold">SOCIALS:</p>
      <div class="flex flex-col gap-2.5">
        {#each options.social_links as link}
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
          >
            {link.name}
          </a>
        {/each}
      </div>
      <p class="text-sm font-jetbrains-mono font-semibold">PROJECTS:</p>
      <div class="flex flex-col gap-2.5">
        {#each options.projects as project}
          <a
            href={project.demoLink || project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
          >
            {project.name}
          </a>
        {/each}
      </div>
    </content>
  </palette>
</container>
