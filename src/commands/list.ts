import {Command} from '@oclif/command'
import Timebox from '../timebox/timebox'

export default class List extends Command {
  static description = 'List all Timeboxes'

  async run() {
    let timeboxes = Timebox.findAll(`${this.config.dataDir}/boxes/`)
    this.log(timeboxes.toString())
  }
}
