const addtodb = (breakTime) => {
  let storage;
  const storedTime = JSON.parse(localStorage.getItem("break-time"));
  storage = {};
  storage[breakTime] = breakTime;

  localStorage.setItem("break-time", JSON.stringify(storage));
  return storedTime;
};

const getStoredTime = () => {
  //   let storage;
  const storedTime = JSON.parse(localStorage.getItem("break-time"));

  return storedTime;
};

export { addtodb, getStoredTime };
