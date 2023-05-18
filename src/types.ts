export interface ShopParams {
  categories?: Array<string>;
  subCategories?: Array<string>;
  tag?: Array<string>;
  max_price?: number;
  min_price?: number;
  page?: number;
  size?: Array<string>;
}
