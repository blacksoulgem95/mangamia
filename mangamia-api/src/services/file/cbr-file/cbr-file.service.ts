import {Injectable} from '@nestjs/common';
import {NonDirectoryFileService} from "../non-directory-file/non-directory-file.service";

@Injectable()
export class CbrFileService extends NonDirectoryFileService {
    get extensions(): string[] {
        return ['cbr', 'cbz'];
    }
}
