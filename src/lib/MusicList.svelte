<script>
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

  let enableVinyl = false;

  // Indicates whether any album cover (or its tooltip) is being hovered
  let isHovering = false;

  // Index of the album whose vinyl is popped-out & spinning; null means none
  let activeVinyl = null;

  const toggleVinyl = (idx) => {
    activeVinyl = activeVinyl === idx ? null : idx;
  };
</script>

<music class="flex flex-col gap-3 mt-4 ml-0.5" style="perspective: 500px;">
  <p
    class="font-jetbrains-mono text-md transition-all duration-300 {isHovering
      ? 'blur-[1px]'
      : 'blur-[0px]'}"
    class:opacity-25={isHovering}
    style:transform={isHovering ? "translateZ(-7px)" : "translateZ(0)"}
  >
    CURRENTLY LISTENING TO
  </p>

  <div class="rounded-lg flex items-center gap-2 w-fit">
    {#each musicList as music, index}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <div
        role="button"
        tabindex="0"
        class="relative w-28 h-28 rounded-lg transition-all duration-300 group cursor-pointer"
        style="transform: translate(-{index *
          52}px); z-index: {musicList.length - index};"
        onmouseenter={() => (isHovering = true)}
        onmouseleave={() => (isHovering = false)}
        onclick={() => toggleVinyl(index)}
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
        {#if enableVinyl}
          <div
            class="vinyl-wrapper absolute inset-0 m-auto -z-10 w-[85%] h-[85%] rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:translate-y-2"
            class:translate-y-28={activeVinyl === index}
          >
            <div
              class="vinyl-light w-full h-full rounded-full flex items-center justify-center overflow-hidden"
              class:spin-slow={activeVinyl === index}
            >
              <img
                src={music.cover}
                alt="{music.name} label"
                class="w-10 h-10 rounded-full object-cover border border-gray-700 shadow-inner pointer-events-none"
              />
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</music>

<style>
  .vinyl {
    background:
      repeating-radial-gradient(circle at center, #000 0 2px, #0a0a0a 2px 4px),
      radial-gradient(circle at center, #202020 0%, #000 80%);
  }

  .vinyl::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: linear-gradient(
      115deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.12) 47%,
      rgba(255, 255, 255, 0) 55%
    );
    pointer-events: none;
    mix-blend-mode: screen;
  }

  /* Silver vinyl variant */
  .vinyl-light {
    background:
      /* grooves (lighter dark tone for subtler contrast) */
      repeating-radial-gradient(
        circle at center,
        #d9d9d9 0 2px,
        #cfcfcf 2px 4px
      ),
      /* metallic sheen */
        radial-gradient(circle at center, #ffffff 0%, #d0d0d0 70%, #a9a9a9 100%);
  }

  .vinyl-light::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: linear-gradient(
      115deg,
      rgba(255, 255, 255, 0) 35%,
      rgba(255, 255, 255, 0.4) 45%,
      rgba(255, 255, 255, 0) 55%
    );
    pointer-events: none;
    mix-blend-mode: screen;
  }

  /* spin animation for popped vinyl */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spin-slow {
    animation: spin 4s linear infinite;
  }
</style>
