<script>
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

  import { Github } from "lucide-svelte";
  import { ArrowUpRight } from "lucide-svelte";
  import { CodeXml } from "lucide-svelte";
  import ProjectChip from "./ProjectChip.svelte";

  import Supabase from "./project-chips/Supabase.svelte";
</script>

<div
  id="main-container"
  class="relative flex flex-col gap-5 p-3 rounded-lg max-w-72 border"
  style="background-color: {backgroundColor};"
>
  <div class="relative">
    <img src={imageurl} alt={title} class="w-full rounded-lg border" />
  </div>
  <div id="title-and-github" class="flex gap-2 w-full items-start pl-1">
    <p style="color: {textColor};" class="font-geist text-md">
      {title}
    </p>
  </div>
  <links class="flex gap-2 w-full items-start">
    <a
      href={githubLink}
      class="bg-gray-100 hover:bg-gray-200 text-black rounded-full px-3 py-1 text-sm flex gap-2 items-center w-fit cursor-pointer"
    >
      source <CodeXml size={16} />
    </a>
    {#if demoLink != ""}
      <a
        href={demoLink}
        class="bg-gray-100 hover:bg-gray-200 text-black rounded-full px-3 py-1 text-sm flex gap-1 items-center w-fit cursor-pointer"
      >
        demo <ArrowUpRight size={16} />
      </a>
    {/if}
  </links>
  <p id="description" class="text-sm font-mono">
    {description}
  </p>
  <chips class="flex flex-wrap gap-2">
    {#each techStack as tech}
      <ProjectChip technology={tech} />
    {/each}
  </chips>
</div>
