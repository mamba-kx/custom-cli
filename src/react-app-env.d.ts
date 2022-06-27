/// <reference types="react-scripts" />
declare module "*.module.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const image: string;
  export default image;
}

declare module "*.jpg" {
  const image: string;
  export default image;
}

declare module "*.jpeg" {
  const image: string;
  export default image;
}

declare module "*.gif" {
  const image: string;
  export default image;
}
