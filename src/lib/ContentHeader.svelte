<script lang="ts">
  import type { Snippet } from "svelte";

  let { title, customElement } = $props<{
    title: string;
    customElement?: Snippet;
  }>();

  let showingCustomElement = $state(false);

  let titleElement: HTMLParagraphElement;

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval: number;

  function applyHackedEffect(element: HTMLParagraphElement) {
    if (!element.dataset.value) {
      element.dataset.value = element.innerText;
    }
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      element.innerText = element.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return element.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iteration >= element.dataset.value.length) {
        clearInterval(interval);
        showingCustomElement = true;
      }
      iteration += 1 / 3;
    }, 15);
  }

  $effect(() => {
    if (titleElement) {
      applyHackedEffect(titleElement);
    }
  });
</script>

<header class="flex items-center gap-4">
  <span class="text-3xl font-bold opacity-15"># </span>
  <p
    bind:this={titleElement}
    class="text-3xl font-geist-mono font-bold"
    data-value={title}
  >
    {title}
  </p>
  {#if customElement && showingCustomElement}
    {@render customElement()}
  {/if}
</header>
