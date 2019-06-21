module.exports = [
  {
    type: 'multiselect',
    name: 'account_type',
    message: 'Choice your application',
    choices: [
      { title: 'Facebook', value: 'my_fb_password' },
      { title: 'gmail', value: 'okay-gmail-password' }
    ],
    validate: value => {
      if (value.length === 0) {
        return 'Please select at least one account';
      }
      return true;
    }
  },
  {
    type: 'confirm',
    name: 'confirmation',
    message: 'Are you sure that want this social media password?'
  }
];
