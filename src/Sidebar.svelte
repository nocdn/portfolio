<script>
  import { onDestroy, onMount } from "svelte";
  import SidebarItem from "./lib/SidebarItem.svelte";
  import Skybordered from "./lib/Skybordered.svelte";

  import { ChevronsUpDown, Command, Plus } from "lucide-svelte";

  let {
    selectedIndex,
    onIndexChange = () => {},
    onCmdPalette = () => {},
  } = $props();

  let showHint = $state(false); // state to control hint visibility
  let inactivityTimer = $state(null); // timer ID
  const INACTIVITY_TIMEOUT = 10000; // 10 seconds

  // function to start or restart the inactivity timer
  function resetInactivityTimer() {
    clearTimeout(inactivityTimer); // clear existing timer
    showHint = false; // hide hint immediately on activity
    inactivityTimer = setTimeout(() => {
      // start new timer
      console.log("10 seconds inactive, showing hint.");
      showHint = true; // show hint after timeout
    }, INACTIVITY_TIMEOUT);
  }

  // function to handle any detected movement/activity
  function handleActivity() {
    resetInactivityTimer();
  }

  function handleKeyDown(e) {
    // exclude modifier keys from resetting the timer unless it's cmd/ctrl+k
    if (!e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      handleActivity(); // reset timer on most key presses
    }

    // handle cmd/ctrl+K to launch command palette
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      handleActivity(); // register as activity
      onCmdPalette();
      return;
    }

    // handle navigation keys
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "j" ||
      e.key === "k"
    ) {
      e.preventDefault();
      handleActivity(); // register navigation as activity

      let newIndex = selectedIndex;
      if (e.key === "ArrowUp" || e.key === "k") {
        newIndex = selectedIndex === 0 ? 3 : selectedIndex - 1;
      } else if (e.key === "ArrowDown" || e.key === "j") {
        newIndex = selectedIndex === 3 ? 0 : selectedIndex + 1;
      }

      if (newIndex !== selectedIndex) {
        onIndexChange(newIndex);
      }
    }
  }

  // start  timer when the component mounts
  onMount(() => {
    resetInactivityTimer(); // start the first timer
    document.addEventListener("keydown", handleKeyDown);

    // cleanup listener and timer on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(inactivityTimer);
    };
  });
</script>

<sidebar
  class="p-8 pb-10 pl-12 grid grid-rows-[40%_30%_30%] h-full opacity-40 hover:opacity-100 transition-opacity duration-300"
>
  <div id="sidebar-items" class="flex flex-col justify-start gap-3 mt-12">
    <SidebarItem
      text="ABOUT"
      isSelected={selectedIndex === 0}
      onClick={() => {
        onIndexChange(0);
        handleActivity();
      }}
    />
    <SidebarItem
      text="PROJECTS"
      isSelected={selectedIndex === 1}
      onClick={() => {
        onIndexChange(1);
        handleActivity();
      }}
    />
    <SidebarItem
      text="EDUCATION"
      isSelected={selectedIndex === 2}
      onClick={() => {
        onIndexChange(2);
        handleActivity();
      }}
    />
    <SidebarItem
      text="CONTACT"
      isSelected={selectedIndex === 3}
      onClick={() => {
        onIndexChange(3);
        handleActivity();
      }}
    />
  </div>
  <div
    id="sidebar-hint"
    class="flex flex-col justify-center h-full"
    onmouseover={handleActivity}
    role="tooltip"
    onfocus={handleActivity}
  >
    {#if showHint}
      <div class="grid grid-cols-[20%_80%] opacity-40 motion-opacity-in-0 w-30">
        <ChevronsUpDown size={16} strokeWidth={2} class="mt-1" />
        <span class="text-xs font-jetbrains-mono"
          >USE ARROW KEYS OR VI(M) BINDINGS TO NAVIGATE</span
        >
      </div>
    {/if}
  </div>
  <button
    onclick={() => {
      onCmdPalette();
      handleActivity(); // register click as activity
    }}
    class="mt-auto focus:outline-none"
  >
    <Skybordered
      class="px-2 py-1 cursor-pointer flex items-center gap-2 w-fit h-fit"
    >
      <Command size={13} />
      <Plus size={12} strokeWidth={2.5} /> K
    </Skybordered>
  </button>
</sidebar>
