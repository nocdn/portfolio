<script>
  import pfpimage from "./assets/newpfp.webp";

  export let selectedIndex;

  function handleClick(index) {
    selectedIndex = index;
  }

  export let noMovement;
</script>

<div class="sidebar">
  <div class="sidebar-header">
    <img class="pfp" src={pfpimage} alt="profile icon of nocdn" />
  </div>

  <div class="sidebar-nav">
    <!-- svelte-ignore a11y_missing_attribute -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <a
      class="sidebar-item"
      class:sidebar-selected={selectedIndex === 0}
      on:click={() => handleClick(0)}
      >{selectedIndex === 0 ? "> About" : "About"}</a
    >
    <!-- svelte-ignore a11y_missing_attribute -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <a
      class="sidebar-item"
      class:sidebar-selected={selectedIndex === 1}
      on:click={() => handleClick(1)}
      >{selectedIndex === 1 ? "> Projects" : "Projects"}</a
    >
    <!-- svelte-ignore a11y_missing_attribute -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <a
      class="sidebar-item"
      class:sidebar-selected={selectedIndex === 2}
      on:click={() => handleClick(2)}
      >{selectedIndex === 2 ? "> Education" : "Education"}</a
    >
    <!-- svelte-ignore a11y_missing_attribute -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <a
      class="sidebar-item"
      class:sidebar-selected={selectedIndex === 3}
      on:click={() => handleClick(3)}
      >{selectedIndex === 3 ? "> Contact" : "Contact"}</a
    >
  </div>
  {#if noMovement}
    <div class="movement-indicator">
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.75739 5.04077L9.1716 6.45498L11.0001 4.62652V10H13.0001V4.62661L14.8284 6.45498L16.2426 5.04077L12 0.798126L7.75739 5.04077Z"
          fill="currentColor"
        />
        <path
          d="M16.2426 18.9593L14.8284 17.545L13.0001 19.3734V14H11.0001V19.3735L9.1716 17.545L7.75739 18.9593L12 23.2019L16.2426 18.9593Z"
          fill="currentColor"
        />
      </svg>
      <p>Use the up and down arrows to navigate</p>
    </div>
  {/if}
</div>

<style lang="scss">
  .sidebar {
    height: 100vh;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;
  }
  .sidebar-header {
    height: 35%;
    display: flex;
    align-items: flex-end;

    img {
      width: 6rem;
      height: auto;
      border-radius: 50%;
    }
  }

  .sidebar-nav {
    a {
      text-decoration: none;
      cursor: pointer;
    }

    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .sidebar-item {
    color: rgb(24, 23, 32);
  }

  .sidebar-selected {
    color: rgb(144, 31, 56);
    font-weight: 700;
  }

  .movement-indicator {
    display: flex;
    gap: 1rem;
    width: 70%;
    align-items: flex-start;

    font-size: 0.9rem;

    opacity: 0.4;

    letter-spacing: 1px;

    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;

    svg {
      width: 30%;
    }
  }
</style>
