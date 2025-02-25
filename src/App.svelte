<script>
  import Sidebar from "./Sidebar.svelte";
  import About from "./About.svelte";
  import Projects from "./Projects.svelte";
  import Education from "./Education.svelte";
  import Contact from "./Contact.svelte";

  let selectedIndex = $state(0);
  function handleIndexChange(index) {
    selectedIndex = index;
  }
</script>

<main class="grid grid-cols-[20%_80%] w-dvw h-dvh motion-opacity-in-0">
  <Sidebar {selectedIndex} onIndexChange={handleIndexChange} />
  <content class="px-16 py-32 overflow-y-scroll">
    {#if selectedIndex === 0}
      <About />
    {:else if selectedIndex === 1}
      <Projects />
    {:else if selectedIndex === 2}
      <Education />
    {:else if selectedIndex === 3}
      <Contact />
    {/if}
  </content>
</main>
