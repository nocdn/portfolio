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

  function handleKeyDown(e) {
    // handle cmd/ctrl+K to launch command palette
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
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

  // set up keyboard listeners when component mounts
  onMount(() => {
    document.addEventListener("keydown", handleKeyDown);
  });

  onDestroy(() => {
    document.removeEventListener("keydown", handleKeyDown);
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
  <div class="flex flex-col justify-center h-full"></div>
  <button
    onclick={() => {
      onCmdPalette();
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
