<script>
  let {
    pulsating = false,
    faded = false,
    title,
    link,
    icon,
    textColor,
    backgroundColor,
    foregroundColor,
  } = $props();

  import { Github } from "lucide-svelte";
  import { Linkedin } from "lucide-svelte";
  import { Twitter } from "lucide-svelte";
  import { Instagram } from "lucide-svelte";
</script>

<main
  id={faded ? "faded" : ""}
  class="flex gap-4 h-fit bg-[{backgroundColor}] p-4 rounded-xl"
>
  <a
    href={link}
    class="p-3 bg-[{foregroundColor}] w-12 grid place-content-center rounded-md"
  >
    {#if icon === "github"}
      <Github />
    {:else if icon === "linkedin"}
      <Linkedin />
    {:else if icon === "twitter"}
      <Twitter />
    {:else if icon === "instagram"}
      <Instagram />
    {/if}
  </a>
  <div class="flex flex-col gap-1">
    <p class="text-m font-sans tracking-wide font-semibold">{title}</p>
    <a href={link} class="text-sm text-[{textColor}]">{link}</a>
  </div>
</main>

<style>
  #faded {
    opacity: 0.8;
  }

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
