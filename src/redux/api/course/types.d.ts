namespace COURSE {
    type GetCourseResponse = {
        id: number
        name: string
        author: string
        price: number
        image: string
        description: string
        city: string
        created_date: string
        updated_date: string
      }[]
      type GetCourseRequest = void
}