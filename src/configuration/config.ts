
import * as fs from 'fs-extra'
import * as path from 'path'


export default interface UserConfiguration {
    home: string;
}

export default class Config {
    

    configDir: string
    
    userHome: string

    constructor(configDir: string, userHome: string) {
        this.configDir = configDir
        this.userHome = userHome
    }

    load() : UserConfiguration {

        var userConfig: UserConfiguration
        try {
            userConfig = fs.readJSONSync(path.join(this.configDir, 'config.json'))
        } catch(e) {
            this.writeDefaultConf()
            userConfig = fs.readJSONSync(path.join(this.configDir, 'config.json'))
        }

        return userConfig
    }

    writeDefaultConf() {
        var defaultConf = `
        {
            'baseDir' : '${this.userHome}/.timebox'
        }
        `
        fs.writeJson(path.join(this.configDir, 'config.json'), defaultConf)

    }


}