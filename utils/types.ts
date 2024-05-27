export type navLinks = {
  href: string;
  label: string;
};

export type heroImage = {
  src: string;
  label?: string;
  altHeight?: string;
  mobileHeight?: string;
  carousel?: boolean;
};


export type menuItem = {
    name: string;
    price: number;
    ingredients: string[];
    image?: string; // Image is optional
};

export type menuType = {
    [category: string]: {
        [subcategory: string]: menuItem[];
    };
};
