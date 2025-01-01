<script>
  import twitter from "../assets/twitter.svg";

  let { pulsating = false, faded = false } = $props();
</script>

<div
  style="opacity: {faded ? 0.8 : 1};"
  class="flex gap-4 h-fit bg-[#F4F9FF] p-4 rounded-xl"
>
  <a
    href="https://x.com/AKBB071"
    class="p-3 bg-[#DEEDFF] w-12 grid place-content-center rounded-md"
  >
    <img class={pulsating ? "pulsating" : ""} src={twitter} alt="twitter" />
  </a>
  <div class="flex flex-col gap-1">
    <p class="text-m font-sans tracking-wide font-semibold">Twitter / X</p>
    <a href="https://x.com/AKBB071" class="text-sm text-[#217EE0]"
      >x.com/AKBB071</a
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
