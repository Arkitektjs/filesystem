export interface FileSystemDirectoryInterface {
  /**
   * Create a new directory in the specified path
   * @param path
   */
  create(path: string): void;

  /**
   * Rename the directory
   * @param oldPath
   * @param newPath
   */
  rename(oldPath: string, newPath: string): void;

  /**
   * Move the directory in a new path
   * @param oldPath
   * @param newPath
   */
  move(oldPath: string, newPath: string): void;

  /**
   * Delete the specified directory
   * @param path
   */
  delete(path: string): void;
}
