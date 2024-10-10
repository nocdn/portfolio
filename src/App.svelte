<script>
    import Sidebar from "./Sidebar.svelte";
    import About from "./About.svelte";
    import Projects from "./Projects.svelte";
    import Education from "./Education.svelte";
    import Construction from "./Construction.svelte";

    let selectedIndex = 0;
    let hintVisible = false;
    let count = 0;
    let timer;

    // Function to start the inactivity timer
    function startTimer() {
        timer = setInterval(() => {
            if (++count === 10) {
                hintVisible = true;
                console.log("Hint should now be visible");
                clearInterval(timer); // Stop the timer after 10 seconds
            }
        }, 1000);
    }

    // Start the timer initially
    startTimer();

    // Movement detection function
    function movementDetected() {
        hintVisible = false; // Ensure hintVisible is false
        clearInterval(timer); // Stop the timer to prevent hintVisible from becoming true
        console.log("Movement detected, hint disabled permanently.");
    }

    document.addEventListener("keydown", (e) => {
        movementDetected(); // Detect movement on any keypress

        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault();

            if (e.key === "ArrowUp") {
                selectedIndex = selectedIndex === 0 ? 3 : selectedIndex - 1;
            } else if (e.key === "ArrowDown") {
                selectedIndex = selectedIndex === 3 ? 0 : selectedIndex + 1;
            }
        }
    });
</script>

<main>
    {#if window.innerWidth > 884}
        <Sidebar bind:selectedIndex noMovement={hintVisible} />
        <div class="main-content">
            {#if selectedIndex === 0}
                <About />
            {:else if selectedIndex === 1}
                <Projects />
            {:else if selectedIndex === 2}
                <Education />
            {/if}
        </div>
    {:else}
        <Construction />
    {/if}
</main>

<style>
    main {
        height: 100dvh;
        display: grid;
        grid-template-columns: 20% 80%;
        width: 100dvw;
    }

    .main-content {
        padding: 8rem 4rem 0rem;
        overflow-y: scroll;
    }
</style>
