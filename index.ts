import { FileSystemDirectory } from './src/Directory/FileSystemDirectory';

const directory = new FileSystemDirectory();

directory.create('ramen');
directory.move('ramen', 'tonkotsu');
