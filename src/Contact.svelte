<script>
  const phrases = [
    "github",
    "email",
    "linkedin",
    "phone",
    "twitter",
    "instagram",
  ];

  let changingString = $state(phrases[0]);

  const chars = "!<>-_\\/[]{}—=+*^?#________";

  function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }
</script>

<div class="education-content content h-4/6">
  <div class="education-header content-header">
    <span class="markdown-text"># </span>
    <h1 class="text-3xl" data-value="You can reach me on:">
      You can reach me on: {changingString}
    </h1>
  </div>
</div>
