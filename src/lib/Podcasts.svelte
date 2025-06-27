<script>
  import darknet from "/podcasts/darknet.webp";
  import factually from "/podcasts/factually.webp";
  import giants from "/podcasts/giants.webp";
  import jordan from "/podcasts/jordan.webp";
  import nudge from "/podcasts/nudge.webp";
  import offline from "/podcasts/offline.webp";
  import reply from "/podcasts/reply.webp";
  import science from "/podcasts/science.webp";
  import search from "/podcasts/search.webp";

  import { ArrowRight, ArrowLeft } from "lucide-svelte";

  const podcastList = [
    {
      name: "Darknet Diaries",
      cover: darknet,
      artist: "Jack Rhysider",
      link: "https://darknetdiaries.com/",
      description:
        "Real-life tales of hackers, data breaches, malware, botnets, cryptography, cryptocurrency, etc. From famous heists to people's personal stories.",
      best: [
        [
          102,
          "Money Maker",
          "https://podyssey.fm/podcast/itunes1296350485/episode23988614-Money-Maker-Darknet-Diaries",
        ],
        [
          111,
          "ZeuS",
          "https://podyssey.fm/podcast/itunes1296350485/episode24505826--Darknet-Diaries",
        ],
        [
          27,
          "Chartbreakers",
          "https://podyssey.fm/podcast/itunes1296350485/episode2711135-Chartbreakers-Darknet-Diaries",
        ],
        [
          116,
          "Mad Dog",
          "https://podyssey.fm/podcast/itunes1296350485/episode24827468--Darknet-Diaries",
        ],
        [
          90,
          "Jenny",
          "https://podyssey.fm/podcast/itunes1296350485/episode23247807-Jenny-Darknet-Diaries",
        ],
        [
          92,
          "Pirate Bay",
          "https://podyssey.fm/podcast/itunes1296350485/episode23463431-Pirate-Darknet-Diaries",
        ],
      ],
    },
    { name: "Factually", cover: factually, artist: "Adam Conover" },
    {
      name: "Land of Giants",
      cover: giants,
      artist: "The Land of Giants",
    },
    {
      name: "Jordan Harbinger Show",
      cover: jordan,
      artist: "Jordan Harbinger",
      description:
        "Interesting conversations with very interesting people. That's pretty much it. Lots of episodes, lots of topics and guests.",
      best: [
        [
          1,
          "Frank Abagnale",
          "https://podyssey.fm/podcast/itunes1344999619/episode1015225-Frank-Abagnale-The-Jordan-Harbinger-Show",
        ],
        [
          488,
          "Frank Bourassa (pt. 1)",
          "https://podyssey.fm/podcast/itunes1344999619/episode23130505-Frank-Bourassa-Worlds-Greatest-Counterfeiter-The-Jordan-Harbinger-Show",
        ],
        [
          489,
          "Frank Bourassa (pt. 2)",
          "https://podyssey.fm/podcast/itunes1344999619/episode23154351-Frank-Bourassa-Worlds-Greatest-Counterfeiter-The-Jordan-Harbinger-Show",
        ],
      ],
    },
    { name: "Nudge", cover: nudge, artist: "Phill Agnew" },
    { name: "Better Offline", cover: offline, artist: "Ed Zitron" },
    {
      name: "Reply All",
      cover: reply,
      artist: "Gimlet Media",
    },
    { name: "Science Vs", cover: science, artist: "Wendy Zukerman" },
    { name: "Search Engine", cover: search, artist: "PJ Vogt" },
  ];

  console.log(podcastList);

  // Indicates whether any album cover (or its tooltip) is being hovered
  let isHovering = false;

  let currentIndex = $state(0);
</script>

<podcasts
  class="flex flex-col gap-3 mt-4 ml-0.5 max-w-3xl"
  style="perspective: 500px;"
>
  <div
    class="font-jetbrains-mono text-md transition-all duration-300 {isHovering
      ? 'blur-[1px]'
      : 'blur-[0px]'} flex items-center gap-3.5"
    class:opacity-25={isHovering}
    style:transform={isHovering ? "translateZ(-7px)" : "translateZ(0)"}
  >
    FAVOURITE PODCASTS
    <div class="bg-gray-100 rounded-full flex items-center gap-1 w-fit p-2">
      {#each Array(9) as _, i}
        <div
          role="button"
          tabindex={i}
          class="bg-gray-200 rounded-full w-1.5 h-1.5 {currentIndex === i
            ? 'bg-gray-500'
            : 'bg-gray-200'} cursor-pointer transition-all duration-300"
          onmousedown={() => {
            currentIndex = i;
          }}
        ></div>
      {/each}
    </div>
    <div class="flex gap-2 items-center p-2 ml-auto mr-12">
      <ArrowLeft
        size={26}
        class="cursor-pointer bg-white rounded-full p-1 hover:bg-gray-100"
        onmousedown={() => {
          currentIndex--;
        }}
      />
      <ArrowRight
        size={26}
        onmousedown={() => {
          currentIndex++;
        }}
        class="cursor-pointer bg-white rounded-full p-1 hover:bg-gray-100"
      />
    </div>
  </div>

  <div class="rounded-md flex gap-3 w-fit">
    <div class="rounded-md min-w-40 max-w-40 min-h-40 max-h-40 relative">
      <img
        src={podcastList[currentIndex].cover}
        alt={podcastList[currentIndex].name}
        class="rounded-md"
      />
    </div>
    <div class="flex flex-col">
      <div class="flex gap-1 items-center">
        <p class="font-geist text-lg">{podcastList[currentIndex].name}</p>
        <p class="font-geist text-gray-500 mx-0.5 ml-1">•</p>
        <p class="font-geist text-gray-500">
          {podcastList[currentIndex].artist}
        </p>
      </div>
      <p class="font-geist font-normal text-gray-500">
        {podcastList[currentIndex].description}
      </p>
      {#if podcastList[currentIndex].best}
        <p
          class="font-geist-mono text-sm font-semibold text-gray-500 mt-2.5 pb-1"
        >
          BEST EPISODES:
        </p>
        <div class="flex flex-wrap gap-x-2 gap-y-0.5 items-center max-w-sm">
          {#each podcastList[currentIndex].best as best}
            <div class="flex gap-1 items-center">
              <span
                class="font-geist text-gray-500 text-xs bg-gray-100 rounded px-1"
                >{best[0]}</span
              >
              <a href={String(best[2])} class="font-geist text-gray-500"
                >{best[1]}</a
              >
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</podcasts>
