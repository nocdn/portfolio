<script>
  import { BadgeCheck } from "lucide-svelte";

  let { color = "black", highlightColor = "black" } = $props();

  let showPopover = $state(false);
  let isLeaving = $state(false);

  function handleMouseLeave() {
    isLeaving = true;
    setTimeout(() => {
      showPopover = false;
      isLeaving = false;
    }, 200);
  }

  function handleMouseEnter() {
    showPopover = true;
    isLeaving = false;
  }
</script>

<span
  role="tooltip"
  class="relative px-2 py-2"
  onfocus={handleMouseEnter}
  onmouseover={handleMouseEnter}
  onmouseleave={handleMouseLeave}
>
  <div
    class="w-1 h-1 bg-green-500 rounded-full"
    title="This project is up-to-date"
    id="pulsating-dot"
  ></div>
  {#if showPopover}
    <!-- svelte-ignore node_invalid_placement_ssr -->
    <div
      class="w-52 h-fit absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl border border-gray-200 shadow-xl z-10 p-3 font-jetbrains-mono text-sm {isLeaving
        ? 'animate-preview-popover-down'
        : 'animate-preview-popover-up'}"
    >
      <p class="text-center">
        This project is currently actively <span
          class="font-bold"
          style="color: {highlightColor};">maintained.</span
        >
      </p>
    </div>
  {/if}
</span>

<style>
  #pulsating-dot {
    animation: pulse 4s infinite ease-in-out;
  }

  @keyframes pulse {
    0%,
    100% {
      /* normal state */
      transform: scale(1);
      box-shadow: 0 0 6px 1px rgba(16, 185, 129, 0.5);
      opacity: 1;
    }
    50% {
      /* pulsed state */
      transform: scale(1.25);
      box-shadow: 0 0 8px 3px rgba(16, 185, 129, 0.7);
      opacity: 0.8;
    }
  }
</style>
