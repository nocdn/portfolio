<script>
    import languageLearningImage from "./assets/projects-images/language-learning.png";
    import portfolioSiteImage from "./assets/projects-images/portfolio-site.png";
    import sharedCalendarImage from "./assets/projects-images/shared-calendar.png";

    let shownProjects = 0;

    function graduallyShowProjects() {
        const interval = setInterval(() => {
            if (shownProjects < 5) {
                shownProjects += 1;
                console.log(shownProjects);
            } else {
                clearInterval(interval);
            }
        }, 200);
    }

    graduallyShowProjects();
</script>

<div class="projects-content content">
    <div class="projects-header content-header">
        <span class="markdown-text"># </span>
        <h1 data-value="What have I made?">What have I made?</h1>
    </div>
    <div class="projects-grid">
        <div
            class="project-card lightGreen"
            style="opacity: {shownProjects >= 1 ? 1 : 0};"
        >
            <img
                src={sharedCalendarImage}
                alt="a screenshot of a shared calendar"
                class="project-image"
            />
            <h4 class="project-heading">
                Shared calendar, notes and files<a
                    href="https://github.com/nocdn/Non-Exam-Assessment"
                    target="_blank"
                    style="color: currentColor;"
                    ><svg
                        viewBox="0 0 256 250"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                    >
                        <path
                            d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                        /></svg
                    ></a
                >
            </h4>
            <p class="project-description">
                A full-stack shared calendar, notes and files system for friends
                and family.
            </p>
            <div class="stack-chips">
                <span class="stack-chip supabase">Supabase</span>
                <span class="stack-chip js">JavaScript</span>
                <span class="stack-chip aws">S3</span>
                <span class="stack-chip aws">Lambda</span>
                <span class="stack-chip aws">IAM</span>
            </div>
        </div>

        <div
            class="project-card lightOrange"
            style="opacity: {shownProjects >= 2 ? 1 : 0};"
        >
            <img
                src={languageLearningImage}
                alt="a screenshot of a language learning app"
                class="project-image"
            />
            <h4 class="project-heading">
                Language Learning App<a
                    href="https://github.com/nocdn/language-learning"
                    target="_blank"
                    style="color: currentColor;"
                    ><svg
                        viewBox="0 0 256 250"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                    >
                        <path
                            d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                        /></svg
                    ></a
                >
            </h4>
            <p class="project-description">
                A small language learning app for school coursework.
            </p>
            <div class="stack-chips">
                <span class="stack-chip js">JavaScript</span>
            </div>
        </div>

        <div
            class="project-card lightRed"
            style="opacity: {shownProjects >= 3 ? 1 : 0};"
        >
            <img
                src={portfolioSiteImage}
                alt="a screenshot of this website"
                class="project-image"
            />
            <h4 class="project-heading">
                This website<a
                    href="https://github.com/nocdn/portfolio-website-svelte"
                    target="_blank"
                    style="color: currentColor;"
                    ><svg
                        viewBox="0 0 256 250"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                    >
                        <path
                            d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                        /></svg
                    ></a
                >
            </h4>
            <p class="project-description">
                How's that for recursion? This is a fairly simple website that I
                made to introduce myself and showcase some of my skills. It was
                also a way for me to learn and practice Svelte.
            </p>
            <div class="stack-chips">
                <span class="stack-chip svelte">Svelte</span>
                <span class="stack-chip js">JavaScript</span>
            </div>
        </div>

        <div
            class="project-card lightBlue"
            style="opacity: {shownProjects >= 4 ? 1 : 0};"
        >
            <img
                src={portfolioSiteImage}
                alt="a screenshot of a language learning app"
                class="project-image"
            />
            <h4 class="project-heading">
                Elo ranking tool<a
                    href="https://github.com/nocdn/films-elo"
                    target="_blank"
                    style="color: currentColor;"
                    ><svg
                        viewBox="0 0 256 250"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                    >
                        <path
                            d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                        /></svg
                    ></a
                >
            </h4>
            <p class="project-description">
                An over-engineered solution to a problem of having a list of
                things, but now knowing the order, ie. favourite films. This app
                comes in to use an elo system to show you all the comparisons,
                and then create a ranked table.
            </p>
            <div class="stack-chips">
                <span class="stack-chip svelte">Svelte</span>
                <span class="stack-chip js">JavaScript</span>
            </div>
        </div>

        <div
            class="project-card lightPurple"
            style="opacity: {shownProjects >= 5 ? 1 : 0};"
        >
            <img
                src={portfolioSiteImage}
                alt="a screenshot of a language learning app"
                class="project-image"
            />
            <h4 class="project-heading">
                Whisper transcription app<span
                    ><svg
                        viewBox="0 0 256 250"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                    >
                        <path
                            d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                        /></svg
                    ></span
                >
            </h4>
            <p class="project-description">
                A web app to transcribe uploaded audio into text, using the
                OpenAI Whisper model. Returns text and a .txt file download.
                Deployed with Flask, ffmpeg on a VPS.
            </p>
            <div class="stack-chips">
                <span class="stack-chip js">JavaScript</span>
                <span class="stack-chip python">Python</span>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .projects-content {
        margin-bottom: 4rem;
    }
    .projects-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-left: 2rem;
        row-gap: 5rem;
        column-gap: 2.5rem;
    }

    .project-card {
        min-width: 0;
        max-width: 24rem;
        // height: 24rem;
        // background-color: #fffee0;
        padding: 0.5rem;
        border-radius: 0.75rem;
        display: flex;
        flex-direction: column;

        transition: opacity 0.5s;

        img {
            width: 100%;
            border-radius: 0.4rem;
            margin-bottom: 1rem;
        }
        .project-heading {
            padding: 0.5rem;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji",
                "Segoe UI Emoji";
            font-size: 1.1rem;

            display: flex;
            justify-content: space-between;
        }

        .project-description {
            padding: 0.5rem;
            font-size: 0.75rem;
            height: 100%;
        }
    }

    .stack-chips {
        display: flex;
        flex-wrap: wrap; // Enable flex items to wrap to the next line
        gap: 0.75rem;
        padding: 0.5rem;
        border-radius: 0 0 0.4rem 0.4rem;
    }

    .lightOrange {
        background-color: #fceed8;

        .project-heading {
            color: #702f1a;
        }
    }

    .lightGreen {
        background-color: #e8f9e9;

        .project-heading {
            color: #144414;
        }
    }

    .lightRed {
        background-color: #f9e3e2;

        .project-heading {
            color: #6a1d19;
        }
    }

    .lightBlue {
        background-color: #d9e9fd;

        .project-heading {
            color: #181c44;
        }
    }

    .lightPurple {
        background-color: #f8e9f9;

        .project-heading {
            color: #4c1f4c;
        }
    }
    .stack-chip {
        font-size: 0.75rem;
        padding: 0.25rem 0.35rem;
        border-radius: 0.35rem;
    }
    .js {
        background-color: #ffee8c;
        outline: 1px dashed #c1ac3a;
    }
    .supabase {
        background-color: #3ecf8e;
        outline: 1px dashed #2a8a5f;
        color: white;
    }
    .aws {
        background-color: #f6ad63;
        outline: 1px dashed #c1793a7b;
        color: white;
    }
    .svelte {
        background-color: #ff3e00;
        outline: 1px dashed #c10000;
        color: white;
    }
    .python {
        background-color: #ffdd00;
        outline: 1px dashed #3000ce;
        color: #041bb3;
    }
</style>
