<script>
  import { BookOpen, GraduationCap } from "lucide-svelte";
  import { onMount } from "svelte";
  let { onCompleted = () => {}, entries = [], title = "EDUCATION" } = $props();
  let height = $state(0);
  let interval = null;

  let educationItems = $state([]);
  function graduallyShowEducation() {
    if (entries.length > 0) {
      educationItems = [entries[0]];
      height = 25;
    }

    let educationIndex = 1;
    interval = setInterval(() => {
      if (height < entries.length * 25) {
        height += 25;
        if (educationIndex < entries.length) {
          educationItems = [...educationItems, entries[educationIndex]];
          educationIndex++;
        }
      } else {
        clearInterval(interval);
      }
    }, 100);
  }

  onMount(() => {
    graduallyShowEducation();
  });

  $effect(() => {
    if (height === entries.length * 25) {
      setTimeout(() => {
        onCompleted();
      }, 175);
    }
  });
</script>

<year class="flex flex-col gap-2 group motion-preset-focus-sm">
  <heading class="flex items-center gap-3 font-jetbrains-mono text-sm">
    <GraduationCap size={20} />
    <span class="font-bold">{title}</span>
  </heading>
  <div
    class="border-l-2 border-gray-200 ml-[9.45px] pl-4"
    style="height: {height}px; transition: height 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
  >
    {#each educationItems as educationItem}
      <p
        style="height: 25px"
        class="text-md font-geist-mono text-balance opacity-50 motion-preset-blur-down-sm"
      >
        {#each educationItem.split(",") as part, i}
          {@const trimmedPart = part.trim()}
          {@const isLast = i === educationItem.split(",").length - 1}
          {@const proficientSkills = [
            "javascript",
            "sveltekit",
            "git",
            "postgresql",
            "aws",
            "tailwind css",
          ]}
          {#if proficientSkills.includes(trimmedPart.toLowerCase())}
            <span
              class="group-hover:text-red-600 transition-colors duration-200"
              >{trimmedPart}</span
            >{#if !isLast},{/if}
          {:else}
            {trimmedPart}{#if !isLast},{/if}
          {/if}
          {#if !isLast}{/if}
        {/each}
      </p>
    {/each}
  </div>
</year>
