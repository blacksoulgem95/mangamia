import {Module} from '@nestjs/common';
import {AppController} from './controllers/app.controller';
import {AppService} from './services/app.service';
import {ZipFileService} from './services/file/zip-file/zip-file.service';
import {CbrFileService} from './services/file/cbr-file/cbr-file.service';
import {DirectoryFileService} from './services/file/directory-file/directory-file.service';
import {PdfFileService} from './services/file/pdf-file/pdf-file.service';
import {FileAnalyserService} from './services/batch/file-analyser/file-analyser.service';
import {PluginService} from './services/plugins/plugin/plugin.service';
import {JobService} from './services/batch/job/job.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CurrentUserService } from './services/current-user/current-user.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: process.env.DB_HOST || "null",
            username: process.env.DB_HOST || "null",
            password: process.env.DB_HOST || "null",
            database: process.env.DB_HOST || "null",
            synchronize: false,
            entities: []
        })
    ],
    controllers: [AppController],
    providers: [AppService, ZipFileService, CbrFileService, DirectoryFileService, PdfFileService, FileAnalyserService, PluginService, JobService, CurrentUserService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {
    }
}
