import {Command, flags} from '@oclif/command'

export default class Start extends Command {

  static description = 'starts a new Timebox'

  async run() {
    const startTime = new Date(Date.now())

    this.log(`You've started a new Timebox at ${startTime.getHours()}:${startTime.getMinutes()}!`)
  }
}
