export function getSortedCharacterFieldsList(character, sortFieldNames) {
    const result = [];
    for (let fieldName of sortFieldNames) {
        result.push({
            key: fieldName,
            value: character[fieldName]
        });
    }
    const allCharacterKeys = Object.keys(character).sort();
    for (let fieldName of allCharacterKeys) {
        if (sortFieldNames.includes(fieldName)) {
            continue;
        }
        result.push({
            key: fieldName,
            value: character[fieldName]
        });
    }
    return result;
}