import * as fs from 'fs-extra'
import * as path from 'path'
import {Status} from './status'

export default class Timebox {
    private _id: string

    private _name: string

    private _context: string

    private _startTime?: Date

    private _endTime?: Date

    private _status: Status

    constructor(id: string, name: string, context: string) {
      this._id = id
      this._name = name
      this._context = context
      this._status = Status.PENDING
    }

    public get id(): string {
      return this._id
    }

    public get shortid(): string {
      return this._id.slice(0, 7)
    }

    public get name(): string {
      return this._name
    }

    public set name(name: string) {
      this._name = name
    }

    public get context(): string {
      return this._context
    }

    public set context(context: string) {
      this._context = context
    }

    public set startTime(startTime: Date|undefined) {
      this._startTime = startTime
    }

    public get startTime(): Date|undefined {
      return this._startTime
    }

    public startTimeStamp(): string {
      if (this._startTime !== undefined) {
        return this._startTime!.toLocaleTimeString()
      }
      throw new Error('start time is undefined')
    }

    public get endTime(): Date | undefined {
      return this._endTime
    }

    public set endTime(endTime: Date | undefined) {
      this._endTime = endTime
    }

    public get status(): Status {
      return this._status
    }

    public start(startTime?: Date): Status {
      if (this._status === Status.PENDING) {
        this._status = Status.RUNNING
        this._startTime = startTime || new Date(Date.now())
      } else {
        throw new Error(`Timebox ${this._name} is not pending anymore`)
      }
      return this._status
    }

    public static write(timebox: Timebox, dir: string) {
      if (!fs.pathExistsSync(dir)) {
        fs.mkdirpSync(dir)
      }
      fs.writeJson(path.join(dir, `${timebox.id}.json`), JSON.stringify(timebox))
    }

    public static findAll(dir: string) : Array<Timebox> {
       const files = fs.readdirSync(dir)

       let timeboxes : Array<Timebox> = []
       for (var i = 0; i < files.length; i++) {
         timeboxes[i] = fs.readJSONSync(`${dir}/${files[i]}`) as Timebox
       }
       return timeboxes
    }
}
