<script>
  import instagram from "../assets/instagram.svg";

  let { pulsating = false, faded = false } = $props();
</script>

<div
  style="opacity: {faded ? 0.8 : 1}"
  class="flex gap-4 h-fit bg-[#FFF5FE] p-4 rounded-xl"
>
  <a
    href="https://instagram.com/bartek_front/"
    class="p-3 bg-[#FCE0F8] w-12 grid place-content-center rounded-md"
  >
    <img class={pulsating ? "pulsating" : ""} src={instagram} alt="Instagram" />
  </a>
  <div class="flex flex-col gap-1">
    <p class="text-m font-sans tracking-wide font-semibold">Instagram</p>
    <a href="https://instagram.com/bartek_front/" class="text-sm text-[#DD20BA]"
      >instagram.com/bartek_front/</a
    >
  </div>
</div>

<style>
  .pulsating {
    animation: pulse 1s infinite;
  }

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
