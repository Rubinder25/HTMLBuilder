export interface Chip {
  text: string;
}

export let getChip = (chip: Chip): string => {
  return `<div class='chip'><span class='chipText'>${chip.text}</span></div>`;
};
