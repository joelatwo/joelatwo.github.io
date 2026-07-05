export interface ContentItem {
  type: string;
  text: string;
  id: string;
}

export interface Project {
  title: string;
  description: string;
  status: string;
  content: ContentItem[];
  lessonsLearned: ContentItem[];
}
