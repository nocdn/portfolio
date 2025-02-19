<script>
  // Github is the unused icon
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
  href={sourceLink}
  class="relative aspect-[9/10] w-44 flex flex-col justify-between overflow-hidden rounded-xl p-3 border"
  style="transform: rotate({hovering ? 0 : rotation}deg) scale({hovering
    ? 1.05
    : 1}); transition: transform 0.3s, box-shadow 0.5s; box-shadow: {hovering
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
    <!-- <div
      class="absolute inset-0 bg-gradient-to-t from-white opacity-80 blur-sm z-10 motion-opacity-in-0 translate-y-6"
    ></div>
    <div
      class="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-duration-500 z-20 font-geistmono"
    >
      {title}
    </div> -->
    <div
      class="h-full motion-opacity-in-0 motion-duration-500 motion-blur-in-sm z-50 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-gray-700 p-2 backdrop-blur-[3px]"
    >
      <div
        class="bg-white text-black p-2 rounded-lg motionopacity-in-0 motion-blur-in-sm text-sm border shadow-sm"
      >
        {title}
      </div>
      <div class="flex flex-col items-center gap-2 mt-2">
        <!-- svelte-ignore node_invalid_placement_ssr -->
        <a
          href={sourceLink}
          class="bg-white rounded-md font-geistmono px-2 py-0.5 flex gap-1 items-center text-sm"
        >
          source <CodeXmlIcon size={18} />
        </a>
        {#if demoLink}
          <!-- svelte-ignore node_invalid_placement_ssr -->
          <a
            href={demoLink}
            class="bg-white rounded-md font-geistmono px-2 py-0.5 flex gap-1 items-center text-sm"
          >
            demo <ArrowUpRight size={18} />
          </a>
        {/if}
      </div>
    </div>
  {/if}
</a>
