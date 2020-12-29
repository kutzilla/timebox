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
timebox/0.0.0 darwin-x64 node-v10.15.0
$ box --help [COMMAND]
USAGE
  $ box COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`box hello [FILE]`](#box-hello-file)
* [`box help [COMMAND]`](#box-help-command)
* [`box start`](#box-start)

## `box hello [FILE]`

describe the command here

```
USAGE
  $ box hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ tb hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/kutzilla/timebox/blob/v0.0.0/src/commands/hello.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `box start`

starts a new Timebox

```
USAGE
  $ box start
```

_See code: [src/commands/start.ts](https://github.com/kutzilla/timebox/blob/v0.0.0/src/commands/start.ts)_
<!-- commandsstop -->
