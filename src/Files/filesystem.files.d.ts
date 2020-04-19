export interface FilesInterface {
    create(name: string): any;
    write(path: string, text: string): any;
    remove(name: string): any;
    read(path: string): any;
    rename(oldName: string, newName: string): any;
}
