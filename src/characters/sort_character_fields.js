export function getSortedCharacterFieldsList(character, sortFieldNames) {
    const result = [];
    for (let fieldName of sortFieldNames) {
        result.push({
            key: fieldName,
            value: character[fieldName]
        });
    }
    const remainingKeys = [];
    for (const key in character) {
        if (!sortFieldNames.includes(key)) {
            remainingKeys.push(key);
        }
    }
    remainingKeys.sort();
    for (const key of remainingKeys) {
        result.push({ key, value: character[key] });
    }
    return result;
}