import fs from 'fs';
import { FileSystemDirectory } from '../src/Directory/FileSystemDirectory';

jest.mock('fs');

describe('CRUD File System Directory', () => {
  const directory = new FileSystemDirectory();

  it('should create a new directory', () => {
    directory.create('test-path');
    expect(fs.mkdirSync).toHaveBeenCalled();
  });

  it('should return true if directory exists false if not', () => {});

  it('should move the directory into his new location', () => {});

  it('should delete the directory', () => {});
});
