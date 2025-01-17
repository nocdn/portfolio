<script>
  // Github is the unused icon
  import { Github } from "lucide-svelte";

  import { UserSearch } from "lucide-svelte";
  import { GraduationCap } from "lucide-svelte";
  import { BookMarked } from "lucide-svelte";
  import { Anvil } from "lucide-svelte";

  let {
    rotation,
    title,
    link,
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

  const stripeWidth = 30; // Width of each stripe in pixels
  const numStripes = colors.length;

  // Calculate the gradient
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

<a
  href={link}
  class="relative aspect-[9/10] w-44 flex flex-col justify-between overflow-hidden rounded-xl p-3 border"
  style="transform: rotate({hovering
    ? 0
    : rotation}deg); transition: transform 0.3s, box-shadow 0.5s; box-shadow: {hovering
    ? '0 0 20px rgba(0, 0, 0, 0.1)'
    : 'none'}; background-image: {gradient}; background-size: {numStripes *
    stripeWidth}px {numStripes * stripeWidth}px;"
  onmouseenter={() => (hovering = true)}
  onmouseleave={() => (hovering = false)}
>
  {#if icon === "UserSearch"}
    <UserSearch />
  {:else if icon === "GraduationCap"}
    <GraduationCap />
  {:else if icon === "BookMarked"}
    <BookMarked />
  {:else if icon === "Anvil"}
    <Anvil />
  {/if}
  {#if hovering}
    <div
      class="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-duration-500 backdrop-blur-md"
    >
      {title}
    </div>
  {/if}
</a>
