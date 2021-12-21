import FragmentParser from '../utils/parser/FragmentParser'

test('Block Parser Test #1', () => {
    expect(FragmentParser("This is the first block of text.\nThis is the second block of text.")).toEqual(
        ['This is the first block of text.', 'This is the second block of text.'])
})

test('Block Parser Test #2', () => {
    expect(FragmentParser("This is the first line of the block.\nThis is the second line of the block.")).toEqual(
        ['This is the first line of the block.','This is the second line of the block.'])
})

test('Block Parser Test #3', () => {
    expect(FragmentParser("Hello, this is a paragraph.\nThis is a new paragraph!")).toEqual(
        ['Hello, this is a paragraph.', 'This is a new paragraph!'])
})

test('Block Parser Test #4', () => {
    expect(FragmentParser("The paragraph starts here...\n...and doesn't end until here.")).toEqual(
        ['The paragraph starts here...','...and doesn\'t end until here.'])
})

test('Block Parser Test #5', () => {
    expect(FragmentParser("* Item 1\n* Item 2\n* Item 3\n")).toEqual(
        ['* Item 1', '* Item 2', '* Item 3', ''])
})