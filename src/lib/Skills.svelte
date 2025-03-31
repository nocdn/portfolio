<script>
  import { Package } from "lucide-svelte";
  let height = $state(0);
  let interval = null;

  let availableSkills = [
    "TypeScript, JavaScript, Python, Bash",
    "SvelteKit, Flask, Tailwind CSS",
    "Git, Docker, Unix, Nginx, PostgreSQL",
    "AWS, GCP, Supabase, CI/CD understanding",
  ];
  let skills = $state([]);
  function graduallyShowSkills() {
    let skillIndex = 0;
    interval = setInterval(() => {
      if (height < 100) {
        height += 25;
        // Add a new skill from availableSkills when height increases
        if (skillIndex < availableSkills.length) {
          skills = [...skills, availableSkills[skillIndex]];
          skillIndex++;
        }
      } else {
        clearInterval(interval);
      }
    }, 500);
  }

  graduallyShowSkills();
</script>

<skills class="flex flex-col gap-2">
  <heading class="flex items-center gap-3 font-jetbrains-mono text-sm">
    <Package size={20} /> SKILLS
  </heading>
  <div
    class="border-l-2 border-gray-200 ml-[9.45px] pl-4"
    style="height: {height}px; transition: height 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
  >
    {#each skills as skill}
      <p
        style="height: 25px"
        class="text-md font-geist-mono text-balance opacity-50 motion-preset-blur-down"
      >
        {skill}
      </p>
    {/each}
  </div>
</skills>
