<script>
  let props = $props();
  let backgroundColor = props.backgroundColor;
  let primaryColor = props.primaryColor;
  let textColor = props.textColor;
  let icon = props.icon;
  let title = props.title;
  let link = props.link;
</script>

<div class="flex gap-4 h-fit bg-[{backgroundColor}] p-4 rounded-xl">
  <div
    class="p-3 bg-[{primaryColor}] w-12 grid place-content-center rounded-md"
  >
    <img src={icon} alt="" />
  </div>
  <div class="flex flex-col gap-1">
    <p class="text-m font-sans tracking-wide font-semibold">{title}</p>
    <p class="text-sm text-[{textColor}]">{link}</p>
  </div>
</div>

<style>
</style>
