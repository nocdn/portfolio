<script>
  import { onMount } from "svelte";
  import { ScanSearch, X } from "lucide-svelte";
  let { onDismiss = () => {} } = $props();

  let dismissing = $state(false);
  function dismissPalette() {
    dismissing = true;
    setTimeout(() => {
      onDismiss();
      dismissing = false;
    }, 300);
  }

  // closing the palette when the esc key is pressed
  function handleKeydown(event) {
    if (event.key === "Escape") {
      dismissPalette();
    }
  }

  let inputElement = $state();
  onMount(() => {
    inputElement.focus();
    window.addEventListener("keydown", handleKeydown);
    return () => {
      // cleanup the event listener on component destroy
      window.removeEventListener("keydown", handleKeydown);
    };
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
  };
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
      : 'animate-palette-in'} border border-gray-200 rounded-xl"
  >
    <search
      style="border-bottom: 1.5px dashed #eaeaea"
      class="flex gap-3 items-center pb-3 p-4"
    >
      <ScanSearch size={20} class="opacity-50" />
      <input
        bind:this={inputElement}
        type="text"
        placeholder="choose a command or search..."
        class="w-full focus:outline-none font-medium font-jetbrains-mono"
      />
      <X
        size={20}
        class="opacity-50 cursor-pointer"
        onmousedown={dismissPalette}
      />
    </search>
    <content class="flex flex-col gap-4 p-4">
      <p class="text-sm font-jetbrains-mono font-semibold">LINKS:</p>
      <div class="flex flex-col gap-1.5">
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
      <div class="flex flex-col gap-1.5">
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
    </content>
  </palette>
</container>
