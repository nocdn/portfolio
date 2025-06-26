<script>
  import { onMount } from "svelte";

  import astroworld from "/covers/astroworld.webp";
  import era47 from "/covers/era47.webp";
  import heroes_villains from "/covers/heroes_villains.webp";
  import random_access_memories from "/covers/random_access_memories.webp";
  import rodeo from "/covers/rodeo.webp";
  import victory_lap from "/covers/victory_lap.webp";
  import we_dont_trust_you from "/covers/we_dont_trust_you.webp";
  import so_much_fun from "/covers/so_much_fun.webp";

  const musicList = [
    { name: "ASTROWORLD", cover: astroworld, artist: "Travis Scott" },
    { name: "ERA47", cover: era47, artist: "Oki" },
    {
      name: "Heroes & Villains",
      cover: heroes_villains,
      artist: "Metro Boomin",
    },
    {
      name: "Random Access Memories",
      cover: random_access_memories,
      artist: "Daft Punk",
    },
    { name: "Rodeo", cover: rodeo, artist: "Travis Scott" },
    { name: "Victory Lap", cover: victory_lap, artist: "Fred again.." },
    {
      name: "WE DON'T TRUST YOU",
      cover: we_dont_trust_you,
      artist: "Metro Boomin",
    },
    { name: "So Much Fun", cover: so_much_fun, artist: "Young Thug" },
  ];

  console.log(musicList);

  // Indicates whether any album cover (or its tooltip) is being hovered
  let isHovering = false;
</script>

<music class="flex flex-col gap-3 mt-8" style="perspective: 500px;">
  <p
    class="font-jetbrains-mono text-sm transition-all duration-300 {isHovering
      ? 'blur-[1px]'
      : 'blur-[0px]'}"
    class:opacity-25={isHovering}
    style:transform={isHovering ? "translateZ(-7px)" : "translateZ(0)"}
  >
    CURRENTLY LISTENING TO
  </p>

  <div class="rounded-lg flex items-center gap-2 w-fit">
    {#each musicList as music, index}
      <div
        role="button"
        tabindex="0"
        class="relative w-28 h-28 rounded-lg transition-all duration-300"
        style="transform: translate(-{index *
          52}px); z-index: {musicList.length - index};"
        onmouseenter={() => (isHovering = true)}
        onmouseleave={() => (isHovering = false)}
      >
        <img
          src={music.cover}
          alt={music.name}
          class="rounded-lg peer hover:translate-y-[-14px] transition-all duration-300 border border-gray-500 cursor-pointer hover:shadow-xl"
        />
        <div
          class="font-jetbrains-mono text-sm absolute -top-16 border border-gray-300 left-1/2 -translate-x-1/2 opacity-0 peer-hover:opacity-100 hover:opacity-100 transition-all duration-300 bg-white rounded-lg p-2 whitespace-nowrap pointer-events-none peer-hover:pointer-events-auto hover:pointer-events-auto peer-hover:translate-y-[-10px] hover:translate-y-[-10px] peer-hover:shadow-2xl hover:shadow-2xl blur-[2px] peer-hover:blur-[0px] hover:blur-[0px]"
        >
          <p class="text-xs font-sans text-gray-500 whitespace-nowrap">
            {music.artist}
          </p>
          <p class="font-geist whitespace-nowrap">{music.name}</p>
        </div>
      </div>
    {/each}
  </div>
</music>
