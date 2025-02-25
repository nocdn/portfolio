<script>
  let { selectedIndex, onIndexChange = () => {} } = $props();

  import pfpImage from "/pfp.webp";
  import SidebarItem from "./lib/SidebarItem.svelte";

  import { ChevronsUpDown } from "lucide-svelte";

  function handleClick(index) {
    selectedIndex = index;
    console.log("selected index:", selectedIndex);
  }

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

      if (e.key === "ArrowUp" || e.key === "k") {
        selectedIndex = selectedIndex === 0 ? 3 : selectedIndex - 1;
        onIndexChange(selectedIndex);
      } else if (e.key === "ArrowDown" || e.key === "j") {
        selectedIndex = selectedIndex === 3 ? 0 : selectedIndex + 1;
        onIndexChange(selectedIndex);
      }
    }
  });
</script>

<sidebar class="p-8 grid grid-rows-[40%_30%_30%] h-full">
  <div id="sidebar-header" class="flex flex-col justify-end h-full">
    <img
      src={pfpImage}
      class="rounded-full aspect-square w-24 mb-8"
      alt="pfp of github user nocdn"
    />
  </div>
  <div id="sidebar-items" class="flex flex-col justify-center gap-3">
    <SidebarItem
      text="About"
      isSelected={selectedIndex === 0}
      onClick={() => {
        onIndexChange(0);
      }}
    />
    <SidebarItem
      text="Projects"
      isSelected={selectedIndex === 1}
      onClick={() => {
        onIndexChange(1);
      }}
    />
    <SidebarItem
      text="Education"
      isSelected={selectedIndex === 2}
      onClick={() => {
        onIndexChange(2);
      }}
    />
    <SidebarItem
      text="Contact"
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
</sidebar>
