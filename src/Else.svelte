<script>
  // this is the secret, easter egg page
  import { onMount } from "svelte";
  import ContentHeader from "./lib/ContentHeader.svelte";
  import MusicList from "./lib/MusicList.svelte";
  import Podcasts from "./lib/Podcasts.svelte";
  let { contentAnimationDirection, visited, onVisited = () => {} } = $props();

  onMount(() => {
    onVisited(4);
  });
</script>

<else
  class="{contentAnimationDirection === 'up'
    ? 'animate-small-fade-up'
    : 'animate-small-fade-down'} flex flex-col gap-12 motion-opacity-in-0 pr-16 pb-12"
>
  <ContentHeader title="What else?" enabled={true} />

  <MusicList />
  <Podcasts />
</else>
