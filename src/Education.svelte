<script>
  import { onMount } from "svelte";
  import ContentHeader from "./lib/ContentHeader.svelte";
  import EducationTimeline from "./lib/EducationTimeline.svelte";
  import { Sparkle, Sparkles, GraduationCap } from "lucide-svelte";
  import Here from "./lib/Here.svelte";

  let { contentAnimationDirection, visited, onVisited = () => {} } = $props();

  let secondYear = $state(false);
  let thirdYear = $state(false);
  let showHere = $state(false);
  onMount(() => {
    onVisited(2);
  });
</script>

<education
  class="{contentAnimationDirection === 'up'
    ? 'animate-small-fade-up'
    : 'animate-small-fade-down'} flex flex-col gap-12 motion-opacity-in-0 pr-16 pb-12"
>
  <ContentHeader title="What did I study?" enabled={!visited} />
  <EducationTimeline
    icon={Sparkle}
    title="FIRST YEAR"
    entries={[
      [
        "Foundations of Programming",
        "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00015C/latest",
      ],
      [
        "Mathematical Foundations of Computer Science",
        "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00013C/latest",
      ],
      [
        "Human-Computer Interaction",
        "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00018C/latest",
      ],
      [
        "Object-Oriented Data Structures and Algorithms",
        "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00016C/latest",
      ],
      [
        "Intro to Computer Architectures",
        "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00011C/latest",
      ],
      [
        "Formal Languages and Automata",
        "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00014C/latest",
      ],
    ]}
    onCompleted={() => {
      setTimeout(() => {
        showHere = true;
      }, 100);
      setTimeout(() => {
        secondYear = true;
      }, 175);
    }}
  />
  {#if showHere}
    <div
      class="flex items-center gap-3 text-red-700/80 dark:text-red-400/80 font-jetbrains-mono font-bold text-sm motion-preset-blur-down-md"
    >
      <Here /> I AM HERE
    </div>
  {/if}
  {#if secondYear}
    <EducationTimeline
      icon={Sparkles}
      title="SECOND YEAR"
      entries={[
        [
          "Introduction to Data Science",
          "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00028I/latest",
        ],
        [
          "Operating Systems, Security and Networking",
          "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00029I/latest",
        ],
        [
          "Computability, Complexity and Logic",
          "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00027I/latest",
        ],
        [
          "Machine Learning and Optimisation",
          "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00026I/latest",
        ],
        [
          "Systems and Software Engineering",
          "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00019I/latest",
        ],
        [
          "Advanced Computer Systems",
          "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00018I/latest",
        ],
      ]}
      onCompleted={() => {
        setTimeout(() => {
          thirdYear = true;
        }, 175);
      }}
    />
  {/if}
  {#if thirdYear}
    <EducationTimeline
      icon={GraduationCap}
      title="THIRD YEAR"
      entries={[
        [
          "Computer Science Project",
          "https://www.york.ac.uk/students/studying/manage/programmes/module-catalogue/module/COM00015H/latest",
        ],
        [
          "Option Modules",
          "https://www.york.ac.uk/study/undergraduate/courses/bsc-computer-science/#course-content",
        ],
      ]}
    />
  {/if}
</education>
