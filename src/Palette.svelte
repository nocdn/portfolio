<script>
  import { onMount, onDestroy } from "svelte";
  import { ScanSearch, X } from "lucide-svelte";
  let { onDismiss = () => {}, onSecret = () => {} } = $props();

  let dismissing = $state(false);
  function dismissPalette() {
    dismissing = true;
    setTimeout(() => {
      onDismiss();
    }, 300);
  }

  let inputElement = $state();

  let searchValue = $state("");

  // index of the currently highlighted command
  let selectedIndex = $state(0);

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

  /* --------------------------------------------------
   * Sections and filtered lists
   * -------------------------------------------------- */

  const groups = [
    {
      label: "LINKS",
      raw: options.links,
    },
    {
      label: "SOCIALS",
      raw: options.social_links,
    },
    {
      label: "PROJECTS",
      raw: options.projects.map((p) => ({
        name: p.name,
        link: p.demoLink || p.githubLink,
      })),
    },
    {
      label: "",
      raw: [
        {
          name: "More about me",
          link: "special:more-about-me",
          keywords: ["secret", "easter", "easter egg", "surprise", "hidden"],
        },
      ],
    },
  ];

  // sections with filtering applied and global indices for navigation
  let sections = $derived.by(() => {
    const q = searchValue.trim().toLowerCase();
    let counter = 0;
    return groups
      .map((g) => {
        const matcher = (it) => {
          if (it.name.toLowerCase().includes(q)) return true;
          return it.keywords?.some((k) => k.toLowerCase().includes(q));
        };

        const items = (q === "" ? g.raw : g.raw.filter(matcher)).map((it) => ({
          ...it,
          idx: counter++,
        }));
        return { label: g.label, items };
      })
      .filter((s) => s.items.length);
  });

  // flat list for keyboard navigation
  let flatItems = $derived.by(() => sections.flatMap((s) => s.items));

  // whenever the search text changes, reset the highlighted item to the first result
  $effect(() => {
    searchValue; // track dependency
    selectedIndex = 0;
  });

  // ensure the highlighted element stays in view
  $effect(() => {
    selectedIndex; // track
    const el = document.querySelector(`a[data-idx='${selectedIndex}']`);
    el?.scrollIntoView({ block: "nearest" });
  });

  function moveSelection(delta) {
    const len = flatItems.length;
    const next = selectedIndex + delta;
    if (next < 0 || next >= len) return; // stop at ends, no wrap
    selectedIndex = next;
  }

  function activateSelected() {
    const item = flatItems[selectedIndex];
    item && handleItemSelect(item);
  }

  function handleItemSelect(item) {
    if (item.link === "special:more-about-me") {
      onSecret();
      dismissPalette();
    } else {
      window.open(item.link, "_blank", "noopener,noreferrer");
      dismissPalette();
    }
  }

  function getItemClass(i) {
    return `text-sm font-medium px-2 py-1 rounded ${
      i === selectedIndex
        ? "bg-gray-100 text-gray-900"
        : "text-gray-600 hover:text-gray-900"
    }`;
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      dismissPalette();
    }
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      event.preventDefault();
      dismissPalette();
      return;
    }

    // keyboard navigation (works regardless of where focus is inside the palette)
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveSelection(1);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveSelection(-1);
      return;
    }
    if (event.key === "Enter") {
      // activate the currently selected command
      event.preventDefault();
      activateSelected();
      return;
    }
  }
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
    <content
      class="flex flex-col gap-3 p-4 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      {#each sections as sec}
        {#if sec.label}
          <p class="text-sm font-jetbrains-mono font-semibold mt-2">
            {sec.label}:
          </p>
        {/if}
        <div class="flex flex-col gap-0">
          {#each sec.items as item}
            <a
              href={item.link.startsWith("special:") ? "#" : item.link}
              target="_blank"
              rel="noopener noreferrer"
              data-idx={item.idx}
              class={getItemClass(item.idx)}
              onclick={(_) => {
                handleItemSelect(item);
              }}
            >
              {item.name}
            </a>
          {/each}
        </div>
      {/each}
      {#if flatItems.length === 0}
        <p class="text-sm text-gray-400 px-2">No results</p>
      {/if}
    </content>
  </palette>
</container>
