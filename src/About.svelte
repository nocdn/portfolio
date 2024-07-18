<script>
  let shownOutputs = 0

  function graduallyShowOutputs() {
    const interval = setInterval(() => {
      if (shownOutputs < 3) {
        shownOutputs += 1;
        console.log(shownOutputs);
      } else {
        clearInterval(interval);
      }
    }, 250);
  }

  setTimeout(graduallyShowOutputs, 1800);

  let commandPrompt = "";
  function writeCommand() {
    let promptTextContent = commandPrompt;
    const fullCommand = [" ./", "skills", ".sh"];

    for (let i = 0; i < fullCommand.length; i++) {
      setTimeout(() => {
        promptTextContent = promptTextContent + fullCommand[i];
        commandPrompt = promptTextContent;
      }, i * 100);
    }
  }

  setTimeout(writeCommand, 1500);
</script>

<div class="about-content content">
    <div class="about-header content-header">
        <span class="markdown-text"># </span>
        <h1 data-value="So who am I?">So who am I?</h1>
    </div>
    <p>
        Hey, World! I'm a student and an aspiring developer who likes to
        create nice things.
    </p>

    <div class="shell-container">
      <p class="shell-prompt">bartosz ~ $ <span>{commandPrompt}</span></p>

      <!-- {#if shownOutputs <= 0} -->
      <p class="command-output" style="opacity: {shownOutputs >= 1? 1 : 0};">Python, Shell, JavaScript</p>
      <p class="command-output" style="opacity: {shownOutputs >= 2? 1 : 0};">Web development and scripting</p>
      <p class="command-output" style="opacity: {shownOutputs >= 3? 1 : 0};">Comfortable with Unix systems and Git</p>
    </div>

    <p style="display: flex; flex-direction: column; gap: 0.35rem">
      <span class=""
        >🎓 Studying Computer Science at the
        <span class="">University of York, UK.</span></span
      >
      <span>🔍 Focused on web development.</span>
      <span>🌟 Always open to new opportunities.</span>
    </p>
</div>

<style lang="scss">
  .markdown-text {
    opacity: 0.4;
    color: darkgray;
  }

  .content-header {
    display: flex;
    gap: 1rem;
    align-items: center;

    span {
      font-size: 2rem;
      font-weight: 600;
    }
  }

  .about-content {
    display: flex;
    flex-direction: column;
    gap: 2.75rem;
  }

  .shell-container {
    display: flex;
    flex-direction: column;

    background-color: #f6f8fa;
    padding: 0.75rem;
    border-radius: 0.25rem;
    width: 50%;
  }

  .shell-prompt {
    color: #d20f39;
    margin-bottom: 0.75rem;
    font-weight: bold;
  }

  .command-output {
    opacity: 0;
    margin-bottom: 0.25rem;
    transition: opacity 0.3s;
  }
</style>