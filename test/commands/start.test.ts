import {expect, test} from '@oclif/test'

describe('start', () => {
  test
  .stdout()
  .command(['start'])
  .it('starts timebox without name', ctx => {
    expect(ctx.stdout).to.contain('Timebox').to.contain('started')
  })

  test
  .stdout()
  .command(['start', 'test'])
  .it('starts timebox with name', ctx => {
    expect(ctx.stdout).to.contain('Timebox test').to.contain('started')
  })
})
