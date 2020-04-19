const { FileSystemFiles } = require('./src/Files/FileSystemFiles')

const handleFile = new FileSystemFiles();

handleFile.create('NewFile.js')
handleFile.write('NewFile.js', "console.log('cest cool ca marche jsuis content')")
handleFile.read('NewFile.js')
handleFile.rename('NewFile.js', 'NewNameFile.js')
handleFile.remove('deleteTest.js')