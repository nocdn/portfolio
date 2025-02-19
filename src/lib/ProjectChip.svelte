<script>
  let { technology } = $props();
</script>

{#if technology == "Supabase"}
  <main
    class="grid place-content-center p-1 px-2 rounded-lg border border-dashed w-fit h-fit text-xs border-green-900 bg-[#3BCF8E] text-white font-geistmono"
  >
    <p>Supabase</p>
  </main>
{:else if technology == "JavaScript"}
  <main
    class="grid place-content-center p-1 px-2 rounded-lg border border-dashed w-fit h-fit text-xs border-yellow-800 bg-[#FFEE8C] text-black font-geistmono"
  >
    <p>JavaScript</p>
  </main>
{:else if technology == "Tailwind"}
  <main
    class="grid place-content-center p-1 px-2 rounded-lg border border-dashed w-fit h-fit text-xs border-purple-900 bg-[#7DD3FC] text-white font-semibold font-geistmono"
  >
    <p>Tailwind</p>
  </main>
{:else if technology == "Python"}
  <main
    class="opacity-90 grid place-content-center p-1 px-2 rounded-lg border border-dashed w-fit h-fit text-xs border-blue-900 bg-[#FFDE57] text-blue-900 font-semibold font-geistmono"
  >
    <p>Python</p>
  </main>
{:else if technology == "Svelte"}
  <main
    class="grid place-content-center p-1 px-2 rounded-lg border border-dashed w-fit h-fit text-xs border-red-900 bg-[#ff3422] text-white font-geistmono"
  >
    <p>Svelte</p>
  </main>
{:else if technology == "Flask"}
  <main
    class="grid place-content-center p-1 px-2 rounded-lg border border-dashed w-fit h-fit text-xs border-gray-500 bg-[#343a40] text-white font-geistmono"
  >
    <p>Flask</p>
  </main>
{:else if technology == "S3"}
  <main
    class="grid place-content-center p-1 px-2 rounded-lg border border-dashed w-fit h-fit text-xs border-orange-100 bg-[#F6AD63] text-white font-geistmono"
  >
    <p>S3</p>
  </main>
{:else if technology == "Lambda"}
  <main
    class="grid place-content-center p-1 px-2 rounded-lg border border-dashed w-fit h-fit text-xs border-orange-100 bg-[#F6AD63] text-white font-geistmono"
  >
    <p>Lambda</p>
  </main>
{:else if technology == "IAM"}
  <main
    class="grid place-content-center p-1 px-2 rounded-lg border border-dashed w-fit h-fit text-xs border-orange-100 bg-[#F6AD63] text-white font-geistmono"
  >
    <p>IAM</p>
  </main>
{/if}
