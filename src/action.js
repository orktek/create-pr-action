const core = require('@actions/core');
const { Octokit } = require("@octokit/rest")

const token = core.getInput('token');

console.log(token);

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
  
  console.log('run');

  const owner = core.getInput('owner');
  const repo = core.getInput('repo');
  const head = core.getInput('head');
  const base = core.getInput('base');

  try {
    let result = await octokit.request('POST /repos/{owner}/{repo}/pulls', {
          owner: owner,
          repo: repo,
          head: head,
          base: base,
          title: 'test'
        })
    console.log(result.status);
  } catch (error) {
      console.log(error);
      console.log(error.message);
      core.setFailed(error.message);
  }


  }
  run();