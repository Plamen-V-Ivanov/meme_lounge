import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";

export function login(email, password) {
    const result = post('/users/login', {email, password});
    const userData = {
        id: result._id,
        username: result.username,
        email: result.email,
        gender: result.gender,
        accessToken: result.accessToken,
    };

    setUserData(userData);
    return result;

}

export function logout(){
}

export function register(username, email, password, gender) {
    const result = post('/users/register', {username, email, password, gender});
    const userData = {
        id: result._id,
        username: result.username,
        email: result.email,
        gender: result.gender,
        accessToken: result.accessToken,
    };

    setUserData(userData);
    get('/users/logout');
    clearUserData()
}