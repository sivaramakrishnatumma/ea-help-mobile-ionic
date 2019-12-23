export interface IProduct {
  urlName: string;
  name: string;
  franchise: Franchise;
  lifeCycle?: any;
  releaseDate: string;
  platforms?: any;
  productPack: string;
  isMobile: boolean;
  altNames: string;
  builtUrlName: string;
  isFeatured: boolean;
}

interface Franchise {
  urlName: string;
}

export interface IPlatform {
  name: string;
  id: string;
}

export interface ITopic {
  id: string;
  urlName: string;
  name: string;
  aliasobj: any;
  enName: string;
}

export interface IIssue {
  name: string;
  urlName: string;
}