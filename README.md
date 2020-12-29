timebox
=======

Timebox your Tasks and Activities with ease

[![Build Status](https://travis-ci.com/kutzilla/timebox.svg?branch=master)](https://travis-ci.com/kutzilla/timebox)
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
$ box COMMAND
running command...
$ box (-v|--version|version)
timebox/0.0.0 darwin-x64 node-v14.15.3
$ box --help [COMMAND]
USAGE
  $ box COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`box help [COMMAND]`](#box-help-command)
* [`box list [FILE]`](#box-list-file)
* [`box start [NAME] [CONTEXT]`](#box-start-name-context)

## `box help [COMMAND]`

display help for box

```
USAGE
  $ box help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `box list [FILE]`

describe the command here

```
USAGE
  $ box list [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/list.ts](https://github.com/kutzilla/timebox/blob/v0.0.0/src/commands/list.ts)_

## `box start [NAME] [CONTEXT]`

starts a new Timebox

```
USAGE
  $ box start [NAME] [CONTEXT]

ARGUMENTS
  NAME     name of the timebox
  CONTEXT  [default: default] context of the timebox
```

_See code: [src/commands/start.ts](https://github.com/kutzilla/timebox/blob/v0.0.0/src/commands/start.ts)_
<!-- commandsstop -->
