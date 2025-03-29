<script>
  import ContentHeader from "./lib/ContentHeader.svelte";
  import ProjectCard from "./lib/ProjectCard.svelte";
  import MiscProjectCard from "./lib/MiscProjectCard.svelte";

  let { contentAnimationDirection } = $props();

  import sharedCalendar from "/sharedCalendar.avif";
  import whisperSite from "/whisper.avif";
  import languageLearning from "/languageLearning.avif";
  import portfolioSite from "/portfolio.avif";
  import filmsElo from "/filmsElo.avif";
  import segments from "/segments.avif";
</script>

<projects
  class="flex flex-col gap-12 motion-opacity-in-0 pr-16 {contentAnimationDirection ===
  'up'
    ? 'animate-small-fade-up'
    : 'animate-small-fade-down'}"
>
  <ContentHeader title="What have I made?" />
  <div id="projects-columns" class="grid grid-cols-3 gap-x-10">
    <div id="first-column" class="flex flex-col gap-10">
      <ProjectCard
        title="Shared calendar, notes and files"
        description="A full-stack shared calendar, notes and files system for friends and
        family. My first introduction to AWS and Supabase, with a focus on serverless."
        githubLink="https://github.com/nocdn/Non-Exam-Assessment"
        demoLink="https://github.com/nocdn/Non-Exam-Assessment"
        imageurl={sharedCalendar}
        techStack={["Supabase", "JavaScript", "S3", "Lambda", "IAM"]}
        backgroundColor="#F4F9FF"
        textColor="darkBlue"
      />
      <ProjectCard
        title="Transcription app"
        description="A web app to transcribe uploaded files into text, using the OpenAI Whisper models and Gemini's multimodal capabilities. Returns text and a .txt file download. Deployed with Flask, ffmpeg on a VPS."
        githubLink="https://github.com/nocdn/transcription-svelte"
        demoLink="https://whisper.bartoszbak.org"
        imageurl={whisperSite}
        techStack={["Svelte", "Flask", "Tailwind"]}
        backgroundColor="#FCF3FF"
        textColor="#511F7D"
      />
    </div>
    <div id="second-column" class="flex flex-col gap-10">
      <ProjectCard
        title="Ad segment remover"
        description="RESTful API (with a web interface) to remove ad segments from audio and video files."
        githubLink="https://github.com/nocdn/ad-segment-remover"
        demoLink="https://segments.bartoszbak.org"
        imageurl={segments}
        techStack={["Svelte", "Flask", "Tailwind"]}
        backgroundColor="#FFF5FE"
        textColor="#A53168"
      />
      <ProjectCard
        title="Language Learning App"
        description="A small language learning app for school coursework that can be ran locally, and works as a PWA."
        githubLink="https://github.com/nocdn/language-learning"
        demoLink=""
        imageurl={languageLearning}
        techStack={["JavaScript"]}
        backgroundColor="#FFFAF4"
        textColor="#873E00"
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
        imageurl={filmsElo}
        techStack={["JavaScript", "Svelte", "PostgreSQL"]}
        backgroundColor="#FEF7F4"
        textColor="#ca2e00"
      />
      <ProjectCard
        title="This website"
        description="How's that for recursion? This is a fairly simple website that I made to introduce myself and showcase some of my skills. It was also a way for me to learn and practice Svelte and Tailwind CSS. It also comes with some fun easter eggs."
        githubLink="https://github.com/nocdn/portfolio-website-svelte"
        demoLink="https://bartoszbak.org"
        imageurl={portfolioSite}
        techStack={["Svelte", "JavaScript", "Tailwind"]}
        backgroundColor="#FFF5FE"
        textColor="#A53168"
      />
    </div>
  </div>
  <p class="text-2xl font-bold font-mono mt-12">
    <span class="opacity-20">##</span> Miscellaneous projects:
  </p>
  <miscProjects class="w-full h-64 p-6 flex gap-10">
    <MiscProjectCard
      rotation={1.5}
      title="Minecraft account finder."
      sourceLink="https://github.com/nocdn/namesniper"
      demoLink="https://github.com/nocdn/namesniper"
      icon="UserSearch"
      colors={[
        "white",
        "white",
        "#9ADB76",
        "#8FD268",
        "#8B624B",
        "#372B1C",
        "#373B39",
        "white",
      ]}
    />
    <MiscProjectCard
      rotation={1.5}
      title="Curseforge pack downloader."
      sourceLink="https://github.com/nocdn/curseforge-modpack-downloader"
      demoLink="https://curseforge-modpack-downloader.vercel.app"
      icon="Anvil"
      colors={[
        "white",
        "white",
        "#F16436",
        "#F16436",
        "#0D0D0D",
        "#0F2B45",
        "#0F2B45",
        "white",
      ]}
    />
    <MiscProjectCard
      rotation={-1.5}
      title="Random topic for revision."
      sourceLink="https://github.com/nocdn/random-revision"
      demoLink="https://random-revision.vercel.app"
      icon="GraduationCap"
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
  </miscProjects>
</projects>
