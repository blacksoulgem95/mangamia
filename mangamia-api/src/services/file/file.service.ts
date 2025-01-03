import { Injectable } from '@nestjs/common';

export interface FileService {
    get extensions(): string[]
    get type(): "FILE" | "DIRECTORY"
}
