<script>
    export let selectedIndex;

    const sidebarItems = document.querySelectorAll('.sidebar-item');
</script>


<div class="sidebar">
    <div class="sidebar-header">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
        class="pfp"
        src="src/assets/newpfp.jpeg"
        alt="profile picture of Bartosz Bak"
        />
    </div>

    <div class="sidebar-nav">
        <a class="sidebar-item" class:sidebar-selected={selectedIndex === 0} href="about.html">{selectedIndex === 0 ? "> About" : "About"}</a>
        <a class="sidebar-item" class:sidebar-selected={selectedIndex === 1} href="projects.html">{selectedIndex === 1 ? "> Projects" : "Projects"}</a>
        <a class="sidebar-item" class:sidebar-selected={selectedIndex === 2} href="education.html">{selectedIndex === 2 ? "> Education" : "Education"}</a>
        <a class="sidebar-item" class:sidebar-selected={selectedIndex === 3} href="contact.html">{selectedIndex === 3 ? "> Contact" : "Contact"}</a>
        <a class="sidebar-item" class:sidebar-selected={selectedIndex === 4} href="official.html">{selectedIndex === 4 ? "> Official" : "Official"}</a>
    </div>
</div>

<style lang="scss">
    .sidebar {
        height: 100vh;
        padding-left: 2rem;
        display: flex;
        flex-direction: column;
        gap: 6rem;
    }
    .sidebar-header {
        height: 35%;
        display: flex;

        align-items: flex-end;

        img {
            width: 6rem;
            height: auto;
            border-radius: 50%;
        }
    }

    .sidebar-nav {
        a {
            text-decoration: none;
        }

        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .sidebar-item {
        color: rgb(24, 23, 32);
    }

    .sidebar-selected {
        color: rgb(144, 31, 56);
        font-weight: 700;
    }
</style>