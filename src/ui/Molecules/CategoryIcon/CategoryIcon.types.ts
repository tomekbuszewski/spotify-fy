export interface ICategoryIcon {
  height: number;
  width: number;
  url: string;
}

export interface ICategory {
  id: string;
  name: string;
  icons?: ICategoryIcon[];
  images?: ICategoryIcon[];
  href: string;
}
