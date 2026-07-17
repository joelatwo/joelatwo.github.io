export interface ContentItem {
  type: string;
  text: string;
  id: string;
}

export interface Project {
  title: string;
  description: string;
  tagList: string[];
  content: ContentItem[];
  lessonsLearned: ContentItem[];
  skills: string[];
}
