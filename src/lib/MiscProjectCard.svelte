<script>
  // github is the unused icon
  import { Github } from "lucide-svelte";

  import {
    UserSearch,
    GraduationCap,
    BookMarked,
    Anvil,
    CodeXmlIcon,
    ArrowUpRight,
  } from "lucide-svelte";

  let {
    rotation,
    title,
    sourceLink,
    demoLink = "",
    icon,
    colors = [
      "white",
      "white",
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#96CEB4",
      "#FFEEAD",
      "white",
    ],
  } = $props();
  let hovering = $state(false);

  const stripeWidth = 30; // width of each stripe in pixels
  const numStripes = colors.length;

  // calculate the gradient
  const gradient = `repeating-linear-gradient(
      135deg,
      ${colors
        .map(
          (color, index) =>
            `${color} ${index * stripeWidth}px, ${color} ${(index + 1) * stripeWidth}px`
        )
        .join(", ")}
    )`;
</script>

<div class="flex flex-col h-72 w-44 justify-between">
  <div
    class="h-54 w-44 flex flex-col justify-between overflow-hidden {hovering
      ? 'rounded-xl'
      : 'rounded-xl'} border border-gray-200 relative"
    style="transform: rotate({hovering ? 0 : rotation}deg) scale({hovering
      ? 1.05
      : 1}); transition: transform 0.3s, box-shadow 0.5s; box-shadow: {hovering
      ? '0 0 20px rgba(0, 0, 0, 0.1)'
      : 'none'};"
  >
    <a
      href={sourceLink}
      class="relative h-full w-full transform-gpu"
      style="
      background-image: {gradient}; 
      background-size: {numStripes * stripeWidth}px {numStripes *
        stripeWidth}px;
      transform: perspective(1000px) translateZ({hovering ? '100px' : '0'});
      transition: transform 0.3s ease-out;"
      onmouseenter={() => (hovering = true)}
      onmouseleave={() => (hovering = false)}
    >
      {#if hovering}{/if}
    </a>
  </div>
  {#if hovering}
    <div class="motion-preset-slide-down motion-opacity-in-0 flex gap-0.5 px-1">
      <p class="text-md text-pretty">
        {title}
      </p>
      <div class="w-5 h-5 animate-pointing-top-right-md mt-0.5">
        <ArrowUpRight size={20} />
      </div>
    </div>
  {/if}
</div>
