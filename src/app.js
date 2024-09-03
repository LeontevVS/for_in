import { getSortedCharacterFieldsList } from './characters/sort_character_fields'

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
const characterSortedFields = getSortedCharacterFieldsList(obj, ["name", "level"]);
console.log(characterSortedFields);