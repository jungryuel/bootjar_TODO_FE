import {api, api_user} from "../config_f/network.js";

export const getFriends = async (data) => {
    const res = await api("/friends", "get", data);
    return res;
};

export const getSearchList = async (data) => {
    const res = await api_user("/users/search", "get", data);
    return res;
};