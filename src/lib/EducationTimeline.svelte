<script>
  import { ArrowUpRight, GraduationCap } from "lucide-svelte";
  import { onMount } from "svelte";
  let {
    onCompleted = () => {},
    entries = [],
    title = "EDUCATION",
    icon,
  } = $props();
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
      onCompleted();
    }
  });
</script>

<year class="flex flex-col gap-2 motion-preset-focus-sm">
  <heading class="flex items-center gap-3 font-jetbrains-mono text-sm">
    {#if icon}
      {@const Icon = icon}
      <Icon size={19} />
    {:else}
      <GraduationCap size={19} />
    {/if}
    <span class="font-bold">{title}</span>
  </heading>
  <div
    class="border-l-2 border-gray-200 ml-[9.35px] pl-4"
    style="height: {height}px; transition: height 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
  >
    {#each educationItems as educationItem}
      <p
        style="height: 25px"
        class="text-md font-geist-mono text-balance opacity-50 motion-preset-blur-down-sm hover:opacity-100 transition-opacity group"
      >
        <a
          href={educationItem[1]}
          target="_blank"
          class="flex items-center gap-1"
        >
          {educationItem[0]}
          <ArrowUpRight
            size={15}
            strokeWidth={2.25}
            class="group-hover:translate-x-0.5 opacity-0 group-hover:opacity-100 transition-all duration-200"
          />
        </a>
      </p>
    {/each}
  </div>
</year>
