export const login = () => {
    try {
        sessionStorage.setItem('isLoggedIn', true);
    } catch (error) {
        console.error('Error from sessionStorage:', error);
    }
};


export const logout = () => {
    try {
        sessionStorage.setItem('isLoggedIn', false);
    } catch (error) {
        console.error('Error from sessionStorage:', error);
    }
};


export const checkLogin = () => {
    console.log('checkLogin');
    try {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        return true ? isLoggedIn : false;
    } catch (error) {
        console.error('Error from sessionStorage:', error);
        return null;
    }
};