import {Command} from '@oclif/command'
import Timebox from '../timebox/timebox'
import {Md5} from 'ts-md5/dist/md5'

export default class Start extends Command {
  static md5 = new Md5();

  static description = 'starts a new Timebox'

  static args = [
    {
      name: 'name',
      required: false,
      description: 'name of the timebox',
    },
    {
      name: 'context',
      required: false,
      description: 'context of the timebox',
      default: 'default',
    },
  ]

  async run() {
    const {args} = this.parse(Start)

    const startTime = new Date(Date.now())

    const id = Start.md5
    .appendStr(startTime.toString())
    .end() as string

    const name = (args.name === null) ?  id.slice(0, 7) : args.name
    const context = args.context

    const timebox = new Timebox(id, name, context, startTime)

    try {
      Timebox.write(timebox, `${this.config.dataDir}/boxes/`)
      const message = `Timebox ${timebox.name} started at ${timebox.startTime.toLocaleTimeString()}`
      this.log(message)
    } catch (error) {
      this.error(`Timebox not created - ${error.message}`)
    }
  }
}
