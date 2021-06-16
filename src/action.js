const core = require('@actions/core');
const { Octokit } = require("@octokit/rest")

const token = core.getInput('token');

console.log(token);

const owner = core.getInput('owner');

console.log(owner);

const repo = core.getInput('repo');

console.log(repo);

const head = core.getInput('head');

console.log(head);

const base = core.getInput('base');

console.log(base);

const octokit = new Octokit({
  auth: token,
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error
  },
})

async function run() {
  try {
    let result = await octokit.request('POST /repos/{owner}/{repo}/pulls', {
          owner: owner,
          repo: repo,
          head: head,
          base: base,
          title: 'test'
        })
    console.log(result);
  } catch (error) {
      console.log(error.message);
      core.setFailed(error.message);
  }


  }
  run();