<script>
  import languageLearningImage from "./assets/projects-images/language-learning.avif";
  import portfolioSiteImage from "./assets/projects-images/portfolio-site.avif";
  import sharedCalendarImage from "./assets/projects-images/shared-calendar.avif";
  import filmsEloImage from "./assets/projects-images/elo-site.avif";
  import whisperSiteImage from "./assets/projects-images/whisperSite.avif";

  import ProjectCard from "./lib/ProjectCard.svelte";
</script>

<div class="projects-content content">
  <div class="projects-header content-header">
    <span class="markdown-text"># </span>
    <h1 class="text-3xl" data-value="What have I made?">What have I made?</h1>
  </div>
  <div class="projects-columns grid grid-cols-3">
    <div id="first-column" class="flex flex-col gap-8">
      <ProjectCard
        title="Shared calendar, notes and files"
        description="A full-stack shared calendar, notes and files system for friends and
        family."
        githubLink="github.com/nocdn/Non-Exam-Assessment"
        demoLink="github.com/nocdn/Non-Exam-Assessment"
        imageurl="src/assets/projects-images/shared-calendar.avif"
        techStack={["Supabase", "JavaScript", "S3", "Lambda", "IAM"]}
        backgroundColor="#F1FFF5"
        textColor="#207130"
      />
    </div>
    <div id="second-column" class="flex flex-col gap-8">
      <ProjectCard
        title="Language Learning App"
        description="A small language learning app for school coursework."
        githubLink="github.com/nocdn/language-learning"
        demoLink=""
        imageurl="src/assets/projects-images/language-learning.avif"
        techStack={["JavaScript"]}
        backgroundColor="#FFFAF4"
        textColor="#C16A03"
      />
    </div>
    <div id="third-column" class="flex flex-col gap-8">
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
        textColor="#E93500"
      />
    </div>
  </div>
</div>
