<script>
  import { onMount } from "svelte";

  let {
    title,
    description,
    githubLink,
    demoLink,
    imageurl,
    backgroundColor,
    textColor,
    techStack,
  } = $props();

  import { ArrowUpRight } from "lucide-svelte";
  import { CodeXml } from "lucide-svelte";
  import ProjectChip from "./ProjectChip.svelte";

  import tinycolor from "tinycolor2";
  let darkenedHex = $state("");
  let darkestHex = $state("");

  onMount(() => {
    darkenedHex = tinycolor(backgroundColor).darken(4).toString();
    darkestHex = tinycolor(backgroundColor).darken(10).toString();
  });
</script>

<card
  class="relative flex flex-col gap-5 p-3 rounded-lg border border-gray-200"
  style="background-color: {backgroundColor};"
>
  <div class="relative">
    <img
      src={imageurl}
      alt={title}
      class="w-full rounded-lg border border-gray-200"
    />
  </div>
  <div id="title-and-github" class="flex gap-2 w-full items-start pl-1">
    <p style="color: {textColor};" class="font-geist text-md">
      {title}
    </p>
  </div>
  <links class="flex gap-2 w-full items-start">
    <a
      id="code-link"
      href={githubLink}
      style="background-color: {darkenedHex}; color: {textColor}; border: 1px solid {darkestHex};"
      class="text-black rounded-full px-3 py-1 text-sm flex gap-2 items-center w-fit cursor-pointer font-geist"
    >
      source <ArrowUpRight size={16} />
    </a>
    {#if demoLink != ""}
      <a
        href={demoLink}
        class="border border-gray-300 rounded-full px-3 py-1 text-sm flex gap-1 items-center w-fit cursor-pointer"
      >
        demo <ArrowUpRight size={16} />
      </a>
    {/if}
  </links>
  <p id="description" class="text-sm font-geist-mono pl-1">
    {description}
  </p>
  <chips class="flex flex-wrap gap-2">
    {#each techStack as tech}
      <ProjectChip technology={tech} />
    {/each}
  </chips>
</card>
