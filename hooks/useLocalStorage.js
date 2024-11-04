const useLocalStorage = (key) => {
  const saveData = (data) => {
    const storage = JSON.parse(localStorage.getItem(key)) || {};

    localStorage.setItem(key, JSON.stringify({ ...storage, ...data }));
  };

  const getItem = () => {
    const storage = JSON.parse(localStorage.getItem(key)) || {};

    return storage;
  };

  return { saveData, getItem };
};

export default useLocalStorage;
