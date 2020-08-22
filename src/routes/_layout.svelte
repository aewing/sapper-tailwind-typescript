<script lang="ts">
  import Tailwind from "./_tailwind.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment: string | undefined;
</script>

<style>
  .page {
    @apply shadow mx-auto;
  }
  main {
    @apply bg-white p-3;
  }
  footer {
    @apply mx-auto text-right text-blue-500 text-xs my-1;
  }
</style>

<div class="page container">
  <Tailwind />
  <Nav {segment} />

  <main>
    <slot />
  </main>
</div>

<footer class="container">
  <a href="https://github.com/aewing">@aewing</a>
</footer>
