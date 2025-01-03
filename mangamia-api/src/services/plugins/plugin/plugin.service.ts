import { Injectable } from '@nestjs/common';

@Injectable()
export class PluginService {

    public init(): Promise<any> {
        return new Promise(a=>a)
    }

    public registerPlugin(pluginUrl: string): Promise<any> {
        return new Promise(a=>a)
    }
}
