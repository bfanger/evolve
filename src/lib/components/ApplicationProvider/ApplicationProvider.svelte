<script lang="ts">
  import { getContext, setContext } from "svelte";
  import { Application, Assets } from "pixi.js";
  import type { World } from "$lib/services/world-fns";
  type Props = {
    children?: import("svelte").Snippet;
  };

  let { children }: Props = $props();

  const world = getContext<World>("world");
  const app = new Application();
  setContext("app", app);

  const ready = Promise.all([
    Assets.load([
      "/img/antenna.png",
      "/img/blaadje.png",
      "/img/empty.png",
      "/img/stem.png",
      "/img/water.png",
      "/img/wortel.png",
      "/img/zaad.png",
    ]),
    app.init({
      width: world.width * 14,
      height: world.height * 14,
      resolution: 2,
      autoDensity: true,
    }),
  ]).then(([textures]) => {
    for (const texture of Object.values(textures)) {
      texture.source.magFilter = "nearest";
    }
  });

  (window as any).__PIXI_APP__ = app;
</script>

{#await ready then}
  {@render children?.()}
{/await}
