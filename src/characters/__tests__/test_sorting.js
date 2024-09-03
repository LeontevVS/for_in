import { getSortedCharacterFieldsList } from '../sort_character_fields'

test('test getSortedCharacterFieldsList', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const expectedCharacterSortedFields = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
    ];
    const characterSortedFields = getSortedCharacterFieldsList(obj, ["name", "level"]);
    expect(characterSortedFields).toEqual(expectedCharacterSortedFields);
});