<!--- file: src/lib/Skybordered.svelte --->
<script>
  let {
    children,
    class: className = "",
    crossSize = 5,
    borderOnHover = true,
    bgColor = "none", // default tailwind background class
    hoverBgColor = "group-hover:bg-sky-400/5", // default tailwind hover background class
    borderColor = "border-sky-300/60", // default tailwind border class
    darkBorderColor = "dark:border-sky-300/30", // default tailwind dark border class
    crossColor = "fill-sky-300/50", // default tailwind fill class
    darkCrossColor = "dark:fill-sky-300/50", // default tailwind dark fill class
    transitionDuration = "duration-150", // added transition duration prop
    ...rest
  } = $props();
</script>

<div class="group relative px-1.5 {className}" {...rest}>
  <span
    class="absolute inset-0 border-dashed
             {borderOnHover
      ? 'border-transparent group-hover:border'
      : 'border'}
             {borderColor} {darkBorderColor} {bgColor} {hoverBgColor}
             transition {transitionDuration} ease-in-out"
  ></span>

  {@render children()}

  {#each Array(4) as _, i}
    {@const positionClasses = [
      "top-[-2px] left-[-2px]",
      "top-[-2px] right-[-2px]",
      "bottom-[-2px] left-[-2px]",
      "bottom-[-2px] right-[-2px]",
    ][i]}
    <svg
      width={crossSize}
      height={crossSize}
      viewBox="0 0 5 5"
      class="absolute {positionClasses} {crossColor} {darkCrossColor}
               {borderOnHover
        ? 'opacity-0 group-hover:opacity-100'
        : 'opacity-100'}
               transition-opacity {transitionDuration} ease-in-out"
      aria-hidden="true"
    >
      <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
    </svg>
  {/each}
</div>
