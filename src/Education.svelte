<script>
  import { onMount } from "svelte";
  import ContentHeader from "./lib/ContentHeader.svelte";

  let { contentAnimationDirection, visited, onVisited = () => {} } = $props();

  onMount(() => {
    onVisited(2);
  });
</script>

<education
  class="{contentAnimationDirection === 'up'
    ? 'animate-small-fade-up'
    : 'animate-small-fade-down'} flex flex-col gap-12 motion-opacity-in-0 pr-16 pb-12"
>
  <ContentHeader title="What did I study?" enabled={!visited} />
</education>
