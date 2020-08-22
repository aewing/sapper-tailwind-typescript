<script lang="ts">
  export let segment: string | undefined;
</script>

<style>
  nav {
    @apply bg-blue-800 flex h-10 items-center content-center mx-auto;

    & ul {
      @apply list-none flex items-end content-end h-10;
    }

    & li {
      @apply px-4 mr-1 bg-gray-200 text-gray-700 flex-grow h-8 flex items-center content-center text-lg font-bold rounded-t;
      &:hover {
        @apply text-blue-700;
      }
      &.active {
        @apply bg-white text-blue-900;
        &:hover {
          @apply bg-blue-400;
        }
      }
    }
  }
</style>

<div class="container mx-auto">
  <nav>
    <ul>
      <li class:active={segment === undefined}>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          home
        </a>
      </li>
      <li class:active={segment === 'foo'}>
        <a href="https://github.com/aewing/tasty">github</a>
      </li>
    </ul>
  </nav>
</div>
