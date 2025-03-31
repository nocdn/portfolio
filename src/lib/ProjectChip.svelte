<script>
  import tinycolor from "tinycolor2";

  let { technology } = $props();

  const techStyles = {
    Supabase: {
      bgColor: "#3BCF8E",
      textColor: "#FFFFFF",
      borderColor: "#166534",
      isSemibold: false,
      opacity: 1,
    },
    JavaScript: {
      bgColor: "#FFEE8C",
      textColor: "#000000",
      borderColor: "#92400E",
      isSemibold: false,
      opacity: 1,
    },
    TypeScript: {
      bgColor: "#2F74C0",
      textColor: "#FFFFFF",
      borderColor: "#FFFFFF",
      isSemibold: false,
      opacity: 1,
    },
    Tailwind: {
      bgColor: "#7DD3FC",
      textColor: "#FFFFFF",
      borderColor: "#5B21B6",
      isSemibold: true,
      opacity: 1,
    },
    Python: {
      bgColor: "#FFDE57",
      textColor: "#1E40AF",
      borderColor: "#1E40AF",
      isSemibold: true,
      opacity: 0.9,
    },
    Svelte: {
      bgColor: "#ff3422",
      textColor: "#FFFFFF",
      borderColor: "#7F1D1D",
      isSemibold: false,
      opacity: 1,
    },
    SvelteKit: {
      bgColor: "#ff3422",
      textColor: "#FFFFFF",
      borderColor: "#7F1D1D",
      isSemibold: false,
      opacity: 1,
    },
    Flask: {
      bgColor: "#343a40",
      textColor: "#FFFFFF",
      borderColor: "#6B7280",
      isSemibold: false,
      opacity: 1,
    },
    S3: {
      bgColor: "#F6AD63",
      textColor: "#FFFFFF",
      borderColor: "#FFEDD5",
      isSemibold: false,
      opacity: 1,
    },
    Lambda: {
      bgColor: "#F6AD63",
      textColor: "#FFFFFF",
      borderColor: "#FFEDD5",
      isSemibold: false,
      opacity: 1,
    },
    IAM: {
      bgColor: "#F6AD63",
      textColor: "#FFFFFF",
      borderColor: "#FFEDD5",
      isSemibold: false,
      opacity: 1,
    },
    Default: {
      bgColor: "#E5E7EB",
      textColor: "#1F2937",
      borderColor: "#9CA3AF",
      isSemibold: false,
      opacity: 1,
    },
  };

  let currentStyle = $derived(techStyles[technology] || techStyles.Default);
  let slightlyDarkenedBg = $derived(
    tinycolor(currentStyle.bgColor).darken(8).toString()
  );
  // Calculate a darker color for the foreground crosses based on bgColor
  let darkenedFgCrossColor = $derived(
    tinycolor(currentStyle.bgColor).darken(30).toString()
  );

  let crossSize = 4;
  let crossOffset = 2.65;
</script>

{#if currentStyle}
  <main
    class="relative grid place-content-center p-1 px-2 border border-dashed w-fit h-fit text-xs font-geist-mono {currentStyle.isSemibold
      ? 'font-semibold'
      : ''}"
    style="background-color: {currentStyle.bgColor}; border-color: {currentStyle.borderColor}; opacity: {currentStyle.opacity}; --text-color-prop: {currentStyle.textColor};"
  >
    <!-- Background crosses (using slightlyDarkenedBg) -->
    {#each Array(4) as _, i}
      {@const positionStyles = [
        `top: -${crossOffset}px; left: -${crossOffset}px;`,
        `top: -${crossOffset}px; right: -${crossOffset}px;`,
        `bottom: -${crossOffset}px; left: -${crossOffset}px;`,
        `bottom: -${crossOffset}px; right: -${crossOffset}px;`,
      ][i]}
      <svg
        width={crossSize}
        height={crossSize}
        viewBox="0 0 5 5"
        style="fill: {slightlyDarkenedBg}; position: absolute; {positionStyles} opacity: 0.6; pointer-events: none; z-index: 0;"
        aria-hidden="true"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
    {/each}

    <!-- Foreground crosses (using darkenedFgCrossColor) -->
    {#each Array(4) as _, i}
      {@const positionStyles = [
        `top: -${crossOffset}px; left: -${crossOffset}px;`,
        `top: -${crossOffset}px; right: -${crossOffset}px;`,
        `bottom: -${crossOffset}px; left: -${crossOffset}px;`,
        `bottom: -${crossOffset}px; right: -${crossOffset}px;`,
      ][i]}
      <svg
        width={crossSize}
        height={crossSize}
        viewBox="0 0 5 5"
        style="fill: {darkenedFgCrossColor}; position: absolute; {positionStyles} opacity: 0.6; pointer-events: none; z-index: 0;"
        aria-hidden="true"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
    {/each}

    <p class="relative z-10" style="color: var(--text-color-prop);">
      {technology}
    </p>
  </main>
{/if}
