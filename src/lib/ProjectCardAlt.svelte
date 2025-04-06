<script>
  let {
    title,
    description,
    demoLink,
    sourceLink,
    stack,
    maintained = false,
  } = $props();

  import { ArrowUpRight, Code } from "lucide-svelte";
  import Maintained from "./Maintained.svelte";

  let showArrow = $state(false);
  let isArrowLeaving = $state(false);

  let showCode = $state(false);
  let isCodeLeaving = $state(false);

  function handleMouseLeave() {
    isArrowLeaving = true;
    isCodeLeaving = true;
    setTimeout(() => {
      showArrow = false;
      isArrowLeaving = false;
    }, 200);
    setTimeout(() => {
      showCode = false;
      isCodeLeaving = false;
    }, 45);
  }

  function handleMouseEnter() {
    showArrow = true;
    isArrowLeaving = false;
    setTimeout(() => {
      showCode = true;
      isCodeLeaving = false;
    }, 50);
  }
</script>

<card
  class="rounded-xl border border-gray-200 px-4 py-3 max-w-xs flex flex-col gap-1"
  onmouseover={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  onfocus={handleMouseEnter}
  role="button"
  tabindex="0"
>
  <div class="flex gap-1.5 items-center">
    {title}
    <Maintained />
    <div class="flex gap-1.5 ml-auto items-center">
      {#if showCode}
        <Code
          onmousedown={() => {
            window.location.href = sourceLink;
          }}
          size={17}
          class="cursor-pointer {isCodeLeaving
            ? 'animate-arrow-out'
            : 'animate-arrow-in'}"
        />
      {/if}
      {#if showArrow}
        <ArrowUpRight
          onmousedown={() => {
            window.location.href = demoLink;
          }}
          size={20}
          class="cursor-pointer text-blue-800 {isArrowLeaving
            ? 'animate-arrow-out'
            : 'animate-arrow-in'}"
        />
      {/if}
    </div>
  </div>
  <p class="text-gray-500 font-jetbrains-mono text-sm text-balance">
    {description}
  </p>
  <div class="flex *:flex-wrap gap-2 mt-2">
    {#each stack as tech}
      <div
        class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors text-nowrap border-transparent bg-gray-100 px-1.5 py-0.5 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
      >
        {tech}
      </div>
    {/each}
  </div>
</card>
