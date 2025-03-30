<script>
  let { selectedIndex, onIndexChange = () => {} } = $props();

  import pfpImage from "/pfp.webp";
  import SidebarItem from "./lib/SidebarItem.svelte";
  import Skybordered from "./lib/Skybordered.svelte";

  import { ChevronsUpDown, Command, Plus } from "lucide-svelte";

  let noMovement = $state(false);
  let count = 0;
  let timer = $state();

  // function to start inactivity timer
  function startTimer() {
    timer = setInterval(() => {
      if (++count === 10) {
        noMovement = true;
        console.log("Hint should now be visible");
        clearInterval(timer); // stop timer after 10 seconds
      }
    }, 1000);
  }

  // start the timer initially
  startTimer();

  function movementDetected() {
    noMovement = false;
    clearInterval(timer); // stop timer to prevent noMovement from becoming true
    console.log("Movement detected, hint disabled permanently.");
  }

  document.addEventListener("keydown", (e) => {
    movementDetected(); // detect movement on any keypress

    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "j" ||
      e.key === "k"
    ) {
      e.preventDefault();

      let newIndex = selectedIndex; // calculate new index based on current

      if (e.key === "ArrowUp" || e.key === "k") {
        newIndex = selectedIndex === 0 ? 3 : selectedIndex - 1;
      } else if (e.key === "ArrowDown" || e.key === "j") {
        newIndex = selectedIndex === 3 ? 0 : selectedIndex + 1;
      }

      // only call if the index actually changed
      if (newIndex !== selectedIndex) {
        onIndexChange(newIndex);
      }
    }
  });
</script>

<sidebar
  class="p-8 pb-10 pl-12 grid grid-rows-[40%_30%_30%] h-full opacity-50 hover:opacity-100 transition-opacity duration-300"
>
  <!-- <div id="sidebar-header" class="flex flex-col justify-center h-full">
    <img
      src={pfpImage}
      class="rounded-full aspect-square w-24 mb-12"
      alt="pfp of github user nocdn"
    />
  </div> -->
  <div id="sidebar-items" class="flex flex-col justify-start gap-3 mt-12">
    <SidebarItem
      text="ABOUT"
      isSelected={selectedIndex === 0}
      onClick={() => {
        onIndexChange(0);
      }}
    />
    <SidebarItem
      text="PROJECTS"
      isSelected={selectedIndex === 1}
      onClick={() => {
        onIndexChange(1);
      }}
    />
    <SidebarItem
      text="EDUCATION"
      isSelected={selectedIndex === 2}
      onClick={() => {
        onIndexChange(2);
      }}
    />
    <SidebarItem
      text="CONTACT"
      isSelected={selectedIndex === 3}
      onClick={() => {
        onIndexChange(3);
      }}
    />
  </div>
  <div id="sidebar-hint" class="flex flex-col justify-center">
    {#if noMovement}
      <div class="grid grid-cols-[20%_80%] opacity-40 motion-opacity-in-0 w-30">
        <ChevronsUpDown size={16} strokeWidth={2} class="mt-1" />
        <span class="text-sm">Use arrow keys or vi(m) bindings to navigate</span
        >
      </div>
    {/if}
  </div>
  <!-- <div
    class="font-geist-mono text-sm flex gap-2 items-center mt-auto hover:outline outline-gray-200 w-fit px-2 py-1 cursor-pointer"
  >
    <Command size={13} />
    <Plus size={12} strokeWidth={2.5} /> K
  </div> -->
  <Skybordered
    class="px-2 py-1 cursor-pointer flex items-center gap-2 w-fit h-fit mt-auto"
  >
    <Command size={13} />
    <Plus size={12} strokeWidth={2.5} /> K
  </Skybordered>
</sidebar>
