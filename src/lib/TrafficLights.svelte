<script>
  let hoveringClose = $state(false);
  let hoveringMinimize = $state(false);
  let hoveringMaximize = $state(false);
</script>

<div class="flex gap-2 items-center pb-2 pt-1">
  <div
    class="w-3 h-3"
    role="button"
    tabindex="0"
    onfocus={() => {
      hoveringClose = true;
    }}
    onblur={() => {
      hoveringClose = false;
    }}
    onmouseover={() => {
      hoveringClose = true;
    }}
    onmouseout={() => {
      hoveringClose = false;
    }}
  >
    {#if hoveringClose}
      <svg
        enable-background="new 0 0 85.4 85.4"
        viewBox="0 0 85.4 85.4"
        xmlns="http://www.w3.org/2000/svg"
        ><g clip-rule="evenodd" fill-rule="evenodd"
          ><path
            d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z"
            fill="#e24b41"
          /><path
            d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z"
            fill="#ed6a5f"
          /><g fill="#460804"
            ><path
              d="m22.5 57.8 35.3-35.3c1.4-1.4 3.6-1.4 5 0l.1.1c1.4 1.4 1.4 3.6 0 5l-35.3 35.3c-1.4 1.4-3.6 1.4-5 0l-.1-.1c-1.3-1.4-1.3-3.6 0-5z"
            /><path
              d="m27.6 22.5 35.3 35.3c1.4 1.4 1.4 3.6 0 5l-.1.1c-1.4 1.4-3.6 1.4-5 0l-35.3-35.3c-1.4-1.4-1.4-3.6 0-5l.1-.1c1.4-1.3 3.6-1.3 5 0z"
            /></g
          ></g
        ></svg
      >{:else}
      <svg
        enable-background="new 0 0 85.4 85.4"
        viewBox="0 0 85.4 85.4"
        xmlns="http://www.w3.org/2000/svg"
        ><g clip-rule="evenodd" fill-rule="evenodd"
          ><path
            d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z"
            fill="#e24b41"
          /><path
            d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z"
            fill="#ed6a5f"
          /></g
        ></svg
      >
    {/if}
  </div>
  <div
    class="w-3 h-3"
    role="button"
    tabindex="0"
    onfocus={() => {
      hoveringMinimize = true;
    }}
    onblur={() => {
      hoveringMinimize = false;
    }}
    onmouseover={() => {
      hoveringMinimize = true;
    }}
    onmouseout={() => {
      hoveringMinimize = false;
    }}
  >
    {#if hoveringMinimize}
      <svg
        enable-background="new 0 0 85.4 85.4"
        viewBox="0 0 85.4 85.4"
        xmlns="http://www.w3.org/2000/svg"
        ><g clip-rule="evenodd" fill-rule="evenodd"
          ><path
            d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z"
            fill="#e1a73e"
          /><path
            d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z"
            fill="#f6be50"
          /><path
            d="m17.8 39.1h49.9c1.9 0 3.5 1.6 3.5 3.5v.1c0 1.9-1.6 3.5-3.5 3.5h-49.9c-1.9 0-3.5-1.6-3.5-3.5v-.1c0-1.9 1.5-3.5 3.5-3.5z"
            fill="#90591d"
          /></g
        ></svg
      >
    {:else}
      <svg
        enable-background="new 0 0 85.4 85.4"
        viewBox="0 0 85.4 85.4"
        xmlns="http://www.w3.org/2000/svg"
        ><g clip-rule="evenodd" fill-rule="evenodd"
          ><path
            d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z"
            fill="#e1a73e"
          /><path
            d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z"
            fill="#f6be50"
          /></g
        ></svg
      >
    {/if}
  </div>
  <div
    class="w-3 h-3"
    role="button"
    tabindex="0"
    onfocus={() => {
      hoveringMaximize = true;
    }}
    onblur={() => {
      hoveringMaximize = false;
    }}
    onmouseover={() => {
      hoveringMaximize = true;
    }}
    onmouseout={() => {
      hoveringMaximize = false;
    }}
  >
    {#if hoveringMaximize}
      <svg
        enable-background="new 0 0 85.4 85.4"
        viewBox="0 0 85.4 85.4"
        xmlns="http://www.w3.org/2000/svg"
        ><g clip-rule="evenodd" fill-rule="evenodd"
          ><path
            d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z"
            fill="#2dac2f"
          /><path
            d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1c0 21.5 17.5 39.1 39.1 39.1z"
            fill="#61c555"
          /><path
            d="m31.2 20.8h26.7c3.6 0 6.5 2.9 6.5 6.5v26.7zm23.2 43.7h-26.8c-3.6 0-6.5-2.9-6.5-6.5v-26.8z"
            fill="#2a6218"
          /></g
        ></svg
      >
    {:else}
      <svg
        enable-background="new 0 0 85.4 85.4"
        viewBox="0 0 85.4 85.4"
        xmlns="http://www.w3.org/2000/svg"
        ><g clip-rule="evenodd" fill-rule="evenodd"
          ><path
            d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z"
            fill="#2dac2f"
          /><path
            d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z"
            fill="#61c555"
          /></g
        ></svg
      >
    {/if}
  </div>
</div>
