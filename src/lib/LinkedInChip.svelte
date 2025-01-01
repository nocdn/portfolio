<script>
  import linkedin from "../assets/linkedin.svg";

  let { pulsating = false, faded = false } = $props();
</script>

<div
  style="opacity: {faded ? 0.8 : 1}"
  class="flex gap-4 h-fit bg-[#F4F4FF] p-4 rounded-xl"
>
  <a
    href="https://linkedin.com/in/bartek-bak"
    class="p-3 bg-[#E0E1FD] w-12 grid place-content-center rounded-md"
  >
    <img class={pulsating ? "pulsating" : ""} src={linkedin} alt="LinkedIn" />
  </a>
  <div class="flex flex-col gap-1">
    <p class="text-m font-sans tracking-wide font-semibold">LinkedIn</p>
    <a href="https://linkedin.com/in/bartek-bak" class="text-sm text-[#2E38F1]"
      >linkedin.com/in/bartek-bak</a
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
