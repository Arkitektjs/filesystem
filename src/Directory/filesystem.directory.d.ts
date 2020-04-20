/**
 * Path of the directory
 */

export type DirectoryPath = string;

export interface FileSystemDirectoryInterface {
  /**
   * Current directory
   */
  cwd: DirectoryPath;

  /**
   * Create a new directory in the specified path
   * @param path
   */
  create(path: DirectoryPath): string;

  /**
   * Check if directory exists
   * @param path
   */
  exists(path: DirectoryPath): boolean;

  /**
   * Move the directory in a new path
   * @param oldPath
   * @param newPath
   */
  move(oldPath: DirectoryPath, newPath: DirectoryPath): DirectoryPath;

  /**
   * Delete the specified directory
   * @param path
   */
  delete(path: DirectoryPath): boolean;
}
