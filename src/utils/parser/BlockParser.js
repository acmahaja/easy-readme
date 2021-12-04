function BlockParser(message) {
    let result = message.split('\n\n')
    return result
}

export default BlockParser


// let result = BlockParser("Hello, this is a paragraph.\n\nThis is a new paragraph!")
// console.log(result);
// result.forEach(element => {
//     console.log(element)
// });