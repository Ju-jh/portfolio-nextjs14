export type PostType = {
  id: number;
  title: string;
  content: string;
  author?: {
    name: string;
  };
};
