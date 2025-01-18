<script>
  import languageLearningImage from "./assets/projects-images/language-learning.avif";
  import portfolioSiteImage from "./assets/projects-images/portfolio-site.avif";
  import sharedCalendarImage from "./assets/projects-images/shared-calendar.avif";
  import filmsEloImage from "./assets/projects-images/elo-site.avif";
  import whisperSiteImage from "./assets/projects-images/whisperSite.avif";

  import ProjectCard from "./lib/ProjectCard.svelte";

  import MiscProjectCard from "./lib/MiscProjectCard.svelte";

  import { GraduationCap } from "lucide-svelte";
</script>

<div class="projects-content content pb-96">
  <div class="projects-header content-header">
    <span class="markdown-text"># </span>
    <h1 class="text-3xl" data-value="What have I made?">What have I made?</h1>
  </div>
  <div class="projects-columns grid grid-cols-3 gap-x-10">
    <div id="first-column" class="flex flex-col gap-10">
      <ProjectCard
        title="Shared calendar, notes and files"
        description="A full-stack shared calendar, notes and files system for friends and
        family. My first introduction to AWS and Supabase, with a focus on serverless."
        githubLink="https://github.com/nocdn/Non-Exam-Assessment"
        demoLink="https://github.com/nocdn/Non-Exam-Assessment"
        imageurl="src/assets/projects-images/shared-calendar.avif"
        techStack={["Supabase", "JavaScript", "S3", "Lambda", "IAM"]}
        backgroundColor="#F4F9FF"
        textColor="darkBlue"
      />
      <ProjectCard
        title="Whisper transcription app"
        description="A web app to transcribe uploaded audio into text, using the OpenAI Whisper models and Gemini's multimodal capabilities. Returns text and a .txt file download. Deployed with Flask, ffmpeg on a VPS."
        githubLink="https://github.com/nocdn/transcription-svelte"
        demoLink="https://whisper.bartoszbak.org"
        imageurl="src/assets/projects-images/whisperSite.avif"
        techStack={["Svelte", "Flask", "Tailwind"]}
        backgroundColor="#FCF3FF"
        textColor="#511F7D"
      />
    </div>
    <div id="second-column" class="flex flex-col gap-10">
      <ProjectCard
        title="Language Learning App"
        description="A small language learning app for school coursework that can be ran locally, and works as a PWA."
        githubLink="https://github.com/nocdn/language-learning"
        demoLink=""
        imageurl="src/assets/projects-images/language-learning.avif"
        techStack={["JavaScript"]}
        backgroundColor="#FFFAF4"
        textColor="#873E00"
      />
      <ProjectCard
        title="This website"
        description="How's that for recursion? This is a fairly simple website that I made to introduce myself and showcase some of my skills. It was also a way for me to learn and practice Svelte and Tailwind CSS. It also comes with some fun easter eggs."
        githubLink="https://github.com/nocdn/portfolio-website-svelte"
        demoLink="https://bartoszbak.org"
        imageurl="src/assets/projects-images/portfolio-site.avif"
        techStack={["Svelte", "JavaScript", "Tailwind"]}
        backgroundColor="#FFF5FE"
        textColor="#A53168"
      />
    </div>
    <div id="third-column" class="flex flex-col gap-10">
      <ProjectCard
        title="Elo film ranking"
        description="An over-engineered solution to a problem of having a list of things, but
        now knowing the order, ie. favourite films. This app comes in to use an
        elo system to show you all the comparisons, and then create a ranked
        table."
        githubLink="https://github.com/nocdn/films-elo"
        demoLink="https://films-elo.vercel.app/"
        imageurl="src/assets/projects-images/elo-site.avif"
        techStack={["JavaScript", "Svelte", "PostgreSQL"]}
        backgroundColor="#FEF7F4"
        textColor="#ca2e00"
      />
    </div>
  </div>
  <h2 class="text-2xl font-bold mt-12">Miscellaneous projects:</h2>
  <div id="misc-projects" class="w-full h-64 p-6 flex gap-10">
    <MiscProjectCard
      rotation={1.5}
      title="Minecraft account finder."
      link="https://google.com"
      icon="UserSearch"
    />
    <MiscProjectCard
      rotation={-1.5}
      title="Random topic for revision."
      link="https://github.com/nocdn/random-revision"
      icon="GraduationCap"
      colors={[
        "white",
        "white",
        "#d8e2dc",
        "#ffe5d9",
        "#ffcad4",
        "#f4acb7",
        "#9d8189",
        "white",
      ]}
    />
    <MiscProjectCard
      rotation={1.5}
      title="Curseforge modpack downloader."
      link="https://github.com/nocdn/curseforge-modpack-downloader"
      icon="Anvil"
      colors={[
        "white",
        "white",
        "#2b2d42",
        "#8d99ae",
        "#edf2f4",
        "#ef476f",
        "#ef233c",
        "white",
      ]}
    />
  </div>
</div>
