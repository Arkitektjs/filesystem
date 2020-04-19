import { FileSystemFiles } from '../src/Files/FileSystemFiles'

describe('FileSystemFiles', () => {
    const testFile = new FileSystemFiles();

    test('the file is created', () => {
        expect(testFile.create('testFile.js')).toBe(true)
    })

    test('we can write', () => {
        expect(testFile.read('testRead.js')).toBeTruthy()
    })

    test('we can remove a file', () => {
        expect(testFile.remove('removedFile.js')).toBeNull()
    })
})