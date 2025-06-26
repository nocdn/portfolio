<script>
</script>

<span class="relative px-2 py-2">
  <div
    class="w-1.5 h-1.5 bg-red-400 rounded-full"
    title="You are here!"
    id="pulsating-dot"
  ></div>
</span>

<style>
  #pulsating-dot {
    animation: pulse 3s infinite ease-in-out;
  }

  @keyframes pulse {
    0%,
    100% {
      /* normal state */
      transform: scale(1);
      box-shadow: 0 0 6px 1px rgba(239, 68, 68, 0.5); /* Red shadow */
      opacity: 1;
    }
    50% {
      /* pulsed state */
      transform: scale(1.25);
      box-shadow: 0 0 8px 3px rgba(239, 68, 68, 0.7); /* Red shadow */
      opacity: 0.8;
    }
  }
</style>
