<script>
  import { ChevronRight } from "lucide-svelte";

  let { text, isSelected, onClick = () => {} } = $props();
</script>

<button
  id="sidebar-item"
  onclick={() => onClick(0)}
  class="text-left font-geist-mono {isSelected
    ? 'text-red-900'
    : ''} font-medium cursor-pointer focus:outline-none"
  >{#if isSelected}
    <div class="flex items-center gap-1.5">
      <ChevronRight size={16} strokeWidth={3} class="mb-0.25" />
      <span>{text}</span>
    </div>
  {:else}
    {text}
  {/if}
</button>
