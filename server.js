const prompts = require('prompts');
const mongoose = require("mongoose"); 

prompts.override(require('yargs').argv);

const keys = require('./config/keys.js');

const { authQuestions } = require('./question');

const { validateUser, isTerminated } = require('./actions');

(async () => {
  // mongoose connection
  try {
    const mongoosePromise = await mongoose.connect(keys.mlabs_mongo_url, { useNewUrlParser: true });
    console.log('MongoDB connected...');
    await mainFuntion();
  } catch (error) {
    console.error(error); 
  }
  process.exit();
})();

const mainFuntion = async () => {
  
  const authResponse = await prompts(authQuestions);

  const validatedResult = validateUser(authResponse);

  if (validatedResult.isValid) {
    // perform validation code here
    return console.log(validatedResult.message);
  } else if (isTerminated(authResponse) || !validatedResult.isValid) {
    return console.error(validatedResult.message);
  }
};
