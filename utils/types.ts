export type navLinks = {
  href: string;
  label: string;
  dropdown?: boolean; // Indicates if it's a dropdown item
  dropdownItems?: { href: string; label: string }[]; // Dropdown items if it's a dropdown
};

export type heroImage = {
  src?: string;
  label?: string;
  label2?: string,
  altHeight?: boolean;
  carousel?: boolean;
};

export type menuItem = {
  name: string;
  price: number;
  ingredients: string;
  image?: string; // Image is optional
};

export type menuType = {
  [category: string]: {
      [subcategory: string]: menuItem[];
  };
};

export type locationType = {
  [location: string]: {
    address: string;
    phone: string;
    hours: { [day: string]: string }; 
    happyHour?: string;
    image?: string;
  };
};

export type FormData = {
  name: string;
  email: string;
  message: string;
};
