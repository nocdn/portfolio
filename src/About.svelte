<script>
    let shownOutputs = 0;

    function graduallyShowOutputs() {
        const interval = setInterval(() => {
            if (shownOutputs < 3) {
                shownOutputs += 1;
            } else {
                clearInterval(interval);
            }
        }, 250);
    }

    setTimeout(graduallyShowOutputs, 1800);

    let commandPrompt = "";

    // Function to simulate typing of the command
    function writeCommand() {
        let promptTextContent = commandPrompt;
        const fullCommand = [" ./", "stack", ".sh"];

        // Remove the blinking cursor just before the command starts to appear
        document.getElementById("blinking-cursor").style.display = "none";

        for (let i = 0; i < fullCommand.length; i++) {
            setTimeout(() => {
                promptTextContent += fullCommand[i];
                commandPrompt = promptTextContent;
                document.getElementById("command").innerText = commandPrompt;
            }, i * 100);
        }
    }

    // Show the blinking cursor before the command is typed
    function showBlinkingCursor() {
        document.getElementById("blinking-cursor").style.display =
            "inline-block";
    }

    setTimeout(showBlinkingCursor, 1000); // Show cursor after 1 second
    setTimeout(writeCommand, 1500); // Start typing the command after 1.5 seconds
</script>

<div class="about-content content">
    <div class="about-header content-header">
        <span class="markdown-text"># </span>
        <h1 class="text-3xl" data-value="Who am I?">Who am I?</h1>
    </div>
    <p>
        Hey, World! I'm a student and an aspiring developer who likes to create
        nice things.
    </p>

    <div class="shell-container">
        <p class="shell-prompt">
            bartosz ~ $ <span id="command"></span><span id="blinking-cursor"
                >█</span
            >
        </p>

        <p class="command-output" style="opacity: {shownOutputs >= 1 ? 1 : 0};">
            Svelte 5, Tailwind CSS, JavaScript
        </p>
        <p class="command-output" style="opacity: {shownOutputs >= 2 ? 1 : 0};">
            Python, Bash, Flask
        </p>
        <p class="command-output" style="opacity: {shownOutputs >= 3 ? 1 : 0};">
            Git, Docker, Unix systems
        </p>
    </div>

    <p style="display: flex; flex-direction: column; gap: 0.35rem">
        <span
            >🎓 Studying Computer Science at the <span
                >University of York, UK.</span
            ></span
        >
        <span>🔍 Focused on web and backend development.</span>
        <span>🌟 Always open to new opportunities.</span>
    </p>
</div>

<style lang="scss">
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

    #blinking-cursor {
        font-weight: bold;
        opacity: 1;
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
