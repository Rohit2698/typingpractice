import { IWikiSearchText } from "./AutoComplete";

export const transformSearchResult = (res: any): IWikiSearchText[] => {
    if (res.length > 0) {
        return res.map((item: any) => ({
            name: item.title,
            pageId: item.pageid
        }));
    }
    return [];
}