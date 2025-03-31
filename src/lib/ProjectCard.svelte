<script>
  import { onMount } from "svelte";
  import tinycolor from "tinycolor2";
  import { ArrowUpRight } from "lucide-svelte";
  import ProjectChip from "./ProjectChip.svelte";

  let {
    title,
    description,
    githubLink,
    demoLink,
    imageurl = null,
    backgroundColor,
    textColor,
    techStack,
    crossSize = 8,
    crossOffset = 3.5,
  } = $props();

  let darkenedHex = $state("");
  let darkestHex = $state("");
  let slightlyDarkenedBg = $state("");

  onMount(() => {
    darkenedHex = tinycolor(backgroundColor).darken(4).toString();
    darkestHex = tinycolor(backgroundColor).darken(10).toString();
    slightlyDarkenedBg = tinycolor(backgroundColor).darken(1).toString();
  });
</script>

<card
  class="relative flex flex-col gap-5 p-3"
  style="background-color: {backgroundColor}; --text-color-prop: {textColor};"
>
  <span
    style="border-color: {textColor}; position: absolute; inset: 0; border-width: 1px; border-style: dashed; pointer-events: none; opacity: 0.3;"
    aria-hidden="true"
  ></span>

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
      style="fill: {textColor}; position: absolute; {positionStyles} opacity: 0.6; pointer-events: none; z-index: 0;"
      aria-hidden="true"
    >
      <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
    </svg>
  {/each}

  <div class="relative z-10 flex flex-col gap-5">
    {#if imageurl !== null}
      <div class="relative">
        <img
          src={imageurl}
          alt={title}
          loading="eager"
          class="w-full border border-gray-200"
        />
      </div>
    {/if}
    <div id="title-and-github" class="flex gap-2 w-full items-start pl-1">
      <p style="color: {textColor};" class="font-geist font-semibold text-md">
        {title}
      </p>
    </div>
    <links class="flex gap-2.5 w-full items-start">
      <a
        id="code-link"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        style="background-color: {darkenedHex}; color: {textColor}; border: 1px solid {darkestHex};"
        class="text-black px-2.5 py-1 text-sm flex gap-2 items-center w-fit cursor-pointer font-geist group"
      >
        source <ArrowUpRight
          size={16}
          class="group-hover:animate-pointing-top-right-xs"
        />
      </a>
      {#if demoLink != ""}
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          class="border border-gray-300 px-2.5 py-1 text-sm flex gap-1 items-center w-fit cursor-pointer group"
          style="color: {textColor}; border-color: {darkestHex};"
        >
          demo <ArrowUpRight
            size={16}
            class="group-hover:animate-pointing-top-right-xs"
          />
        </a>
      {/if}
    </links>
    <p
      id="description"
      class="text-sm font-geist-mono pl-1"
      style="color: {textColor};"
    >
      {description}
    </p>
    <chips class="flex flex-wrap gap-2">
      {#each techStack as tech}
        <ProjectChip technology={tech} />
      {/each}
    </chips>
  </div>
</card>
