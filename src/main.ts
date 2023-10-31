import * as core from '@actions/core'
import * as github from '@actions/github'

async function run() {
  const token = core.getInput('github-token')
  const client = github.getOctokit(token)
  // create a review
  client.rest.pulls.createReview({
    owner: github.context.payload.repository!.owner.login,
    repo: github.context.payload.repository!.name,
    pull_number: github.context.payload.pull_request!.number,
    event: 'APPROVE',
    body: 'LGTM'
  })
}

run()
