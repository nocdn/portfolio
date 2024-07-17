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
        <a class="sidebar-item" href="index.html">About</a>
        <a class="sidebar-item" href="about.html">Projects</a>
        <a class="sidebar-item" href="contact.html">Education</a>
        <a class="sidebar-item" href="contact.html">Contact</a>
        <a class="sidebar-item" href="contact.html">Official</a>
    </div>
</div>

<style lang="scss">

    .sidebar {
        height: 100%;
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
        font-weight: 600;
    }
</style>