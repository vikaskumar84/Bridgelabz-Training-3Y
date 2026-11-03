const arrowUser = {
  name: 'Dev',
  showName: () => {
    console.log(this.name);
  },
};
arrowUser.showName();
const regularUser = {
  name: 'Dev',
  showName: function () {
    console.log(this.name);
  },
};
regularUser.showName();
