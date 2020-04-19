import { appendFileSync, writeFileSync, unlinkSync, readFileSync, renameSync } from 'fs';
import { FilesInterface } from './filesystem.files';

class FileSystemFiles implements FilesInterface {
    public create(name: string) {
        appendFileSync(name, { writeFileSync: true });
    };

    public write(path: string, text: string) {
        writeFileSync(path, text);
    };

    public remove(path: string) {
        unlinkSync(path)
    };

    public read(path: string) {
        readFileSync(path)
    };

    public rename(oldName: string, newName: string) {
        renameSync(oldName, newName)
    };
};

export { FileSystemFiles }