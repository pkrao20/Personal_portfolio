export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  sections: { heading: string; body: string[] }[];
};

export type InterviewRound = {
  name: string;
  type: string;
  description: string;
  questions: string[];
  tips: string;
};

export type InterviewEntry = {
  slug: string;
  company: string;
  role: string;
  date: string;
  outcome: string;
  excerpt: string;
  rounds: InterviewRound[];
  overallTips: string;
};
