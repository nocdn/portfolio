<script>
  import Sidebar from "./Sidebar.svelte";
  import About from "./About.svelte";
  import Projects from "./Projects.svelte";
  import Education from "./Education.svelte";
  import Contact from "./Contact.svelte";

  let selectedIndex = $state(0);
  // 'up' means the content should slide up (user navigated down)
  // 'down' means the content should slide down (user navigated up)
  let contentAnimationDirection = $state("down"); // default animation for initial load

  function handleIndexChange(newIndex) {
    // determine direction based on index change
    if (newIndex > selectedIndex || (selectedIndex === 3 && newIndex === 0)) {
      // user navigated DOWN or wrapped bottom to top
      contentAnimationDirection = "up"; // content should animate UP
    } else if (
      newIndex < selectedIndex ||
      (selectedIndex === 0 && newIndex === 3)
    ) {
      // user navigated UP or wrapped top to bottom
      contentAnimationDirection = "down"; // content should animate DOWN
    }

    // update the index *after* determining direction
    selectedIndex = newIndex;
  }
</script>

<main class="grid grid-cols-[20%_80%] w-dvw h-dvh motion-opacity-in-0">
  <Sidebar {selectedIndex} onIndexChange={handleIndexChange} />
  <content class="px-16 py-32 overflow-y-scroll">
    {#if selectedIndex === 0}
      <About {contentAnimationDirection} />
    {:else if selectedIndex === 1}
      <Projects {contentAnimationDirection} />
    {:else if selectedIndex === 2}
      <Education {contentAnimationDirection} />
    {:else if selectedIndex === 3}
      <Contact {contentAnimationDirection} />
    {/if}
  </content>
</main>
