import { api as index } from "..";

const api = index.injectEndpoints({
    endpoints: build => ({
        getWorkShop: build.query<WORKSHOP.GetWorkShopResponse, WORKSHOP.GetWorkShopeRequest>({
            query: () => ({
                url: "/freeworkshops/",
                method: "GET"
            }),
            providesTags: ["workShop"]
        }),
        
    })
})


export const {useGetWorkShopQuery} = api