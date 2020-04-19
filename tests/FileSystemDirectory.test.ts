import fs from 'fs';
import { FileSystemDirectory } from '../src/Directory/FileSystemDirectory';

jest.mock('fs');

it("should create a new directory if one doesn't already exists", () => {
  FileSystemDirectory.createDirectory('test-path');
  expect(fs.mkdirSync).toHaveBeenCalled();
  //   expect(fs.readdirSync('test-path'))
});

it("shouldn't create a new directory if it already exists", () => {});

it('should update the directory name if i s not the same name in input', () => {});

it("should move the directory into his new location if it doesn't exists already on that path", () => {});

it('should delete the directory', () => {});
