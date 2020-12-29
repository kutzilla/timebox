import {Md5} from 'ts-md5/dist/md5';
import * as fs from 'fs-extra'
import * as path from 'path'


export default class Timebox {

    static md5 = new Md5();

    private _id: string
    private _startTime: Date

    constructor(startTime: Date) {
        this._startTime = startTime
        this._id = Timebox.md5.appendStr(startTime.toString()).end() as string
    }

    public get shortid(): string {
        return this._id.slice(0, 7)
    }
    
    public get id() : string {
        return this._id
    }
    
    
    public set startTime(startTime : Date) {
        this._startTime = startTime;
    }

    
    public get startTime() : Date {
        return this._startTime
    }
    
    public get startTimeStamp(): string {
        return `${this._startTime.getHours()}:${this._startTime.getMinutes()}:${this._startTime.getSeconds()}`
    }

    public static write(timebox: Timebox, dir: string) {
        if(!fs.pathExists(dir)) {
            fs.mkdir(dir)
          }
        fs.createFile(path.join(dir, `${timebox.id}.json`))
        fs.writeFile(path.join(dir, `${timebox.id}.json`), JSON.stringify(timebox))
    }
}