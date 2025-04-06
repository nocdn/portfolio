<script>
  let { contentAnimationDirection } = $props();
  import ProjectCardAlt from "./lib/ProjectCardAlt.svelte";
  import ContentHeader from "./lib/ContentHeader.svelte";
</script>

<education
  class="{contentAnimationDirection === 'up'
    ? 'animate-small-fade-up'
    : 'animate-small-fade-down'} flex flex-col gap-12 motion-opacity-in-0 pr-16 pb-12"
>
  <ContentHeader title="What did I study?" />
  <ProjectCardAlt
    title="Transcription app"
    description="Full-stack, containerized web app to transcribe uploaded files into text, using various STT providers, including OpenAI's Whisper, or Gemini's multimodal capabilities. Returns text and a .txt file download. Deployed with Flask, ffmpeg on a VPS."
    demoLink="https://whisper.bartoszbak.org"
    sourceLink="https://github.com/nocdn/transcriptions"
    stack={["Python", "Java", "C++", "Svelte", "Flask"]}
    maintained={true}
  />
</education>
