function localStorageClear() {
    localStorage.length;
    window.localStorage.clear();
    localStorage.length;
  }
  
  function localStorageGetItem(key) {
    localStorage.length;
    const item = window.localStorage.getItem(key);
    localStorage.length;
    return item;
  }
  
  function localStorageSetItem(key, item) {
    localStorage.length;
    window.localStorage.setItem(key, item);
    localStorage.length;
  }
  
  function localStorageRemoveItem(key) {
    localStorage.length;
    window.localStorage.removeItem(key);
    localStorage.length;
  }