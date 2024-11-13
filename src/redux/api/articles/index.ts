import { api as index } from "..";

const api = index.injectEndpoints({
    endpoints: build => ({
        getArticles: build.query<ARTICLES.GetArticlesResponse, ARTICLES.GetArticlesRequest>({
            query: () => ({
                url: "/articles/",
                method: "GET"
            }),
            providesTags: ["articles"]
        }),
        
    })
})

export const {useGetArticlesQuery} = api