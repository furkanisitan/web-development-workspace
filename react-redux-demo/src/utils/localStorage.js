export default class Storage {
  static setArray(key, arr) {
    localStorage.setItem(key, JSON.stringify(arr));
  }

  static getArray(key) {
    const arr = localStorage.getItem(key);
    return arr === null ? [] : JSON.parse(arr);
  }
}
