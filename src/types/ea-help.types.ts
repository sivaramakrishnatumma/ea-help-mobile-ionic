export interface IProduct {
  id: string;
  name: string;
  platforms?: string[];
  topics?: string[];
  altNames: string;
  imageUrl: string;
}

export interface IPlatform {
  name: string;
  id: string;
  imageUrl: string;
}

export interface ITopic {
  id: string;
  name: string;
  issues: string[];
}

export interface IIssue {
  name: string;
  id: string;
}
