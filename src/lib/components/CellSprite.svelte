<script lang="ts">
  import { Application, Assets, Sprite, Texture } from "pixi.js";
  import { getContext, onMount, untrack } from "svelte";
  import type { CellType } from "$lib/services/world-fns";

  type Props = {
    x: number;
    y: number;
    type: CellType;
  };

  let { x, y, type }: Props = $props();

  const app = getContext<Application>("app");

  const textures: Record<CellType, Texture> = {
    antenna: Assets.get("/img/antenna.png"),
    blaadje: Assets.get("/img/blaadje.png"),
    empty: Assets.get("/img/empty.png"),
    stem: Assets.get("/img/stem.png"),
    water: Assets.get("/img/water.png"),
    wortel: Assets.get("/img/wortel.png"),
    zaad: Assets.get("/img/zaad.png"),
  };
  const sprite = $state(new Sprite(untrack(() => textures[type])));

  $effect(() => {
    sprite.x = x * 14;
    sprite.y = y * 14;
  });
  $effect(() => {
    sprite.texture = textures[type];
  });

  onMount(() => {
    app.stage.addChild(sprite);
    return () => app.stage.removeChild(sprite);
  });
</script>
