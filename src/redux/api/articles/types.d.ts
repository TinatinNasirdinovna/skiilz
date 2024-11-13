namespace ARTICLES {
  type GetArticlesResponse = {
    id: number;
    name: string;
    author: string;
    image: string;
    created_date: string;
    updated_date: string;
  }[];
  type GetArticlesRequest = void

  
}
