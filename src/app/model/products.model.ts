//product definition
export interface Producto {
  search_metadata:    SearchMetadata;
  search_parameters:  SearchParameters;
  search_information: SearchInformation;
  product_result:     ProductResult;
  reviews_results:    ReviewsResults;
}

//Search metada definition
export interface SearchMetadata {
  id:                  string;
  status:              Status;
  json_endpoint:       string;
  created_at:          string;
  processed_at:        string;
  walmart_product_url: string;
  raw_html_file:       string;
  total_time_taken:    number;
}

export enum Status {
  Success = "Success",
}

//Search parameters definition
export interface SearchParameters {
  product_id: string;
  engine:     Engine;
  device:     Device;
}

export enum Device {
  Desktop = "desktop",
}

export enum Engine {
  WalmartProduct = "walmart_product",
}

//search information definition
export interface SearchInformation {
  location: Location;
}

export interface Location {
  postal_code:   string;
  province_code: string;
  city:          string;
  store_id:      string;
}

//product result definition
export interface ProductResult {
  us_item_id:                string;
  product_id:                string;
  upc?:                      string;
  title:                     string;
  short_description_html:    string;
  detailed_description_html: string;
  categories:                Category[];
  seller_id:                 string;
  seller_name:               string;
  specification_highlights:  SpecificationHighlight[];
  manufacture_number?:       string;
  product_type_id:           string;
  product_type:              string;
  manufacturer:              string;
  product_page_url:          string;
  price_map:                 PriceMap;
  min_quantity:              number;
  max_quantity:              number;
  in_stock:                  boolean;
  images:                    string[];
  reviews:                   number;
  rating?:                   number;
  offer_id:                  string;
  offer_type:                OfferType;
  offers:                    Offer[];
  delivery_option?:          DeliveryOption;
  shipping_price?:           number;
  pickup_options?:           PickupOption[];
  variant_swatches?:         VariantSwatch[];
}

export interface Category {
  name: string;
  url:  string;
}

export interface SpecificationHighlight {
  key:          string;
  value:        string;
  display_name: string;
}

export interface PriceMap {
  price:       number;
  was_price?:  Price;
  currency:    Currency;
  unit_price?: Price;
}

export interface Price {
  price:              number;
  priceString:        string;
  variantPriceString: null;
  currencyUnit:       Currency;
  bestValue:          null;
}

export enum Currency {
  Usd = "USD",
}

export enum OfferType {
  OnlineAndStore = "ONLINE_AND_STORE",
  OnlineOnly = "ONLINE_ONLY",
}

export interface Offer {
  seller_id:           string;
  catalog_seller_id:   number;
  seller_name:         string;
  seller_display_name: string;
  price:               number;
}

export interface DeliveryOption {
  ship_method?:          ShipMethod;
  arrival_date?:         number;
  display_arrival_date?: string;
}

export enum ShipMethod {
  Freight = "FREIGHT",
  OneDay = "ONE_DAY",
  SameDay = "SAME_DAY",
  ThreeToFiveDay = "THREE_TO_FIVE_DAY",
  TwoDay = "TWO_DAY",
}

export interface PickupOption {
  availability:  Availability;
  pickup_method: PickupMethod;
}

export enum Availability {
  Available = "AVAILABLE",
}

export enum PickupMethod {
  PickupCurbside = "PICKUP_CURBSIDE",
  PickupInstore = "PICKUP_INSTORE",
}

export interface VariantSwatch {
  name:                 string;
  available_selections: AvailableSelection[];
}

export interface AvailableSelection {
  name:              string;
  swatch_image_url?: string;
}

//revies results definition
export interface ReviewsResults {
  ratings: Rating[];
  reviews: Reviews;
}

export interface Rating {
  stars: number;
  count: number;
}

export interface Reviews {
  rating?:           number;
  count:             number;
  top_positive?:     TopPostiveNegativeAndCustomerReviews;
  top_negative?:     TopPostiveNegativeAndCustomerReviews;
  top_mentions?:     TopMention[];
  customer_reviews?: TopPostiveNegativeAndCustomerReviews[];
}

export interface TopPostiveNegativeAndCustomerReviews {
  title?:                 string;
  text?:                  string;
  rating:                 number;
  review_submission_time: string;
  user_nickname?:         string;
  customer_type?:         CustomerType[];
  positive_feedback?:     number;
  negative_feedback?:     number;
}

export enum CustomerType {
  IncentivizedReviewYes = "IncentivizedReviewYes",
  SRIncentivizedReviewYes = "SRIncentivizedReviewYes",
  Staff = "Staff",
  Top1000Contributor = "top1000Contributor",
  Top100Contributor = "top100Contributor",
  Top250Contributor = "top250Contributor",
  Top500Contributor = "top500Contributor",
  Top50Contributor = "top50Contributor",
  VerifiedPurchaser = "VerifiedPurchaser",
}

export interface TopMention {
  score_percentage: number;
  name:             string;
  count:            number;
}
