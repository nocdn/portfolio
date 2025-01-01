<script>
  import github from "../assets/github.svg";

  let { pulsating = false, faded = false } = $props();
</script>

<main
  style="opacity: {faded ? 0.8 : 1};"
  class="flex gap-4 h-fit bg-[#FCF3FF] p-4 rounded-xl"
>
  <a
    href="https://github.com/nocdn"
    class="p-3 bg-[#EFDFFC] w-12 grid place-content-center rounded-md"
  >
    <img class={pulsating ? "pulsating" : ""} src={github} alt="Github" />
  </a>
  <div class="flex flex-col gap-1">
    <p class="text-m font-sans tracking-wide font-semibold">Github</p>
    <a href="https://github.com/nocdn" class="text-sm text-[#8A24DF]"
      >github.com/nocdn</a
    >
  </div>
</main>

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
