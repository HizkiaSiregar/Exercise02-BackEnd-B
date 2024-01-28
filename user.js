let usersData = [];

function setData(data) {
  usersData = data;
}

function getData() {
  return usersData;
}

module.exports = {
  setData,
  getData,
};
