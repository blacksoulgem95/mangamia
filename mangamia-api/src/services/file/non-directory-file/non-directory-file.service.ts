import {FileService} from "../file/file.service";

export abstract class NonDirectoryFileService implements FileService {
    abstract get extensions(): string[];

    get type(): "FILE" | "DIRECTORY" {
        return "FILE"
    };
}
