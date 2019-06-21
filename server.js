const prompts = require('prompts');
prompts.override(require('yargs').argv);

const { authQuestions } = require('./questions');

const { validateUser, isTerminated } = require('./actions');

(async () => {
  const authResponse = await prompts(authQuestions);

  const validatedResult = validateUser(authResponse);

  console.log(isTerminated(authResponse), validatedResult.isValid);
  if (validatedResult.isValid) {
    // perform validation code here
  } else if (isTerminated(authResponse) || !validatedResult.isValid) {
    console.error(validatedResult.message);
  }
})();
