import {Injectable} from '@nestjs/common';
import {FileService} from "../file/file.service";

@Injectable()
export class DirectoryFileService implements FileService {
    get extensions(): string[] {
        return [];
    }

    get type(): "FILE" | "DIRECTORY" {
        return "DIRECTORY";
    }
}
