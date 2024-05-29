import { StackType } from "../components/Home/Article/Article";

type Article = {
  id: number;
  title: String;
  description: String;
  stack: Array<StackType>;
};

export default Article;
