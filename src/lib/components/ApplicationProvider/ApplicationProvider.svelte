<script lang="ts">
  import { getContext, setContext } from "svelte";
  import { Application, Assets } from "pixi.js";
  import type { World } from "$lib/services/world-fns";

  const world = getContext<World>("world");
  const app = new Application();
  setContext("app", app);
  const appReady = Promise.all([
    app.init({
      width: world.width * 14,
      height: world.height * 14,
      resolution: 2,
      autoDensity: true,
    }),
    Assets.load([
      "/img/antenna.png",
      "/img/blaadje.png",
      "/img/empty.png",
      "/img/stem.png",
      "/img/water.png",
      "/img/wortel.png",
      "/img/zaad.png",
    ]),
  ]);

  (window as any).__PIXI_APP__ = app;
</script>

{#await appReady then}
  <slot />
{/await}
