import {Command, flags} from '@oclif/command'

import Timebox from '../timebox/timebox'

export default class Start extends Command {

  static description = 'starts a new Timebox'

  async run() {

    var timebox = new Timebox(new Date(Date.now()))

    try {
      Timebox.write(timebox, this.config.dataDir)
      this.log(`Timebox ${timebox.shortid} started at ${timebox.startTimeStamp}`)
    } catch(e) {
        this.error(`Timebox not created - ${e.message}`)
    }
  }
}
