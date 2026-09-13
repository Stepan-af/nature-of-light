/**
 * Picks which cards of the 3-column portfolio grid are tall (span two rows) so
 * that the grid has no holes, mirroring the Figma layout: every third card
 * starting from the first is tall (0, 3, 6, …) while there are enough cards.
 *
 * Works for `grid-auto-flow: dense`. Shared by the page (static render) and the
 * client-side filter script. No Astro imports — safe to bundle for the browser.
 */
export function bentoTall(count: number, cols = 3): boolean[] {
  for (let talls = Math.floor(count / 3); talls >= 0; talls--) {
    if ((count + talls) % cols !== 0) continue;
    const pattern = Array.from({ length: count }, (_, i) => i % 3 === 0 && i / 3 < talls);
    if (fitsWithoutHoles(pattern, cols)) return pattern;
  }
  return Array.from({ length: count }, () => false);
}

function fitsWithoutHoles(tall: boolean[], cols: number): boolean {
  const cells: boolean[][] = [];
  const free = (r: number, c: number) => !cells[r]?.[c];
  const take = (r: number, c: number) => ((cells[r] ??= [])[c] = true);

  for (const isTall of tall) {
    let placed = false;
    for (let r = 0; !placed; r++) {
      for (let c = 0; c < cols && !placed; c++) {
        if (free(r, c) && (!isTall || free(r + 1, c))) {
          take(r, c);
          if (isTall) take(r + 1, c);
          placed = true;
        }
      }
    }
  }

  for (let r = 0; r < cells.length; r++) {
    for (let c = 0; c < cols; c++) if (free(r, c)) return false;
  }
  return true;
}
