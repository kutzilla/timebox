import {Command, flags} from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'
import Config from '../configuration/config'

export default class Start extends Command {

  static description = 'starts a new Timebox'

  async run() {
    const startTime = new Date(Date.now())

    this.log(`You've started a new Timebox at ${startTime.getHours()}:${startTime.getMinutes()}!`)

    var conf = new Config(this.config.configDir, this.config.home)

    this.log('User config: ' + conf.load())
    
  }
}
