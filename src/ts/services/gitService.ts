import { IGitResponse } from "./../models/IGitResponse";
import { IRepo } from "./../models/IRepo";
import axios from "axios";

/* export const getData = async (): Promise<IRepo[]> => {
    return axios
    .get<IGitResponse>("https://api.github.com/users/wilmawiker/repos")
    .then((data) => {
        return data.data.Data;
    })
    .catch(() => {
        return [];
    });
};  */

export async function getData(): Promise<IRepo[]> {
    let response = await axios.get<IGitResponse>("https://api.github.com/users/wilmawiker/repos");
    console.log(response.data)
    return response.data.data;
} 