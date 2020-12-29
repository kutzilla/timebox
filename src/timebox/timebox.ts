import * as fs from 'fs-extra'
import * as path from 'path'
import {Status} from './status'

export default class Timebox {
    private _id: string

    private _name: string

    private _context: string

    private _startTime: Date

    private _endTime: Date

    private _status: Status

    constructor(id: string, name: string, context: string) {
      this._id = id
      this._name = name
      this._context = context
      this._startTime = new Date(0)
      this._endTime = new Date(0)
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

    public set startTime(startTime: Date) {
      this._startTime = startTime
    }

    public get startTime(): Date {
      return this._startTime
    }

    public get endTime(): Date {
      return this._endTime
    }

    public set endTime(endTime: Date) {
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
}
