
import { FileUtils } from './FileUtils';
import * as fs from 'fs';
import * as path from 'path';


export class ConfigManager {
  private static config: any = { diamond: { daily: { serverId: 'daily', appName: '', dataId: '',group:'' }, pre: { serverId: 'pre', appName: '', dataId: '',group:'' } } };
  private static configFilePath: string = '';
  public static init() {
    let rootPath: string = FileUtils.getProjectPath(undefined);
    let mxPath = path.join(rootPath, '.mx-plugin');
    if (!fs.existsSync(mxPath)) {
      fs.mkdirSync(mxPath);
    }
    this.configFilePath = path.join(mxPath, 'config.json');
    if (!fs.existsSync(this.configFilePath)) {
      fs.writeFileSync(this.configFilePath, JSON.stringify(this.config), 'utf-8');
    }
  }
  public static read(): any {
    let content: string = fs.readFileSync(this.configFilePath, 'utf-8');
    return JSON.parse(content);
  }
  public static save(config:any) {
    if (fs.existsSync(this.configFilePath)) {
      fs.writeFileSync(this.configFilePath, JSON.stringify(config), 'utf-8');
    }
  }
 

}
