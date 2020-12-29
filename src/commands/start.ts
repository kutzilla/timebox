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

    const id = Start.md5.appendStr(Date.now().toString()).end() as string
    const name = (args.name === undefined) ?  id.slice(0, 7) : args.name
    const context = args.context

    const timebox = new Timebox(id, name, context)
    timebox.start()

    try {
      Timebox.write(timebox, `${this.config.dataDir}/boxes/`)

      let message = `Timebox ${timebox.name} started at ${timebox.startTime.toLocaleTimeString()}`
      if (timebox.context !== null) {
        message = `${message} with context '${timebox.context}'`
      }

      this.log(message)
    } catch (error) {
      this.error(`Timebox not created - ${error.message}`)
    }
  }
}
