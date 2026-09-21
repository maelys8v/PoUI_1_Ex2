export interface Article {
  title: string;
  subtitle: string;
  body: string;
  abstract: string;
  category: 'National' | 'International' | 'Sports' | 'Economy';
  id: number;
  show: null | 1;
}