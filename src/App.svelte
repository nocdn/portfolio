<script>
    import Sidebar from './Sidebar.svelte';
    import About from './About.svelte';
    import Projects from './Projects.svelte';

    let selectedIndex = 0;

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();

        if (e.key === "ArrowUp") {
          
          if (selectedIndex === 0) {
            selectedIndex = 4
          } else {
            selectedIndex -= 1
          }
        } else if (e.key === "ArrowDown") {
          if (selectedIndex === 4) {
            selectedIndex = 0
          } else {
            selectedIndex += 1
          }
        }
      }
    })
</script>

<main>
    <Sidebar selectedIndex={selectedIndex} />
    <div class="main-content">
      <!-- <About /> -->
      <Projects />
    </div>
</main>

<style>
  main {
    height: 100dvh;
    display: grid;
    grid-template-columns: 20% 80%;
    width: 100dvw;
  }

  .main-content {
    padding: 8rem 4rem 0rem
  }
</style>
