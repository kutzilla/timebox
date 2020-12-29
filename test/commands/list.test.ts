import {expect, test} from '@oclif/test'

describe('list', () => {
  test
  .stdout()
  .command(['list'])
  .it('lists boxes', ctx => {
    expect(ctx.stdout).to.contain('')
  })
})
