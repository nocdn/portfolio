<script>
  import {
    Github,
    Instagram,
    Linkedin,
    Twitter,
    ArrowUpRight,
  } from "lucide-svelte";
  import { onDestroy, onMount } from "svelte";

  import tinycolor from "tinycolor2";

  let {
    pulsating = false, // note: pulsating prop is defined but not used in the template below
    faded = false,
    socialIcon,
    primaryColor,
    backgroundColor,
    textColor,
    link,
    crossSize = 5, // added prop for cross size
  } = $props();

  let isHovered = $state(false);
  let arrowShown = $state(false);
  let timeoutId = null; // variable to hold timeout id
  let lightenedBg = $state("");
  let lightenedPrimary = $state("");
  let lightenedText = $state("");
  let slightlyDarkenedBg = $state("");

  $effect(() => {
    if (isHovered) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      arrowShown = true;
    } else if (isHovered === false) {
      timeoutId = setTimeout(() => {
        arrowShown = false;
        timeoutId = null;
      }, 300);
    }
  });

  onDestroy(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  });

  onMount(() => {
    lightenedBg = tinycolor(backgroundColor).lighten(1.5).toString();
    slightlyDarkenedBg = tinycolor(backgroundColor).darken(8).toString();
    lightenedPrimary = tinycolor(primaryColor).lighten(3).toString();
    lightenedText = tinycolor(textColor).lighten(3).toString();
  });
</script>

<main
  onmouseenter={() => (isHovered = true)}
  onmouseleave={() => (isHovered = false)}
  style="opacity: {faded
    ? 0.8
    : 1}; background-color: {lightenedBg}; --text-color-prop: {textColor};"
  class="flex gap-5.5 h-fit p-4 pl-5.5 relative items-center"
>
  <!-- dashed border span -->
  <span
    style="border-color: {textColor};"
    class="absolute inset-0 border border-dashed pointer-events-none opacity-30"
    aria-hidden="true"
  ></span>

  <!-- main content -->
  <a
    href="https://github.com/nocdn"
    class="p-3 w-10 h-10 grid place-content-center relative z-10"
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
    {#each Array(4) as _, i}
      {@const positionClasses = [
        "top-[-2px] left-[-2px]",
        "top-[-2px] right-[-2px]",
        "bottom-[-2px] left-[-2px]",
        "bottom-[-2px] right-[-2px]",
      ][i]}
      <svg
        width={crossSize}
        height={crossSize}
        viewBox="0 0 5 5"
        style="fill: {slightlyDarkenedBg};"
        class="absolute {positionClasses} opacity-60 pointer-events-none"
        aria-hidden="true"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
    {/each}
  </a>
  <div
    class="flex flex-col gap-1 justify-center lg:justify-start relative z-10"
  >
    <p class="text-m font-sans tracking-wide font-semibold">
      {#if socialIcon === "github"}Github
      {:else if socialIcon === "linkedin"}Linkedin
      {:else if socialIcon === "instagram"}Instagram
      {:else if socialIcon === "twitter"}Twitter{/if}
    </p>
    <a
      href="https://{link}"
      style="color: {textColor};"
      class="text-sm font-geist-mono hidden lg:block">{link}</a
    >
  </div>

  <!-- hover arrow -->
  {#if arrowShown}
    <div
      class="absolute top-3 right-3 {isHovered
        ? 'motion-preset-fade'
        : 'motion-opacity-out-0'} motion-duration-300 z-10"
    >
      <ArrowUpRight
        size={20}
        color={textColor}
        class="animate-pointing-top-right-sm"
      />
    </div>
  {/if}

  {#each Array(4) as _, i}
    {@const positionClasses = [
      "top-[-2px] left-[-2px]",
      "top-[-2px] right-[-2px]",
      "bottom-[-2px] left-[-2px]",
      "bottom-[-2px] right-[-2px]",
    ][i]}
    <svg
      width={crossSize}
      height={crossSize}
      viewBox="0 0 5 5"
      style="fill: {textColor};"
      class="absolute {positionClasses} opacity-60 pointer-events-none"
      aria-hidden="true"
    >
      <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
    </svg>
  {/each}
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
