<script>
  import { onMount } from "svelte";
  import ContentHeader from "./lib/ContentHeader.svelte";
  import EducationTimeline from "./lib/EducationTimeline.svelte";

  let { contentAnimationDirection, visited, onVisited = () => {} } = $props();

  let firstYear = $state(true);
  let secondYear = $state(false);
  let thirdYear = $state(false);

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
  <EducationTimeline
    title="FIRST YEAR"
    entries={[
      "Foundations of Programming",
      "Introduction to Data Science",
      "Computer Architecture and Operating Systems",
      "Mathematical Foundations of Computer Science",
    ]}
    onCompleted={() => {
      secondYear = true;
    }}
  />
  {#if secondYear}
    <EducationTimeline
      title="SECOND YEAR"
      entries={[
        "Data Structures and Algorithms",
        "Operating Systems, Security and Networking",
        "Computability and Complexity",
        "Group Engineering Project",
        "Intelligent Systems Stream Modules",
        "Additional modules",
      ]}
      onCompleted={() => {
        thirdYear = true;
      }}
    />
  {/if}
</education>
