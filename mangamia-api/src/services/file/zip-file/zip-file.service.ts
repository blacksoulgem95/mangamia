import { Injectable } from '@nestjs/common';
import {FileService} from "../file/file.service";
import {NonDirectoryFileService} from "../non-directory-file/non-directory-file.service";

@Injectable()
export class ZipFileService extends NonDirectoryFileService {
    get extensions(): string[] {
        return ['zip', 'rar', '7z'];
    }

}
