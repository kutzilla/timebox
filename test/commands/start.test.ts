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
  .command(['start', 'test-name'])
  .it('starts timebox with name', ctx => {
    expect(ctx.stdout).to.contain('Timebox').to.contain('test-name').to.contain('started')
  })

  test
  .stdout()
  .command(['start', 'test-name', 'test-context'])
  .it('starts timebox with name and context', ctx => {
    expect(ctx.stdout).to.contain('Timebox').to.contain('test-name').to.contain('started')
    .to.contain('with context').to.contain('test-context')
  })
})
