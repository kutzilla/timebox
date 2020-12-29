import {Command, flags} from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'
import Timebox from '../timebox/timebox'

export default class Start extends Command {

  static description = 'starts a new Timebox'

  async run() {

    var timebox = new Timebox(new Date(Date.now()))

    try {
      if(!fs.pathExists(this.config.dataDir)) {
        fs.mkdir(this.config.dataDir)
      }
      fs.createFile(path.join(this.config.dataDir, `${timebox.id}.json`))
      fs.writeFile(path.join(this.config.dataDir, `${timebox.id}.json`), JSON.stringify(timebox))

      this.log(`Timebox ${timebox.shortid} started at ${timebox.startTimeStamp}`)
    } catch(e) {
        this.error(`Timebox not created - ${e.message}`)
    }
  }
}
