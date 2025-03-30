<script>
  import { Mail, Send } from "lucide-svelte";
  import { onMount } from "svelte";
  import tinycolor from "tinycolor2";

  // add crossSize prop and define a text color for the design
  let { pulsating = false, faded = false, crossSize = 5 } = $props();
  let textColor = "#ED5F17"; // use same as email text color

  let isHovered = $state(false);
  let sendShown = $state(false);
  let slightlyDarkenedBg = $state("");

  $effect(() => {
    if (isHovered) {
      sendShown = true;
    } else if (isHovered === false) {
      setTimeout(() => {
        sendShown = false;
      }, 300);
    }
  });

  onMount(() => {
    // compute slightly darkened bg for the mail icon container (#FEE8DD)
    slightlyDarkenedBg = tinycolor("#FEE8DD").darken(8).toString();
  });
</script>

<main
  onmouseenter={() => (isHovered = true)}
  onmouseleave={() => (isHovered = false)}
  style="opacity: {faded ? 0.8 : 1}"
  class="flex gap-6 h-fit bg-[#FFF7F4] p-4 pl-5.5 rounded-xl w-fit pr-12 relative items-center"
>
  <!-- dashed border span -->
  <span
    style="border-color: {textColor};"
    class="absolute inset-0 border border-dashed pointer-events-none opacity-30"
    aria-hidden="true"
  ></span>

  <a
    href="mailto:contact@bartoszbak.org"
    class="p-3 w-10 h-10 grid place-content-center relative z-10"
  >
    <Mail />

    <!-- crosses over the mail icon container -->
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

  <div class="flex flex-col gap-1 relative z-10">
    <p class="text-m font-geist tracking-wide font-semibold">
      reach me quickly:
    </p>
    <a
      href="mailto:contact@bartoszbak.org"
      class="text-sm text-[#ED5F17] font-geist-mono"
    >
      contact@bartoszbak.org
    </a>
  </div>

  {#if sendShown}
    <div
      class="absolute top-4 right-4 {isHovered
        ? 'motion-preset-fade'
        : 'motion-opacity-out-0'} motion-duration-300 z-10"
    >
      <Send size={16} class="animate-pointing-top-right-sm" />
    </div>
  {/if}

  <!-- crosses around the mail chip -->
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
