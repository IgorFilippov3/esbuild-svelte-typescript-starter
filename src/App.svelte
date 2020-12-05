<script lang="ts">
  let name = "typescript";
  let active = false;
</script>

<style>
  .active {
    color: red;
  }
</style>

<h1 class:active>Svelte {name} version</h1>
<button on:click={() => active = !active}>Toggle Active</button>