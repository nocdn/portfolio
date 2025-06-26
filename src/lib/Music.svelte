<script>
  import { onMount } from "svelte";
  import cover from "/so_much_fun.webp";
</script>

<music>
  <div class="bg-red-100 w-fit relative">
    <div
      class="w-26 h-26 rounded-full bg-white border border-gray-200 grid place-content-center"
    >
      <img
        src={cover}
        alt="So Much Fun"
        class="w-24 h-24 object-cover rounded-full"
      />
    </div>
    <div class="absolute left-0 right-0 bottom-0 h-10 bg-blue-500"></div>
  </div>
</music>

<style>
  img {
    animation: spin 10s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(360deg);
    }
  }
</style>
