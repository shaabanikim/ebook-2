
export interface TocItem {
  chapter: string;
  title: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export enum PurchaseStep {
  Email,
  Payment,
  Confirmation,
}
