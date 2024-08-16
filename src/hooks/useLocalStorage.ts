function useLocalStorage() {
  
  
  const setData = (key: string, value: string) => {
    if (key && value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const getData = (key: string) => {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);

    return null;
  };

  const clearStorage = ()=> localStorage.clear();
  return { setData, getData,clearStorage };
}

export default useLocalStorage;
