const core = require('@actions/core');


const { Octokit } = require("@octokit/rest")

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');


const octokit = new Octokit({



  auth: GITHUB_TOKEN,
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
          owner: 'saturn-sonic',
          repo: 'monorepo',
          head: 'release/5.10',
          base: 'master',
          title: 'test'
        })

    console.log(result);
  
  } catch (error) {
      console.log(error.message);
      core.setFailed(error.message);
  }


  }
  run();