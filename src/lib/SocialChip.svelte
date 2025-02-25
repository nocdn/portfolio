<script>
  import {
    Github,
    Instagram,
    Linkedin,
    Twitter,
    ArrowUpRight,
  } from "lucide-svelte";

  let {
    pulsating = false,
    faded = false,
    socialIcon,
    primaryColor,
    backgroundColor,
    textColor,
    link,
  } = $props();

  let isHovered = $state(false);
  let arrowShown = $state(false);

  $effect(() => {
    if (isHovered) {
      arrowShown = true;
    } else if (isHovered === false) {
      setTimeout(() => {
        arrowShown = false;
      }, 300);
    }
  });
</script>

<main
  onmouseenter={() => (isHovered = true)}
  onmouseleave={() => (isHovered = false)}
  style="opacity: {faded ? 0.8 : 1}; background-color: {backgroundColor};"
  class="flex gap-4 h-fit p-4 rounded-xl relative"
>
  <a
    href="https://github.com/nocdn"
    style="background-color: {primaryColor};"
    class="p-3 w-12 grid place-content-center rounded-md"
  >
    {#if socialIcon === "github"}
      <Github />
    {:else if socialIcon === "linkedin"}
      <Linkedin />
    {:else if socialIcon === "instagram"}
      <Instagram />
    {:else if socialIcon === "twitter"}
      <Twitter />
    {/if}
  </a>
  <div class="flex flex-col gap-1">
    <p class="text-m font-sans tracking-wide font-semibold">
      {#if socialIcon === "github"}Github{:else if socialIcon === "linkedin"}Linkedin{:else if socialIcon === "instagram"}Instagram{:else if socialIcon === "twitter"}Twitter{/if}
    </p>
    <a
      href="https://{link}"
      style="color: {textColor};"
      class="text-sm font-geist-mono">{link}</a
    >
  </div>
  {#if arrowShown}
    <div
      class="absolute top-3 right-3 {isHovered
        ? 'motion-preset-fade'
        : 'motion-opacity-out-0'} motion-duration-300"
    >
      <ArrowUpRight size={20} class="animate-pointing-top-right-sm" />
    </div>
  {/if}
</main>

<style>
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
