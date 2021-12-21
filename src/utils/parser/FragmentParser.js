function FragmentParser(message) {
    let result = message.split('\n')
    return result
}

export default FragmentParser


// let result = BlockParser("Hello, this is a paragraph.\n\nThis is a new paragraph!")
// console.log(result);
// result.forEach(element => {
//     console.log(element)
// });