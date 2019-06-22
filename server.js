const prompts = require('prompts');
const mongoose = require("mongoose"); 

prompts.override(require('yargs').argv);

const keys = require('./config/keys.js');

const { authQuestions } = require('./question');

const { validateUser, isTerminated } = require('./actions');

(async () => {
  // mongoose connection
  try {
    const mongoosePromise = await mongoose.connect(keys.mongo_url, { useNewUrlParser: true });
    console.log('MongoDB connected...');
    mainFuntion();
  } catch (error) {
    console.error(error); 
  }
})();

const mainFuntion = async () => {
  
  const authResponse = await prompts(authQuestions);

  const validatedResult = validateUser(authResponse);

  console.log(isTerminated(authResponse), validatedResult.isValid);
  if (validatedResult.isValid) {
    // perform validation code here
  } else if (isTerminated(authResponse) || !validatedResult.isValid) {
    console.error(validatedResult.message);
  }
};
