<script>
  import ContentHeader from "./lib/ContentHeader.svelte";
  import Signature from "./lib/Signature.svelte";
  import Skills from "./lib/Skills.svelte";
  import { Heart } from "lucide-svelte";
  import { onMount } from "svelte";
  // accept the props
  let { contentAnimationDirection, onIndexChange = () => {} } = $props();

  // start date: feb 10, 2022, approx 15:51:51 utc
  const startDateEpoch = 1644508311000; // milliseconds

  // state variable to hold the calculated years elapsed string
  let yearsElapsedValue = $state("calculating...");

  // average milliseconds in a gregorian year (365.2425 days)
  const msPerYear = 1000 * 60 * 60 * 24 * 365.2425;

  // calculates time since start date in years to 10 decimal places
  function calculateYearsSince(epoch) {
    const now = Date.now();
    const millisecondsSince = now - epoch; // milliseconds since start
    const yearsSince = millisecondsSince / msPerYear;
    return yearsSince.toFixed(11); // format to 10 decimal places
  }

  // updates the state variable
  function updateYearsElapsed() {
    yearsElapsedValue = calculateYearsSince(startDateEpoch);
  }

  onMount(() => {
    updateYearsElapsed(); // initial calculation
    // set interval to update the value frequently
    const intervalId = setInterval(updateYearsElapsed, 25); // update every 50ms (more reasonable than 1ms)
    // clear interval on component destroy
    return () => {
      clearInterval(intervalId);
    };
  });

  let showingTimeElapsed = $state(true);

  let showingSignature = $state(false);
  setTimeout(() => {
    showingSignature = true;
  }, 7150);
</script>

<about
  class="flex flex-col gap-10.5 {contentAnimationDirection === 'up'
    ? 'animate-small-fade-up'
    : 'animate-small-fade-down'} h-full"
>
  <ContentHeader title="Who am I?" />
  <header class="flex flex-col gap-3 group">
    <div
      class="text-md pr-24 text-balance font-geist-mono font-medium"
      onmouseover={() => (showingTimeElapsed = false)}
      onmouseout={() => (showingTimeElapsed = true)}
      onblur={() => (showingTimeElapsed = true)}
      onfocus={() => (showingTimeElapsed = false)}
      role="presentation"
    >
      My name is Bartosz Bak, I have been a developer <span
        >{#if showingTimeElapsed}for {yearsElapsedValue} years.{:else}since 10th
          February '22.{/if}
      </span>
      I am a student at the University of York and an aspiring full-stack engineer
      who likes to
      <span
        class="group-hover:text-red-600/60 transition-all transition-500 group-hover:cursor-pointer relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-red-600/60 after:transition-all after:duration-300 after:ease-[cubic-bezier(0.23,1,0.32,1)] hover:after:w-full after:w-0"
        onclick={() => onIndexChange(1)}
        role="button"
        tabindex="0"
        onkeydown={(e) => e.key === "Enter" && onIndexChange(1)}
        >craft nice things</span
      >.
    </div>
  </header>
  <Skills />
  {#if showingSignature}
    <div
      class="mt-auto flex flex-col gap-3 w-fit opacity-35 hover:opacity-100 duration-400 transition-all"
    >
      <div class="font-jetbrains-mono text-sm motion-opacity-in-0">
        MADE BY BARTEK WITH <Heart
          size={14}
          class="inline-block mb-0.75"
          fill="red"
        />
      </div>
      <Signature />
    </div>
  {/if}
</about>
