export interface Story {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  organization: string;
  role: string;
  summary: string;
  reportingDetails: string[];
  keyInterviews?: string[];
  imageSrc?: string;
  secondaryImageSrc?: string;
  videoSrc?: string;
  youtubeId?: string;
  featured?: boolean;
  tier: 1 | 2 | 3;
}

export interface Interview {
  id: string;
  personName: string;
  designation: string;
  context: string;
  organization: string;
  date?: string;
  isExclusive?: boolean;
  youtubeId?: string;
}

export interface CareerMilestone {
  period: string;
  role: string;
  organization: string;
  location: string;
  beats: string[];
  highlights: string[];
  description: string;
  current?: boolean;
}
