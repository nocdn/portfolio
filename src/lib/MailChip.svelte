<script>
  import { Mail } from "lucide-svelte";

  let { pulsating = false, faded = false } = $props();
</script>

<div
  style="opacity: {faded ? 0.8 : 1}"
  class="flex gap-6 h-fit bg-[#FFF7F4] p-4 rounded-xl w-fit pr-12"
>
  <a
    href="mailto:contact@bartoszbak.org"
    class="p-3 bg-[#FEE8DD] w-12 grid place-content-center rounded-md"
  >
    <!-- <img class={pulsating ? "pulsating" : ""} src={mail} alt="mail" /> -->
    <Mail />
  </a>
  <div class="flex flex-col gap-1">
    <p class="text-m font-sans tracking-wide font-semibold">
      Reach me quickly:
    </p>
    <a href="mailto:contact@bartoszbak.org" class="text-sm text-[#ED5F17]"
      >contact@bartoszbak.org</a
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
