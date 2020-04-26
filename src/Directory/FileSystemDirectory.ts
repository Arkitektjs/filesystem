import { readdirSync, mkdirSync, existsSync, renameSync, rmdirSync } from 'fs';
import {
  FileSystemDirectoryInterface,
  DirectoryPath,
} from './filesystem.directory';

class FileSystemDirectory implements FileSystemDirectoryInterface {
  cwd: DirectoryPath = process.cwd();

  list(path: DirectoryPath): Array<string> {
    return readdirSync(`${this.cwd}/${path}`, { withFileTypes: true })
      .filter((dir) => dir.isDirectory())
      .map((dir) => dir.name);
  }

  create(path: DirectoryPath): string {
    const newDirectory = `${this.cwd}/${path}`;
    mkdirSync(newDirectory);

    return newDirectory;
  }

  exists(path: DirectoryPath): boolean {
    return existsSync(path);
  }

  move(oldPath: DirectoryPath, newPath: DirectoryPath): DirectoryPath {
    renameSync(oldPath, newPath);

    return newPath;
  }

  delete(path: DirectoryPath): boolean {
    rmdirSync(path);

    return true;
  }
}

export { FileSystemDirectory };
