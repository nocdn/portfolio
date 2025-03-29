<script>
  let { contentAnimationDirection } = $props();
</script>

<education
  class={contentAnimationDirection === "up"
    ? "animate-small-fade-up"
    : "animate-small-fade-down"}
>
  <p class="text-lg font-geist-mono pr-24 text-balance opacity-50">
    Education section coming soon...
  </p>
</education>
