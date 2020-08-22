<script>
  import Fa from "svelte-fa";
  import { faHandshake } from "@fortawesome/free-solid-svg-icons";
</script>

<svelte:head>
  <title>Sapper TypeScript Tailwind Template</title>
</svelte:head>

<article class="prose prose-lg">
  <h1 class="flex">
    <Fa icon={faHandshake} class="text-blue-900 mr-3" />
    Hello, world!
  </h1>
  <p>
    This page is presented with
    <a href="https://sapper.svelte.dev/">Sapper</a>
    ,
    <a href="https://tailwindcss.com/">Tailwind</a>
    ,
    <a href="https://www.typescriptlang.org/">TypeScript</a>
  </p>
</article>
