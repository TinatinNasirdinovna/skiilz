import { api as index } from "..";

const api = index.injectEndpoints({
    endpoints: build => ({
        getCourse: build.query<COURSE.GetCourseResponse, COURSE.GetCourseRequest>({
            query: () => ({
                url: "/courses/",
                method: "GET"
            }),
            providesTags: ["course"]
        }),
        
    })
})


export const {useGetCourseQuery} = api