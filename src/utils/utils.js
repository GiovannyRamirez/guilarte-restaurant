const utils = {}

utils.capitalizeFirstLetter = text => {
    const words = text.split(" ")
    const capitalizedWords = words.map(word => {
        const firstLetter = word[0]
        const restLetters = word.slice(1)
        return `${firstLetter.toUpperCase()}${restLetters}`
    })

    return capitalizedWords.join(" ")
}

module.exports = utils
