<script>
  import { Mail, Send } from "lucide-svelte";

  let { pulsating = false, faded = false } = $props();

  let isHovered = $state(false);
  let sendShown = $state(false);

  $effect(() => {
    if (isHovered) {
      sendShown = true;
    } else if (isHovered === false) {
      setTimeout(() => {
        sendShown = false;
      }, 300);
    }
  });
</script>

<main
  onmouseenter={() => (isHovered = true)}
  onmouseleave={() => (isHovered = false)}
  style="opacity: {faded ? 0.8 : 1}"
  class="flex gap-6 h-fit bg-[#FFF7F4] p-4 rounded-xl w-fit pr-12 relative"
>
  <a
    href="mailto:contact@bartoszbak.org"
    class="p-3 bg-[#FEE8DD] w-12 grid place-content-center rounded-md"
  >
    <!-- <img class={pulsating ? "pulsating" : ""} src={mail} alt="mail" /> -->
    <Mail />
  </a>
  <div class="flex flex-col gap-1">
    <p class="text-m font-geist tracking-wide font-semibold">
      Reach me quickly:
    </p>
    <a
      href="mailto:contact@bartoszbak.org"
      class="text-sm text-[#ED5F17] font-geist-mono">contact@bartoszbak.org</a
    >
  </div>
  {#if sendShown}
    <div
      class="absolute top-4 right-4 {isHovered
        ? 'motion-preset-fade'
        : 'motion-opacity-out-0'} motion-duration-300"
    >
      <Send size={16} class="animate-pointing-top-right-sm" />
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
