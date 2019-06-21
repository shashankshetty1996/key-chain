module.exports = [
  {
    type: 'text',
    name: 'username',
    message: 'Enter your user name',
    onRender(kleur) {
      this.msg = kleur.cyan().bold('Enter your user name');
    }
  },
  {
    type: 'invisible',
    name: 'password',
    message: 'Enter your password',
    onRender(kleur) {
      this.msg = kleur.cyan().bold('Enter your password');
    }
  }
];
