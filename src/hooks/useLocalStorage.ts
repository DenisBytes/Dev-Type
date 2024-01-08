"use client";
export function useLocalStorage() {

    const getLocalStorage = (key: string) => {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.log("Error getting value from localStorage: ", error);
        }
    };

    const setLocalStorage = (key: string, value: number) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log("Error setting value in localStorage: ", error);
        }
    };

    return { getLocalStorage, setLocalStorage };
};