const baseUrl = "https://en.wikipedia.org/w/api.php?";

export const getSearchWikipediaResult = (searched: string) => `${baseUrl}action=query&format=json&list=search&utf8=1&srsearch=${searched}`