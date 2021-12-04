import BlockParser from '../utils/parser/BlockParser'

test('Block Parser Test #1', () => {
    expect(BlockParser("This is the first block of text.\n\nThis is the second block of text.")).toEqual(
        ['This is the first block of text.', 'This is the second block of text.'])
})

test('Block Parser Test #2', () => {
    expect(BlockParser("This is the first line of the block.\nThis is the second line of the block.")).toEqual(
        ['This is the first line of the block.\nThis is the second line of the block.'])
})

test('Block Parser Test #3', () => {
    expect(BlockParser("Hello, this is a paragraph.\n\nThis is a new paragraph!")).toEqual(
        ['Hello, this is a paragraph.', 'This is a new paragraph!'])
})

test('Block Parser Test #4', () => {
    expect(BlockParser("The paragraph starts here...\n...and doesn't end until here.")).toEqual(
        ["The paragraph starts here...\n...and doesn't end until here."])
})

test('Block Parser Test #5', () => {
    expect(BlockParser("* Item 1\n* Item 2\n* Item 3\n")).toEqual(
        ["* Item 1\n* Item 2\n* Item 3\n"])
})