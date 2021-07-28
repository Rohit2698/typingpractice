import { Client } from "../../base/Client"
import { getSearchWikipediaResult } from "../../constants/ApiConstants";

export const getSearchResult = (searchText: string): Promise<any> => (
    Client.getInstance()
        .getData(getSearchWikipediaResult(searchText))
        .then((res) => { console.log(res.data.query.search); return Promise.resolve(res.data.query.search) }).catch(() => Promise.reject([]))
);