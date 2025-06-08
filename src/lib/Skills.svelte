<script>
  import { Package } from "lucide-svelte";
  let { firstTime } = $props();
  let height = $state(0);
  let blinking = $state(false);
  let interval = null;

  let availableSkills = [
    "TypeScript, JavaScript, Python, Bash",
    "SvelteKit, Flask, Tailwind CSS",
    "Unix, Nginx, Git, Docker, PostgreSQL",
    "AWS, GCP, Supabase, CI/CD understanding",
  ];
  let skills = $state([]);
  function graduallyShowSkills() {
    // immediately add first skill and increase height
    if (availableSkills.length > 0) {
      skills = [availableSkills[0]];
      height = 25;
    }

    let skillIndex = 1; // start from second skill for the intervals
    interval = setInterval(() => {
      if (height < 100) {
        height += 25;
        // add a new skill from availableSkills when height increases
        if (skillIndex < availableSkills.length) {
          skills = [...skills, availableSkills[skillIndex]];
          skillIndex++;
        }
      } else {
        clearInterval(interval); // stop when full height is reached
      }
    }, 600);
  }

  function instantlyShowSkills() {
    skills = availableSkills;
    height = 100;
  }

  if (firstTime) {
    blinking = true;
    setTimeout(() => {
      blinking = false;
      graduallyShowSkills();
    }, 3750);
  } else {
    instantlyShowSkills();
  }
</script>

<skills class="flex flex-col gap-2 group">
  <heading class="flex items-center gap-3 font-jetbrains-mono text-sm">
    <Package size={20} />
    <span class="{blinking ? 'animation-fade-in-out' : ''} font-bold"
      >SKILLS</span
    >
    <span
      class="opacity-0 group-hover:opacity-50 text-red-600 transition-opacity duration-200"
      >[MOST PROFICIENT]</span
    >
  </heading>
  <div
    class="border-l-2 border-gray-200 ml-[9.45px] pl-4"
    style="height: {height}px; transition: height 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
  >
    {#each skills as skill}
      <p
        style="height: 25px"
        class="text-md font-geist-mono text-balance opacity-50 {firstTime
          ? 'motion-preset-blur-down'
          : ''}"
      >
        {#each skill.split(",") as part, i}
          {@const trimmedPart = part.trim()}
          {@const isLast = i === skill.split(",").length - 1}
          {@const proficientSkills = [
            "javascript",
            "sveltekit",
            "git",
            "postgresql",
            "aws",
            "tailwind css",
          ]}
          {#if proficientSkills.includes(trimmedPart.toLowerCase())}
            <span
              class="group-hover:text-red-600 transition-colors duration-200"
              >{trimmedPart}</span
            >{#if !isLast},{/if}
          {:else}
            {trimmedPart}{#if !isLast},{/if}
          {/if}
          {#if !isLast}{/if}
        {/each}
      </p>
    {/each}
  </div>
</skills>

<style>
  .animation-fade-in-out {
    animation: fade-in-out 0.75s ease-in-out infinite;
  }
  @keyframes fade-in-out {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.15;
    }
  }
</style>
