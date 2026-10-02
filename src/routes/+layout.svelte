<script lang="ts">
  import type { Snippet } from "svelte";
  import WorldProvider from "../lib/components/WorldProvider/WorldProvider.svelte";
  import ApplicationProvider from "../lib/components/ApplicationProvider/ApplicationProvider.svelte";
  import "../app.scss";

  type Props = {
    children: Snippet;
  };
  let { children }: Props = $props();
</script>

<WorldProvider>
  <ApplicationProvider>
    {@render children()}
  </ApplicationProvider>
</WorldProvider>
