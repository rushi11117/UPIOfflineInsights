// Get an item from sessionStorage
export const getSessionStorageItem = (key) => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error retrieving item from sessionStorage:', error);
      return null;
    }
  };
  
  // Set an item in sessionStorage
  export const setSessionStorageItem = (key, value) => {
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error setting item in sessionStorage:', error);
    }
  };
  
  // Remove an item from sessionStorage
  export const removeSessionStorageItem = (key) => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from sessionStorage:', error);
    }
  };
  