// ################ ITEMS

export interface ShoppingCartItem {
  item: ItemData;
  variant: number;
  qty: number;
  size: "xsm" | "sm" | "md" | "lg" | "xlg";
}
//
//Defines an item
export interface ItemData {
  sectionId: number;
  rowId: number;
  rowType: RowType;
  id: string;
  title: string;
  price: number;
  // variantColors: string[];
  variants: ItemVariant[];
  tileImg: string;
  // galleryImgList: string[];
  galleryImgList: GalleryImageElement[];
  selectedSize: "xsm" | "sm" | "md" | "lg" | "xlg";
}

export interface ItemVariant {
  buttonColor: string;
  assocGalleryImg: number; //Index of GalleryImageElement in galleryImgList
  selected: boolean;
}

export interface GalleryImageElement {
  imgSrc: string;
  imgDesc: string;
}

//Defines a row
export interface RowData {
  sectionId: number;
  rowId: number;
  rowType: RowType;
  numItems: number;
  items: ItemData[];
}

export enum RowType {
  sectionTitle,
  full, // Full width tile
  double, //Two tiles side by side
  single, //single right aligned tile
}
export interface BrowseManifest {
  rows: RowData[];
}

export interface SideDrawerState {
  itemData: ItemData;
}

// ################ ITEMS
//
