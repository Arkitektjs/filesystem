import fs from 'fs';
import {
  FileSystemDirectoryInterface,
  DirectoryPath,
} from './filesystem.directory';

class FileSystemDirectory implements FileSystemDirectoryInterface {
  cwd: DirectoryPath = process.cwd();

  create(path: DirectoryPath): string {
    const newDirectory = `${this.cwd}/${path}`;
    fs.mkdirSync(newDirectory);
    return newDirectory;
  }

  exists(path: DirectoryPath): boolean {
    return fs.existsSync(path);
  }

  move(oldPath: DirectoryPath, newPath: DirectoryPath): DirectoryPath {
    fs.renameSync(oldPath, newPath);
    return newPath;
  }

  delete(path: DirectoryPath): boolean {
    fs.rmdirSync(path);
    return true;
  }
}

export { FileSystemDirectory };
