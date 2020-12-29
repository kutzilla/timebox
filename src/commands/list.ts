import {Command} from '@oclif/command'
import Timebox from '../timebox/timebox'

export default class List extends Command {
  static description = 'List all Timeboxes'

  async run() {
    console.log(Timebox.findAll(`${this.config.dataDir}/boxes/`))
  }
}
