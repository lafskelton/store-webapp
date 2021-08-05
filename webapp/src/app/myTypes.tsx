// ################ ITEMS
//
//Defines an item
export interface ItemData {
  sectionId: number;
  rowId: number;
  rowType: RowType;
  id: string;
  title: string;
  price: number;
  variantColors: string[];
  tileImg: string;
  // galleryImgList: string[];
  galleryImgList: GalleryImageElement[];
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
