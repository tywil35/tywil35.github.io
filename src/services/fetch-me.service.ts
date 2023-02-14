import { Me } from "../types/me.type";

export const FetchMe = async ():Promise<Me> => {
    return fetch('/assets/me.json', { method: 'get' }).then(res=>res.json());
}