import {api} from "../config_f/network.js";

export const getFriends = async (data) => {
    const res = await api("/friends", "get", data);
    return res;
};