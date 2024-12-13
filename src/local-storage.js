export function getLocalStorage() {
  try {
    const savedCode = localStorage.getItem('my-code');

    if (savedCode === null) {
      return "console.log('hello world!') //print('hello world!')";
    }

    return JSON.parse(savedCode);
  } catch (error) {
    return undefined;
  }
};

export function saveLocalStorage(value) {
  try {
    const mustBeSaved = JSON.stringify(value)
    localStorage.setItem('my-code', mustBeSaved);
  } catch (error) {
    console.log(error)
  }
};