import fs from 'fs';
import { FileSystemDirectory } from '../src/Directory/FileSystemDirectory';

jest.mock('fs');

describe('CRUD File System Directory', () => {
  const directory = new FileSystemDirectory();

  it('should list all directories', () => {
    directory.list('/test-path');
    expect(fs.readdirSync).toHaveBeenCalled();
  });

  it('should create a new directory', () => {
    directory.create('test-path');
    expect(fs.mkdirSync).toHaveBeenCalled();
  });

  it('should return true if directory exists false if not', () => {
    directory.exists('test-path');
    expect(fs.existsSync).toHaveBeenCalled();
  });

  it('should move the directory into his new location', () => {
    directory.move('old-path', 'new-path');
    expect(fs.renameSync).toHaveBeenCalled();
  });

  it('should delete the directory', () => {
    directory.delete('test-path');
    expect(fs.rmdirSync).toHaveBeenCalled();
  });
});
