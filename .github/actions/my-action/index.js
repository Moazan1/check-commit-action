const core = require('@actions/core');

const myInput = core.getInput('commit_message', { required: true });

if(myInput.includes('!X'))
{
    core.setOutput('AllowBuild' , true);
}
else{
    core.setOutput('AllowBuild' , false);
}