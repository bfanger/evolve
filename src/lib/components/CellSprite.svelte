<script lang="ts">
  import { Application, Sprite, Texture } from "pixi.js";
  import { getContext, onMount } from "svelte";
  import type { CellType } from "$lib/services/world-fns";

  export let x: number;
  export let y: number;
  export let type: CellType;

  const app = getContext<Application>("app");

  const textures: Record<CellType, Texture> = {
    antenna: Texture.from("/img/antenna.png"),
    blaadje: Texture.from("/img/blaadje.png"),
    empty: Texture.from("/img/empty.png"),
    stem: Texture.from("/img/stem.png"),
    water: Texture.from("/img/water.png"),
    wortel: Texture.from("/img/wortel.png"),
    zaad: Texture.from("/img/zaad.png"),
  };
  const sprite = new Sprite(textures[type]);

  $: sprite.x = x * 14;
  $: sprite.y = y * 14;
  $: sprite.texture = textures[type];

  onMount(() => {
    app.stage.addChild(sprite);
    return () => app.stage.removeChild(sprite);
  });
</script>
