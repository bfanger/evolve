<script lang="ts">
  import { setContext } from "svelte";
  import type { Cell } from "../../services/world-fns";
  type Props = {
    children?: import("svelte").Snippet;
  };

  let { children }: Props = $props();

  const width = 50;
  const height = 40;

  setContext(
    "world",
    Object.assign(new EventTarget(), {
      width,
      height,
      grid: new Array(width).fill(null).map(() =>
        new Array(height).fill(null).map(() => {
          const cell: Cell = {
            type: Math.random() < 0.05 ? "zaad" : "empty",
            counter: 0,
            energy: Math.random() * 4,
          };
          return cell;
        }),
      ),
    }),
  );
  console.info("🌎 Rebuilding world");
</script>

{@render children?.()}
