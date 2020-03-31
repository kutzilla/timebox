timebox
=======

Timebox your Tasks and Activities with ease

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/timebox.svg)](https://npmjs.org/package/timebox)
[![Downloads/week](https://img.shields.io/npm/dw/timebox.svg)](https://npmjs.org/package/timebox)
[![License](https://img.shields.io/npm/l/timebox.svg)](https://github.com/kutzilla/timebox/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g timebox
$ tb COMMAND
running command...
$ tb (-v|--version|version)
timebox/0.0.0 darwin-x64 node-v10.15.0
$ tb --help [COMMAND]
USAGE
  $ tb COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tb hello [FILE]`](#tb-hello-file)
* [`tb help [COMMAND]`](#tb-help-command)

## `tb hello [FILE]`

describe the command here

```
USAGE
  $ tb hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ tb hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/kutzilla/timebox/blob/v0.0.0/src/commands/hello.ts)_

## `tb help [COMMAND]`

display help for tb

```
USAGE
  $ tb help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
