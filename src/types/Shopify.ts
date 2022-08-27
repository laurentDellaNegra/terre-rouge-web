import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { GraphQLClient } from 'graphql-request'
import { RequestInit } from 'graphql-request/dist/types.dom'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit['headers']
) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers)
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  Decimal: any
  HTML: any
  Money: any
  URL: any
}

/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 *
 */
export type IApiVersion = {
  __typename?: 'ApiVersion'
  /** The human-readable name of the version. */
  displayName: Scalars['String']
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String']
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
  supported: Scalars['Boolean']
}

/** Details about the gift card used on the checkout. */
export type IAppliedGiftCard = INode & {
  __typename?: 'AppliedGiftCard'
  /**
   * The amount that was taken from the gift card by applying it.
   * @deprecated Use `amountUsedV2` instead
   */
  amountUsed: Scalars['Money']
  /** The amount that was taken from the gift card by applying it. */
  amountUsedV2: IMoneyV2
  /**
   * The amount left on the gift card.
   * @deprecated Use `balanceV2` instead
   */
  balance: Scalars['Money']
  /** The amount left on the gift card. */
  balanceV2: IMoneyV2
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The last characters of the gift card. */
  lastCharacters: Scalars['String']
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: IMoneyV2
}

/** An article in an online store blog. */
export type IArticle = IHasMetafields &
  INode &
  IOnlineStorePublishable & {
    __typename?: 'Article'
    /**
     * The article's author.
     * @deprecated Use `authorV2` instead
     */
    author: IArticleAuthor
    /** The article's author. */
    authorV2?: Maybe<IArticleAuthor>
    /** The blog that the article belongs to. */
    blog: IBlog
    /** List of comments posted on the article. */
    comments: ICommentConnection
    /** Stripped content of the article, single line with HTML tags removed. */
    content: Scalars['String']
    /** The content of the article, complete with HTML formatting. */
    contentHtml: Scalars['HTML']
    /** Stripped excerpt of the article, single line with HTML tags removed. */
    excerpt?: Maybe<Scalars['String']>
    /** The excerpt of the article, complete with HTML formatting. */
    excerptHtml?: Maybe<Scalars['HTML']>
    /**
     * A human-friendly unique string for the Article automatically generated from its title.
     *
     */
    handle: Scalars['String']
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** The image associated with the article. */
    image?: Maybe<IImage>
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<IMetafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
     *
     */
    metafields: IMetafieldConnection
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe<Scalars['URL']>
    /** The date and time when the article was published. */
    publishedAt: Scalars['DateTime']
    /** The article’s SEO information. */
    seo?: Maybe<ISeo>
    /** A categorization that a article can be tagged with. */
    tags: Array<Scalars['String']>
    /** The article’s name. */
    title: Scalars['String']
    /**
     * The url pointing to the article accessible from the web.
     * @deprecated Use `onlineStoreUrl` instead
     */
    url: Scalars['URL']
  }

/** An article in an online store blog. */
export type IArticleCommentsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** An article in an online store blog. */
export type IArticleContentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/** An article in an online store blog. */
export type IArticleExcerptArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/** An article in an online store blog. */
export type IArticleImageArgs = {
  crop?: InputMaybe<ICropRegion>
  maxHeight?: InputMaybe<Scalars['Int']>
  maxWidth?: InputMaybe<Scalars['Int']>
  scale?: InputMaybe<Scalars['Int']>
}

/** An article in an online store blog. */
export type IArticleMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** An article in an online store blog. */
export type IArticleMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** The author of an article. */
export type IArticleAuthor = {
  __typename?: 'ArticleAuthor'
  /** The author's bio. */
  bio?: Maybe<Scalars['String']>
  /** The author’s email. */
  email: Scalars['String']
  /** The author's first name. */
  firstName: Scalars['String']
  /** The author's last name. */
  lastName: Scalars['String']
  /** The author's full name. */
  name: Scalars['String']
}

/**
 * An auto-generated type for paginating through multiple Articles.
 *
 */
export type IArticleConnection = {
  __typename?: 'ArticleConnection'
  /** A list of edges. */
  edges: Array<IArticleEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one Article and a cursor during pagination.
 *
 */
export type IArticleEdge = {
  __typename?: 'ArticleEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ArticleEdge. */
  node: IArticle
}

/** The set of valid sort keys for the Article query. */
export enum IArticleSortKeys {
  /** Sort by the `author` value. */
  Author = 'AUTHOR',
  /** Sort by the `blog_title` value. */
  BlogTitle = 'BLOG_TITLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `published_at` value. */
  PublishedAt = 'PUBLISHED_AT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
}

/** Represents a generic custom attribute. */
export type IAttribute = {
  __typename?: 'Attribute'
  /** Key or name of the attribute. */
  key: Scalars['String']
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>
}

/** Specifies the input fields required for an attribute. */
export type IAttributeInput = {
  /** Key or name of the attribute. */
  key: Scalars['String']
  /** Value of the attribute. */
  value: Scalars['String']
}

/**
 * Automatic discount applications capture the intentions of a discount that was automatically applied.
 *
 */
export type IAutomaticDiscountApplication = IDiscountApplication & {
  __typename?: 'AutomaticDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: IDiscountApplicationAllocationMethod
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: IDiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: IDiscountApplicationTargetType
  /** The title of the application. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: IPricingValue
}

/** A collection of available shipping rates for a checkout. */
export type IAvailableShippingRates = {
  __typename?: 'AvailableShippingRates'
  /**
   * Whether or not the shipping rates are ready.
   * The `shippingRates` field is `null` when this value is `false`.
   * This field should be polled until its value becomes `true`.
   *
   */
  ready: Scalars['Boolean']
  /** The fetched shipping rates. `null` until the `ready` field is `true`. */
  shippingRates?: Maybe<Array<IShippingRate>>
}

/** An online store blog. */
export type IBlog = IHasMetafields &
  INode &
  IOnlineStorePublishable & {
    __typename?: 'Blog'
    /** Find an article by its handle. */
    articleByHandle?: Maybe<IArticle>
    /** List of the blog's articles. */
    articles: IArticleConnection
    /** The authors who have contributed to the blog. */
    authors: Array<IArticleAuthor>
    /**
     * A human-friendly unique string for the Blog automatically generated from its title.
     *
     */
    handle: Scalars['String']
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<IMetafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
     *
     */
    metafields: IMetafieldConnection
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe<Scalars['URL']>
    /** The blog's SEO information. */
    seo?: Maybe<ISeo>
    /** The blogs’s title. */
    title: Scalars['String']
    /**
     * The url pointing to the blog accessible from the web.
     * @deprecated Use `onlineStoreUrl` instead
     */
    url: Scalars['URL']
  }

/** An online store blog. */
export type IBlogArticleByHandleArgs = {
  handle: Scalars['String']
}

/** An online store blog. */
export type IBlogArticlesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<IArticleSortKeys>
}

/** An online store blog. */
export type IBlogMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** An online store blog. */
export type IBlogMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple Blogs.
 *
 */
export type IBlogConnection = {
  __typename?: 'BlogConnection'
  /** A list of edges. */
  edges: Array<IBlogEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one Blog and a cursor during pagination.
 *
 */
export type IBlogEdge = {
  __typename?: 'BlogEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of BlogEdge. */
  node: IBlog
}

/** The set of valid sort keys for the Blog query. */
export enum IBlogSortKeys {
  /** Sort by the `handle` value. */
  Handle = 'HANDLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
}

/** Card brand, such as Visa or Mastercard, which can be used for payments. */
export enum ICardBrand {
  /** American Express. */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /** Diners Club. */
  DinersClub = 'DINERS_CLUB',
  /** Discover. */
  Discover = 'DISCOVER',
  /** JCB. */
  Jcb = 'JCB',
  /** Mastercard. */
  Mastercard = 'MASTERCARD',
  /** Visa. */
  Visa = 'VISA',
}

/** A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart. To learn how to interact with a cart during a customer's session, refer to [Manage a cart with the Storefront API](https://shopify.dev/api/examples/cart). */
export type ICart = INode & {
  __typename?: 'Cart'
  /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
  attributes: Array<IAttribute>
  /** Information about the buyer that is interacting with the cart. */
  buyerIdentity: ICartBuyerIdentity
  /** The URL of the checkout for the cart. */
  checkoutUrl: Scalars['URL']
  /** The date and time when the cart was created. */
  createdAt: Scalars['DateTime']
  /**
   * The case-insensitive discount codes that the customer added at checkout.
   *
   */
  discountCodes: Array<ICartDiscountCode>
  /**
   * The estimated costs that the buyer will pay at checkout. The estimated costs are subject to change and changes will be reflected at checkout. The `estimatedCost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-cart).
   * @deprecated Use `cost` instead
   */
  estimatedCost: ICartEstimatedCost
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** A list of lines containing information about the items the customer intends to purchase. */
  lines: ICartLineConnection
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: Maybe<Scalars['String']>
  /** The date and time when the cart was updated. */
  updatedAt: Scalars['DateTime']
}

/** A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart. To learn how to interact with a cart during a customer's session, refer to [Manage a cart with the Storefront API](https://shopify.dev/api/examples/cart). */
export type ICartLinesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Return type for `cartAttributesUpdate` mutation. */
export type ICartAttributesUpdatePayload = {
  __typename?: 'CartAttributesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<ICart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ICartUserError>
}

/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
export type ICartAutomaticDiscountAllocation = ICartDiscountAllocation & {
  __typename?: 'CartAutomaticDiscountAllocation'
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: IMoneyV2
  /** The title of the allocated discount. */
  title: Scalars['String']
}

/** Represents information about the buyer that is interacting with the cart. */
export type ICartBuyerIdentity = {
  __typename?: 'CartBuyerIdentity'
  /** The country where the buyer is located. */
  countryCode?: Maybe<ICountryCode>
  /** The customer account associated with the cart. */
  customer?: Maybe<ICustomer>
  /** The email address of the buyer that is interacting with the cart. */
  email?: Maybe<Scalars['String']>
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: Maybe<Scalars['String']>
}

/**
 * Specifies the input fields to update the buyer information associated with a cart.
 * Buyer identity is used to determine
 * [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-checkout)
 * and should match the customer's shipping address.
 *
 */
export type ICartBuyerIdentityInput = {
  /** The country where the buyer is located. */
  countryCode?: InputMaybe<ICountryCode>
  /** The access token used to identify the customer associated with the cart. */
  customerAccessToken?: InputMaybe<Scalars['String']>
  /** The email address of the buyer that is interacting with the cart. */
  email?: InputMaybe<Scalars['String']>
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: InputMaybe<Scalars['String']>
}

/** Return type for `cartBuyerIdentityUpdate` mutation. */
export type ICartBuyerIdentityUpdatePayload = {
  __typename?: 'CartBuyerIdentityUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<ICart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ICartUserError>
}

/** The discount that has been applied to the cart line using a discount code. */
export type ICartCodeDiscountAllocation = ICartDiscountAllocation & {
  __typename?: 'CartCodeDiscountAllocation'
  /** The code used to apply the discount. */
  code: Scalars['String']
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: IMoneyV2
}

/** Return type for `cartCreate` mutation. */
export type ICartCreatePayload = {
  __typename?: 'CartCreatePayload'
  /** The new cart. */
  cart?: Maybe<ICart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ICartUserError>
}

/** The discounts that have been applied to the cart line. */
export type ICartDiscountAllocation = {
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: IMoneyV2
}

/** The discount codes applied to the cart. */
export type ICartDiscountCode = {
  __typename?: 'CartDiscountCode'
  /** Whether the discount code is applicable to the cart's current contents. */
  applicable: Scalars['Boolean']
  /** The code for the discount. */
  code: Scalars['String']
}

/** Return type for `cartDiscountCodesUpdate` mutation. */
export type ICartDiscountCodesUpdatePayload = {
  __typename?: 'CartDiscountCodesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<ICart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ICartUserError>
}

/** Possible error codes that can be returned by `CartUserError`. */
export enum ICartErrorCode {
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Merchandise line was not found in cart. */
  InvalidMerchandiseLine = 'INVALID_MERCHANDISE_LINE',
  /** The input value should be less than the maximum value allowed. */
  LessThan = 'LESS_THAN',
  /** Missing discount code. */
  MissingDiscountCode = 'MISSING_DISCOUNT_CODE',
  /** Missing note. */
  MissingNote = 'MISSING_NOTE',
}

/**
 * The estimated costs that the buyer will pay at checkout.
 * It uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine
 * [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-cart).
 *
 */
export type ICartEstimatedCost = {
  __typename?: 'CartEstimatedCost'
  /** The estimated amount, before taxes and discounts, for the customer to pay. */
  subtotalAmount: IMoneyV2
  /** The estimated total amount for the customer to pay. */
  totalAmount: IMoneyV2
  /** The estimated duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe<IMoneyV2>
  /** The estimated tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe<IMoneyV2>
}

/** Specifies the input fields to create a cart. */
export type ICartInput = {
  /** An array of key-value pairs that contains additional information about the cart. */
  attributes?: InputMaybe<Array<IAttributeInput>>
  /** The customer associated with the cart. Used to determine [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-checkout). Buyer identity should match the customer's shipping address. */
  buyerIdentity?: InputMaybe<ICartBuyerIdentityInput>
  /**
   * The case-insensitive discount codes that the customer added at checkout.
   *
   */
  discountCodes?: InputMaybe<Array<Scalars['String']>>
  /** A list of merchandise lines to add to the cart. */
  lines?: InputMaybe<Array<ICartLineInput>>
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: InputMaybe<Scalars['String']>
}

/** Represents information about the merchandise in the cart. */
export type ICartLine = INode & {
  __typename?: 'CartLine'
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<IAttribute>
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<ICartDiscountAllocation>
  /**
   * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
   * @deprecated Use `cost` instead
   */
  estimatedCost: ICartLineEstimatedCost
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The merchandise that the buyer intends to purchase. */
  merchandise: IMerchandise
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int']
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<ISellingPlanAllocation>
}

/**
 * An auto-generated type for paginating through multiple CartLines.
 *
 */
export type ICartLineConnection = {
  __typename?: 'CartLineConnection'
  /** A list of edges. */
  edges: Array<ICartLineEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one CartLine and a cursor during pagination.
 *
 */
export type ICartLineEdge = {
  __typename?: 'CartLineEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CartLineEdge. */
  node: ICartLine
}

/** The estimated cost of the merchandise line that the buyer will pay at checkout. */
export type ICartLineEstimatedCost = {
  __typename?: 'CartLineEstimatedCost'
  /** The estimated cost of the merchandise line before discounts. */
  subtotalAmount: IMoneyV2
  /** The estimated total cost of the merchandise line. */
  totalAmount: IMoneyV2
}

/** Specifies the input fields to create a merchandise line on a cart. */
export type ICartLineInput = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<IAttributeInput>>
  /** The identifier of the merchandise that the buyer intends to purchase. */
  merchandiseId: Scalars['ID']
  /** The quantity of the merchandise. */
  quantity?: InputMaybe<Scalars['Int']>
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>
}

/** Specifies the input fields to update a line item on a cart. */
export type ICartLineUpdateInput = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<IAttributeInput>>
  /** The identifier of the merchandise line. */
  id: Scalars['ID']
  /** The identifier of the merchandise for the line item. */
  merchandiseId?: InputMaybe<Scalars['ID']>
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']>
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>
}

/** Return type for `cartLinesAdd` mutation. */
export type ICartLinesAddPayload = {
  __typename?: 'CartLinesAddPayload'
  /** The updated cart. */
  cart?: Maybe<ICart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ICartUserError>
}

/** Return type for `cartLinesRemove` mutation. */
export type ICartLinesRemovePayload = {
  __typename?: 'CartLinesRemovePayload'
  /** The updated cart. */
  cart?: Maybe<ICart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ICartUserError>
}

/** Return type for `cartLinesUpdate` mutation. */
export type ICartLinesUpdatePayload = {
  __typename?: 'CartLinesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<ICart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ICartUserError>
}

/** Return type for `cartNoteUpdate` mutation. */
export type ICartNoteUpdatePayload = {
  __typename?: 'CartNoteUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<ICart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ICartUserError>
}

/** Represents an error that happens during execution of a cart mutation. */
export type ICartUserError = IDisplayableError & {
  __typename?: 'CartUserError'
  /** The error code. */
  code?: Maybe<ICartErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** A container for all the information required to checkout items and pay. */
export type ICheckout = INode & {
  __typename?: 'Checkout'
  /** The gift cards used on the checkout. */
  appliedGiftCards: Array<IAppliedGiftCard>
  /**
   * The available shipping rates for this Checkout.
   * Should only be used when checkout `requiresShipping` is `true` and
   * the shipping address is valid.
   *
   */
  availableShippingRates?: Maybe<IAvailableShippingRates>
  /** The identity of the customer associated with the checkout. */
  buyerIdentity: ICheckoutBuyerIdentity
  /** The date and time when the checkout was completed. */
  completedAt?: Maybe<Scalars['DateTime']>
  /** The date and time when the checkout was created. */
  createdAt: Scalars['DateTime']
  /** The currency code for the checkout. */
  currencyCode: ICurrencyCode
  /** A list of extra information that is added to the checkout. */
  customAttributes: Array<IAttribute>
  /**
   * The customer associated with the checkout.
   * @deprecated This field will always return null. If you have an authentication token for the customer, you can use the `customer` field on the query root to retrieve it.
   */
  customer?: Maybe<ICustomer>
  /** Discounts that have been applied on the checkout. */
  discountApplications: IDiscountApplicationConnection
  /** The email attached to this checkout. */
  email?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems: ICheckoutLineItemConnection
  /** The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded. */
  lineItemsSubtotalPrice: IMoneyV2
  /** The note associated with the checkout. */
  note?: Maybe<Scalars['String']>
  /** The resulting order from a paid checkout. */
  order?: Maybe<IOrder>
  /** The Order Status Page for this Checkout, null when checkout is not completed. */
  orderStatusUrl?: Maybe<Scalars['URL']>
  /**
   * The amount left to be paid. This is equal to the cost of the line items, taxes and shipping minus discounts and gift cards.
   * @deprecated Use `paymentDueV2` instead
   */
  paymentDue: Scalars['Money']
  /** The amount left to be paid. This is equal to the cost of the line items, duties, taxes and shipping minus discounts and gift cards. */
  paymentDueV2: IMoneyV2
  /**
   * Whether or not the Checkout is ready and can be completed. Checkouts may
   * have asynchronous operations that can take time to finish. If you want
   * to complete a checkout or ensure all the fields are populated and up to
   * date, polling is required until the value is true.
   *
   */
  ready: Scalars['Boolean']
  /** States whether or not the fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean']
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<IMailingAddress>
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<IDiscountAllocation>
  /** Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object. */
  shippingLine?: Maybe<IShippingRate>
  /**
   * Price of the checkout before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead
   */
  subtotalPrice: Scalars['Money']
  /** Price of the checkout before duties, shipping and taxes. */
  subtotalPriceV2: IMoneyV2
  /** Whether the checkout is tax exempt. */
  taxExempt: Scalars['Boolean']
  /** Whether taxes are included in the line item and shipping line prices. */
  taxesIncluded: Scalars['Boolean']
  /** The sum of all the duties applied to the line items in the checkout. */
  totalDuties?: Maybe<IMoneyV2>
  /**
   * The sum of all the prices of all the items in the checkout, taxes and discounts included.
   * @deprecated Use `totalPriceV2` instead
   */
  totalPrice: Scalars['Money']
  /** The sum of all the prices of all the items in the checkout, duties, taxes and discounts included. */
  totalPriceV2: IMoneyV2
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   * @deprecated Use `totalTaxV2` instead
   */
  totalTax: Scalars['Money']
  /** The sum of all the taxes applied to the line items and shipping lines in the checkout. */
  totalTaxV2: IMoneyV2
  /** The date and time when the checkout was last updated. */
  updatedAt: Scalars['DateTime']
  /** The url pointing to the checkout accessible from the web. */
  webUrl: Scalars['URL']
}

/** A container for all the information required to checkout items and pay. */
export type ICheckoutDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A container for all the information required to checkout items and pay. */
export type ICheckoutLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Specifies the fields required to update a checkout's attributes. */
export type ICheckoutAttributesUpdateInput = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<IAttributeInput>>
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>
}

/** Return type for `checkoutAttributesUpdate` mutation. */
export type ICheckoutAttributesUpdatePayload = {
  __typename?: 'CheckoutAttributesUpdatePayload'
  /** The updated checkout object. */
  checkout: ICheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Specifies the fields required to update a checkout's attributes. */
export type ICheckoutAttributesUpdateV2Input = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<IAttributeInput>>
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>
}

/** Return type for `checkoutAttributesUpdateV2` mutation. */
export type ICheckoutAttributesUpdateV2Payload = {
  __typename?: 'CheckoutAttributesUpdateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** The identity of the customer associated with the checkout. */
export type ICheckoutBuyerIdentity = {
  __typename?: 'CheckoutBuyerIdentity'
  /** The country code for the checkout. For example, `CA`. */
  countryCode?: Maybe<ICountryCode>
}

/** Specifies the identity of the customer associated with the checkout. */
export type ICheckoutBuyerIdentityInput = {
  /**
   * The country code of one of the shop's
   * [enabled countries](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup).
   * For example, `CA`. Including this field creates a checkout in the specified country's currency.
   *
   */
  countryCode: ICountryCode
}

/** Return type for `checkoutCompleteFree` mutation. */
export type ICheckoutCompleteFreePayload = {
  __typename?: 'CheckoutCompleteFreePayload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutCompleteWithCreditCard` mutation. */
export type ICheckoutCompleteWithCreditCardPayload = {
  __typename?: 'CheckoutCompleteWithCreditCardPayload'
  /** The checkout on which the payment was applied. */
  checkout: ICheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<IPayment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutCompleteWithCreditCardV2` mutation. */
export type ICheckoutCompleteWithCreditCardV2Payload = {
  __typename?: 'CheckoutCompleteWithCreditCardV2Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<IPayment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutCompleteWithTokenizedPayment` mutation. */
export type ICheckoutCompleteWithTokenizedPaymentPayload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentPayload'
  /** The checkout on which the payment was applied. */
  checkout: ICheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<IPayment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutCompleteWithTokenizedPaymentV2` mutation. */
export type ICheckoutCompleteWithTokenizedPaymentV2Payload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentV2Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<IPayment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation. */
export type ICheckoutCompleteWithTokenizedPaymentV3Payload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentV3Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<IPayment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Specifies the fields required to create a checkout. */
export type ICheckoutCreateInput = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of addresses is still done at completion time. Defaults to `null`.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>
  /** The identity of the customer associated with the checkout. */
  buyerIdentity?: InputMaybe<ICheckoutBuyerIdentityInput>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<IAttributeInput>>
  /** The email with which the customer wants to checkout. */
  email?: InputMaybe<Scalars['String']>
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems?: InputMaybe<Array<ICheckoutLineItemInput>>
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>
  /**
   * The three-letter currency code of one of the shop's enabled presentment currencies.
   * Including this field creates a checkout in the specified currency. By default, new
   * checkouts are created in the shop's primary currency.
   *  This argument is deprecated: Use `country` field instead.
   */
  presentmentCurrencyCode?: InputMaybe<ICurrencyCode>
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: InputMaybe<IMailingAddressInput>
}

/** Return type for `checkoutCreate` mutation. */
export type ICheckoutCreatePayload = {
  __typename?: 'CheckoutCreatePayload'
  /** The new checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /** The checkout queue token. Available only to selected stores. */
  queueToken?: Maybe<Scalars['String']>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutCustomerAssociate` mutation. */
export type ICheckoutCustomerAssociatePayload = {
  __typename?: 'CheckoutCustomerAssociatePayload'
  /** The updated checkout object. */
  checkout: ICheckout
  /** The associated customer object. */
  customer?: Maybe<ICustomer>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutCustomerAssociateV2` mutation. */
export type ICheckoutCustomerAssociateV2Payload = {
  __typename?: 'CheckoutCustomerAssociateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /** The associated customer object. */
  customer?: Maybe<ICustomer>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutCustomerDisassociate` mutation. */
export type ICheckoutCustomerDisassociatePayload = {
  __typename?: 'CheckoutCustomerDisassociatePayload'
  /** The updated checkout object. */
  checkout: ICheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutCustomerDisassociateV2` mutation. */
export type ICheckoutCustomerDisassociateV2Payload = {
  __typename?: 'CheckoutCustomerDisassociateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutDiscountCodeApply` mutation. */
export type ICheckoutDiscountCodeApplyPayload = {
  __typename?: 'CheckoutDiscountCodeApplyPayload'
  /** The updated checkout object. */
  checkout: ICheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutDiscountCodeApplyV2` mutation. */
export type ICheckoutDiscountCodeApplyV2Payload = {
  __typename?: 'CheckoutDiscountCodeApplyV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutDiscountCodeRemove` mutation. */
export type ICheckoutDiscountCodeRemovePayload = {
  __typename?: 'CheckoutDiscountCodeRemovePayload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutEmailUpdate` mutation. */
export type ICheckoutEmailUpdatePayload = {
  __typename?: 'CheckoutEmailUpdatePayload'
  /** The checkout object with the updated email. */
  checkout: ICheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutEmailUpdateV2` mutation. */
export type ICheckoutEmailUpdateV2Payload = {
  __typename?: 'CheckoutEmailUpdateV2Payload'
  /** The checkout object with the updated email. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Possible error codes that can be returned by `CheckoutUserError`. */
export enum ICheckoutErrorCode {
  /** Checkout is already completed. */
  AlreadyCompleted = 'ALREADY_COMPLETED',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** The input value is blank. */
  Blank = 'BLANK',
  /** Cart does not meet discount requirements notice. */
  CartDoesNotMeetDiscountRequirementsNotice = 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',
  /** Customer already used once per customer discount notice. */
  CustomerAlreadyUsedOncePerCustomerDiscountNotice = 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',
  /** Discount already applied. */
  DiscountAlreadyApplied = 'DISCOUNT_ALREADY_APPLIED',
  /** Discount disabled. */
  DiscountDisabled = 'DISCOUNT_DISABLED',
  /** Discount expired. */
  DiscountExpired = 'DISCOUNT_EXPIRED',
  /** Discount limit reached. */
  DiscountLimitReached = 'DISCOUNT_LIMIT_REACHED',
  /** Discount not found. */
  DiscountNotFound = 'DISCOUNT_NOT_FOUND',
  /** Checkout is already completed. */
  Empty = 'EMPTY',
  /** Queue token has expired. */
  ExpiredQueueToken = 'EXPIRED_QUEUE_TOKEN',
  /** Gift card has already been applied. */
  GiftCardAlreadyApplied = 'GIFT_CARD_ALREADY_APPLIED',
  /** Gift card code is invalid. */
  GiftCardCodeInvalid = 'GIFT_CARD_CODE_INVALID',
  /** Gift card currency does not match checkout currency. */
  GiftCardCurrencyMismatch = 'GIFT_CARD_CURRENCY_MISMATCH',
  /** Gift card has no funds left. */
  GiftCardDepleted = 'GIFT_CARD_DEPLETED',
  /** Gift card is disabled. */
  GiftCardDisabled = 'GIFT_CARD_DISABLED',
  /** Gift card is expired. */
  GiftCardExpired = 'GIFT_CARD_EXPIRED',
  /** Gift card was not found. */
  GiftCardNotFound = 'GIFT_CARD_NOT_FOUND',
  /** Gift card cannot be applied to a checkout that contains a gift card. */
  GiftCardUnusable = 'GIFT_CARD_UNUSABLE',
  /** The input value should be greater than or equal to the minimum value allowed. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Cannot specify country and presentment currency code. */
  InvalidCountryAndCurrency = 'INVALID_COUNTRY_AND_CURRENCY',
  /** Input Zip is invalid for country provided. */
  InvalidForCountry = 'INVALID_FOR_COUNTRY',
  /** Input Zip is invalid for country and province provided. */
  InvalidForCountryAndProvince = 'INVALID_FOR_COUNTRY_AND_PROVINCE',
  /** Invalid province in country. */
  InvalidProvinceInCountry = 'INVALID_PROVINCE_IN_COUNTRY',
  /** Queue token is invalid. */
  InvalidQueueToken = 'INVALID_QUEUE_TOKEN',
  /** Invalid region in country. */
  InvalidRegionInCountry = 'INVALID_REGION_IN_COUNTRY',
  /** Invalid state in country. */
  InvalidStateInCountry = 'INVALID_STATE_IN_COUNTRY',
  /** The input value should be less than the maximum value allowed. */
  LessThan = 'LESS_THAN',
  /** The input value should be less than or equal to the maximum value allowed. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  /** Line item was not found in checkout. */
  LineItemNotFound = 'LINE_ITEM_NOT_FOUND',
  /** Checkout is locked. */
  Locked = 'LOCKED',
  /** Missing payment input. */
  MissingPaymentInput = 'MISSING_PAYMENT_INPUT',
  /** Not enough in stock. */
  NotEnoughInStock = 'NOT_ENOUGH_IN_STOCK',
  /** Input value is not supported. */
  NotSupported = 'NOT_SUPPORTED',
  /** The input value needs to be blank. */
  Present = 'PRESENT',
  /** Shipping rate expired. */
  ShippingRateExpired = 'SHIPPING_RATE_EXPIRED',
  /** Throttled during checkout. */
  ThrottledDuringCheckout = 'THROTTLED_DURING_CHECKOUT',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The amount of the payment does not match the value to be paid. */
  TotalPriceMismatch = 'TOTAL_PRICE_MISMATCH',
  /** Unable to apply discount. */
  UnableToApply = 'UNABLE_TO_APPLY',
}

/** Return type for `checkoutGiftCardApply` mutation. */
export type ICheckoutGiftCardApplyPayload = {
  __typename?: 'CheckoutGiftCardApplyPayload'
  /** The updated checkout object. */
  checkout: ICheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutGiftCardRemove` mutation. */
export type ICheckoutGiftCardRemovePayload = {
  __typename?: 'CheckoutGiftCardRemovePayload'
  /** The updated checkout object. */
  checkout: ICheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutGiftCardRemoveV2` mutation. */
export type ICheckoutGiftCardRemoveV2Payload = {
  __typename?: 'CheckoutGiftCardRemoveV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutGiftCardsAppend` mutation. */
export type ICheckoutGiftCardsAppendPayload = {
  __typename?: 'CheckoutGiftCardsAppendPayload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** A single line item in the checkout, grouped by variant and attributes. */
export type ICheckoutLineItem = INode & {
  __typename?: 'CheckoutLineItem'
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes: Array<IAttribute>
  /** The discounts that have been allocated onto the checkout line item by discount applications. */
  discountAllocations: Array<IDiscountAllocation>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The quantity of the line item. */
  quantity: Scalars['Int']
  /** Title of the line item. Defaults to the product's title. */
  title: Scalars['String']
  /** Unit price of the line item. */
  unitPrice?: Maybe<IMoneyV2>
  /** Product variant of the line item. */
  variant?: Maybe<IProductVariant>
}

/**
 * An auto-generated type for paginating through multiple CheckoutLineItems.
 *
 */
export type ICheckoutLineItemConnection = {
  __typename?: 'CheckoutLineItemConnection'
  /** A list of edges. */
  edges: Array<ICheckoutLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one CheckoutLineItem and a cursor during pagination.
 *
 */
export type ICheckoutLineItemEdge = {
  __typename?: 'CheckoutLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CheckoutLineItemEdge. */
  node: ICheckoutLineItem
}

/** Specifies the input fields to create a line item on a checkout. */
export type ICheckoutLineItemInput = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: InputMaybe<Array<IAttributeInput>>
  /** The quantity of the line item. */
  quantity: Scalars['Int']
  /** The identifier of the product variant for the line item. */
  variantId: Scalars['ID']
}

/** Specifies the input fields to update a line item on the checkout. */
export type ICheckoutLineItemUpdateInput = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: InputMaybe<Array<IAttributeInput>>
  /** The identifier of the line item. */
  id?: InputMaybe<Scalars['ID']>
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']>
  /** The variant identifier of the line item. */
  variantId?: InputMaybe<Scalars['ID']>
}

/** Return type for `checkoutLineItemsAdd` mutation. */
export type ICheckoutLineItemsAddPayload = {
  __typename?: 'CheckoutLineItemsAddPayload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutLineItemsRemove` mutation. */
export type ICheckoutLineItemsRemovePayload = {
  __typename?: 'CheckoutLineItemsRemovePayload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutLineItemsReplace` mutation. */
export type ICheckoutLineItemsReplacePayload = {
  __typename?: 'CheckoutLineItemsReplacePayload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ICheckoutUserError>
}

/** Return type for `checkoutLineItemsUpdate` mutation. */
export type ICheckoutLineItemsUpdatePayload = {
  __typename?: 'CheckoutLineItemsUpdatePayload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutShippingAddressUpdate` mutation. */
export type ICheckoutShippingAddressUpdatePayload = {
  __typename?: 'CheckoutShippingAddressUpdatePayload'
  /** The updated checkout object. */
  checkout: ICheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutShippingAddressUpdateV2` mutation. */
export type ICheckoutShippingAddressUpdateV2Payload = {
  __typename?: 'CheckoutShippingAddressUpdateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `checkoutShippingLineUpdate` mutation. */
export type ICheckoutShippingLineUpdatePayload = {
  __typename?: 'CheckoutShippingLineUpdatePayload'
  /** The updated checkout object. */
  checkout?: Maybe<ICheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ICheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Represents an error that happens during execution of a checkout mutation. */
export type ICheckoutUserError = IDisplayableError & {
  __typename?: 'CheckoutUserError'
  /** The error code. */
  code?: Maybe<ICheckoutErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ICollection = IHasMetafields &
  INode &
  IOnlineStorePublishable & {
    __typename?: 'Collection'
    /** Stripped description of the collection, single line with HTML tags removed. */
    description: Scalars['String']
    /** The description of the collection, complete with HTML formatting. */
    descriptionHtml: Scalars['HTML']
    /**
     * A human-friendly unique string for the collection automatically generated from its title.
     * Limit of 255 characters.
     *
     */
    handle: Scalars['String']
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** Image associated with the collection. */
    image?: Maybe<IImage>
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<IMetafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
     *
     */
    metafields: IMetafieldConnection
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe<Scalars['URL']>
    /** List of products in the collection. */
    products: IProductConnection
    /** The collection’s name. Limit of 255 characters. */
    title: Scalars['String']
    /** The date and time when the collection was last modified. */
    updatedAt: Scalars['DateTime']
  }

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ICollectionDescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ICollectionImageArgs = {
  crop?: InputMaybe<ICropRegion>
  maxHeight?: InputMaybe<Scalars['Int']>
  maxWidth?: InputMaybe<Scalars['Int']>
  scale?: InputMaybe<Scalars['Int']>
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ICollectionMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ICollectionMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ICollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<IProductCollectionSortKeys>
}

/**
 * An auto-generated type for paginating through multiple Collections.
 *
 */
export type ICollectionConnection = {
  __typename?: 'CollectionConnection'
  /** A list of edges. */
  edges: Array<ICollectionEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 *
 */
export type ICollectionEdge = {
  __typename?: 'CollectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CollectionEdge. */
  node: ICollection
}

/** The set of valid sort keys for the Collection query. */
export enum ICollectionSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
}

/** A comment on an article. */
export type IComment = INode & {
  __typename?: 'Comment'
  /** The comment’s author. */
  author: ICommentAuthor
  /** Stripped content of the comment, single line with HTML tags removed. */
  content: Scalars['String']
  /** The content of the comment, complete with HTML formatting. */
  contentHtml: Scalars['HTML']
  /** A globally-unique identifier. */
  id: Scalars['ID']
}

/** A comment on an article. */
export type ICommentContentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/** The author of a comment. */
export type ICommentAuthor = {
  __typename?: 'CommentAuthor'
  /** The author's email. */
  email: Scalars['String']
  /** The author’s name. */
  name: Scalars['String']
}

/**
 * An auto-generated type for paginating through multiple Comments.
 *
 */
export type ICommentConnection = {
  __typename?: 'CommentConnection'
  /** A list of edges. */
  edges: Array<ICommentEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one Comment and a cursor during pagination.
 *
 */
export type ICommentEdge = {
  __typename?: 'CommentEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CommentEdge. */
  node: IComment
}

/** A country. */
export type ICountry = {
  __typename?: 'Country'
  /** The currency of the country. */
  currency: ICurrency
  /** The ISO code of the country. */
  isoCode: ICountryCode
  /** The name of the country. */
  name: Scalars['String']
  /** The unit system used in the country. */
  unitSystem: IUnitSystem
}

/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 *
 */
export enum ICountryCode {
  /** Ascension Island. */
  Ac = 'AC',
  /** Andorra. */
  Ad = 'AD',
  /** United Arab Emirates. */
  Ae = 'AE',
  /** Afghanistan. */
  Af = 'AF',
  /** Antigua & Barbuda. */
  Ag = 'AG',
  /** Anguilla. */
  Ai = 'AI',
  /** Albania. */
  Al = 'AL',
  /** Armenia. */
  Am = 'AM',
  /** Netherlands Antilles. */
  An = 'AN',
  /** Angola. */
  Ao = 'AO',
  /** Argentina. */
  Ar = 'AR',
  /** Austria. */
  At = 'AT',
  /** Australia. */
  Au = 'AU',
  /** Aruba. */
  Aw = 'AW',
  /** Åland Islands. */
  Ax = 'AX',
  /** Azerbaijan. */
  Az = 'AZ',
  /** Bosnia & Herzegovina. */
  Ba = 'BA',
  /** Barbados. */
  Bb = 'BB',
  /** Bangladesh. */
  Bd = 'BD',
  /** Belgium. */
  Be = 'BE',
  /** Burkina Faso. */
  Bf = 'BF',
  /** Bulgaria. */
  Bg = 'BG',
  /** Bahrain. */
  Bh = 'BH',
  /** Burundi. */
  Bi = 'BI',
  /** Benin. */
  Bj = 'BJ',
  /** St. Barthélemy. */
  Bl = 'BL',
  /** Bermuda. */
  Bm = 'BM',
  /** Brunei. */
  Bn = 'BN',
  /** Bolivia. */
  Bo = 'BO',
  /** Caribbean Netherlands. */
  Bq = 'BQ',
  /** Brazil. */
  Br = 'BR',
  /** Bahamas. */
  Bs = 'BS',
  /** Bhutan. */
  Bt = 'BT',
  /** Bouvet Island. */
  Bv = 'BV',
  /** Botswana. */
  Bw = 'BW',
  /** Belarus. */
  By = 'BY',
  /** Belize. */
  Bz = 'BZ',
  /** Canada. */
  Ca = 'CA',
  /** Cocos (Keeling) Islands. */
  Cc = 'CC',
  /** Congo - Kinshasa. */
  Cd = 'CD',
  /** Central African Republic. */
  Cf = 'CF',
  /** Congo - Brazzaville. */
  Cg = 'CG',
  /** Switzerland. */
  Ch = 'CH',
  /** Côte d’Ivoire. */
  Ci = 'CI',
  /** Cook Islands. */
  Ck = 'CK',
  /** Chile. */
  Cl = 'CL',
  /** Cameroon. */
  Cm = 'CM',
  /** China. */
  Cn = 'CN',
  /** Colombia. */
  Co = 'CO',
  /** Costa Rica. */
  Cr = 'CR',
  /** Cuba. */
  Cu = 'CU',
  /** Cape Verde. */
  Cv = 'CV',
  /** Curaçao. */
  Cw = 'CW',
  /** Christmas Island. */
  Cx = 'CX',
  /** Cyprus. */
  Cy = 'CY',
  /** Czechia. */
  Cz = 'CZ',
  /** Germany. */
  De = 'DE',
  /** Djibouti. */
  Dj = 'DJ',
  /** Denmark. */
  Dk = 'DK',
  /** Dominica. */
  Dm = 'DM',
  /** Dominican Republic. */
  Do = 'DO',
  /** Algeria. */
  Dz = 'DZ',
  /** Ecuador. */
  Ec = 'EC',
  /** Estonia. */
  Ee = 'EE',
  /** Egypt. */
  Eg = 'EG',
  /** Western Sahara. */
  Eh = 'EH',
  /** Eritrea. */
  Er = 'ER',
  /** Spain. */
  Es = 'ES',
  /** Ethiopia. */
  Et = 'ET',
  /** Finland. */
  Fi = 'FI',
  /** Fiji. */
  Fj = 'FJ',
  /** Falkland Islands. */
  Fk = 'FK',
  /** Faroe Islands. */
  Fo = 'FO',
  /** France. */
  Fr = 'FR',
  /** Gabon. */
  Ga = 'GA',
  /** United Kingdom. */
  Gb = 'GB',
  /** Grenada. */
  Gd = 'GD',
  /** Georgia. */
  Ge = 'GE',
  /** French Guiana. */
  Gf = 'GF',
  /** Guernsey. */
  Gg = 'GG',
  /** Ghana. */
  Gh = 'GH',
  /** Gibraltar. */
  Gi = 'GI',
  /** Greenland. */
  Gl = 'GL',
  /** Gambia. */
  Gm = 'GM',
  /** Guinea. */
  Gn = 'GN',
  /** Guadeloupe. */
  Gp = 'GP',
  /** Equatorial Guinea. */
  Gq = 'GQ',
  /** Greece. */
  Gr = 'GR',
  /** South Georgia & South Sandwich Islands. */
  Gs = 'GS',
  /** Guatemala. */
  Gt = 'GT',
  /** Guinea-Bissau. */
  Gw = 'GW',
  /** Guyana. */
  Gy = 'GY',
  /** Hong Kong SAR. */
  Hk = 'HK',
  /** Heard & McDonald Islands. */
  Hm = 'HM',
  /** Honduras. */
  Hn = 'HN',
  /** Croatia. */
  Hr = 'HR',
  /** Haiti. */
  Ht = 'HT',
  /** Hungary. */
  Hu = 'HU',
  /** Indonesia. */
  Id = 'ID',
  /** Ireland. */
  Ie = 'IE',
  /** Israel. */
  Il = 'IL',
  /** Isle of Man. */
  Im = 'IM',
  /** India. */
  In = 'IN',
  /** British Indian Ocean Territory. */
  Io = 'IO',
  /** Iraq. */
  Iq = 'IQ',
  /** Iran. */
  Ir = 'IR',
  /** Iceland. */
  Is = 'IS',
  /** Italy. */
  It = 'IT',
  /** Jersey. */
  Je = 'JE',
  /** Jamaica. */
  Jm = 'JM',
  /** Jordan. */
  Jo = 'JO',
  /** Japan. */
  Jp = 'JP',
  /** Kenya. */
  Ke = 'KE',
  /** Kyrgyzstan. */
  Kg = 'KG',
  /** Cambodia. */
  Kh = 'KH',
  /** Kiribati. */
  Ki = 'KI',
  /** Comoros. */
  Km = 'KM',
  /** St. Kitts & Nevis. */
  Kn = 'KN',
  /** North Korea. */
  Kp = 'KP',
  /** South Korea. */
  Kr = 'KR',
  /** Kuwait. */
  Kw = 'KW',
  /** Cayman Islands. */
  Ky = 'KY',
  /** Kazakhstan. */
  Kz = 'KZ',
  /** Laos. */
  La = 'LA',
  /** Lebanon. */
  Lb = 'LB',
  /** St. Lucia. */
  Lc = 'LC',
  /** Liechtenstein. */
  Li = 'LI',
  /** Sri Lanka. */
  Lk = 'LK',
  /** Liberia. */
  Lr = 'LR',
  /** Lesotho. */
  Ls = 'LS',
  /** Lithuania. */
  Lt = 'LT',
  /** Luxembourg. */
  Lu = 'LU',
  /** Latvia. */
  Lv = 'LV',
  /** Libya. */
  Ly = 'LY',
  /** Morocco. */
  Ma = 'MA',
  /** Monaco. */
  Mc = 'MC',
  /** Moldova. */
  Md = 'MD',
  /** Montenegro. */
  Me = 'ME',
  /** St. Martin. */
  Mf = 'MF',
  /** Madagascar. */
  Mg = 'MG',
  /** North Macedonia. */
  Mk = 'MK',
  /** Mali. */
  Ml = 'ML',
  /** Myanmar (Burma). */
  Mm = 'MM',
  /** Mongolia. */
  Mn = 'MN',
  /** Macao SAR. */
  Mo = 'MO',
  /** Martinique. */
  Mq = 'MQ',
  /** Mauritania. */
  Mr = 'MR',
  /** Montserrat. */
  Ms = 'MS',
  /** Malta. */
  Mt = 'MT',
  /** Mauritius. */
  Mu = 'MU',
  /** Maldives. */
  Mv = 'MV',
  /** Malawi. */
  Mw = 'MW',
  /** Mexico. */
  Mx = 'MX',
  /** Malaysia. */
  My = 'MY',
  /** Mozambique. */
  Mz = 'MZ',
  /** Namibia. */
  Na = 'NA',
  /** New Caledonia. */
  Nc = 'NC',
  /** Niger. */
  Ne = 'NE',
  /** Norfolk Island. */
  Nf = 'NF',
  /** Nigeria. */
  Ng = 'NG',
  /** Nicaragua. */
  Ni = 'NI',
  /** Netherlands. */
  Nl = 'NL',
  /** Norway. */
  No = 'NO',
  /** Nepal. */
  Np = 'NP',
  /** Nauru. */
  Nr = 'NR',
  /** Niue. */
  Nu = 'NU',
  /** New Zealand. */
  Nz = 'NZ',
  /** Oman. */
  Om = 'OM',
  /** Panama. */
  Pa = 'PA',
  /** Peru. */
  Pe = 'PE',
  /** French Polynesia. */
  Pf = 'PF',
  /** Papua New Guinea. */
  Pg = 'PG',
  /** Philippines. */
  Ph = 'PH',
  /** Pakistan. */
  Pk = 'PK',
  /** Poland. */
  Pl = 'PL',
  /** St. Pierre & Miquelon. */
  Pm = 'PM',
  /** Pitcairn Islands. */
  Pn = 'PN',
  /** Palestinian Territories. */
  Ps = 'PS',
  /** Portugal. */
  Pt = 'PT',
  /** Paraguay. */
  Py = 'PY',
  /** Qatar. */
  Qa = 'QA',
  /** Réunion. */
  Re = 'RE',
  /** Romania. */
  Ro = 'RO',
  /** Serbia. */
  Rs = 'RS',
  /** Russia. */
  Ru = 'RU',
  /** Rwanda. */
  Rw = 'RW',
  /** Saudi Arabia. */
  Sa = 'SA',
  /** Solomon Islands. */
  Sb = 'SB',
  /** Seychelles. */
  Sc = 'SC',
  /** Sudan. */
  Sd = 'SD',
  /** Sweden. */
  Se = 'SE',
  /** Singapore. */
  Sg = 'SG',
  /** St. Helena. */
  Sh = 'SH',
  /** Slovenia. */
  Si = 'SI',
  /** Svalbard & Jan Mayen. */
  Sj = 'SJ',
  /** Slovakia. */
  Sk = 'SK',
  /** Sierra Leone. */
  Sl = 'SL',
  /** San Marino. */
  Sm = 'SM',
  /** Senegal. */
  Sn = 'SN',
  /** Somalia. */
  So = 'SO',
  /** Suriname. */
  Sr = 'SR',
  /** South Sudan. */
  Ss = 'SS',
  /** São Tomé & Príncipe. */
  St = 'ST',
  /** El Salvador. */
  Sv = 'SV',
  /** Sint Maarten. */
  Sx = 'SX',
  /** Syria. */
  Sy = 'SY',
  /** Eswatini. */
  Sz = 'SZ',
  /** Tristan da Cunha. */
  Ta = 'TA',
  /** Turks & Caicos Islands. */
  Tc = 'TC',
  /** Chad. */
  Td = 'TD',
  /** French Southern Territories. */
  Tf = 'TF',
  /** Togo. */
  Tg = 'TG',
  /** Thailand. */
  Th = 'TH',
  /** Tajikistan. */
  Tj = 'TJ',
  /** Tokelau. */
  Tk = 'TK',
  /** Timor-Leste. */
  Tl = 'TL',
  /** Turkmenistan. */
  Tm = 'TM',
  /** Tunisia. */
  Tn = 'TN',
  /** Tonga. */
  To = 'TO',
  /** Turkey. */
  Tr = 'TR',
  /** Trinidad & Tobago. */
  Tt = 'TT',
  /** Tuvalu. */
  Tv = 'TV',
  /** Taiwan. */
  Tw = 'TW',
  /** Tanzania. */
  Tz = 'TZ',
  /** Ukraine. */
  Ua = 'UA',
  /** Uganda. */
  Ug = 'UG',
  /** U.S. Outlying Islands. */
  Um = 'UM',
  /** United States. */
  Us = 'US',
  /** Uruguay. */
  Uy = 'UY',
  /** Uzbekistan. */
  Uz = 'UZ',
  /** Vatican City. */
  Va = 'VA',
  /** St. Vincent & Grenadines. */
  Vc = 'VC',
  /** Venezuela. */
  Ve = 'VE',
  /** British Virgin Islands. */
  Vg = 'VG',
  /** Vietnam. */
  Vn = 'VN',
  /** Vanuatu. */
  Vu = 'VU',
  /** Wallis & Futuna. */
  Wf = 'WF',
  /** Samoa. */
  Ws = 'WS',
  /** Kosovo. */
  Xk = 'XK',
  /** Yemen. */
  Ye = 'YE',
  /** Mayotte. */
  Yt = 'YT',
  /** South Africa. */
  Za = 'ZA',
  /** Zambia. */
  Zm = 'ZM',
  /** Zimbabwe. */
  Zw = 'ZW',
  /** Unknown Region. */
  Zz = 'ZZ',
}

/** Credit card information used for a payment. */
export type ICreditCard = {
  __typename?: 'CreditCard'
  /** The brand of the credit card. */
  brand?: Maybe<Scalars['String']>
  /** The expiry month of the credit card. */
  expiryMonth?: Maybe<Scalars['Int']>
  /** The expiry year of the credit card. */
  expiryYear?: Maybe<Scalars['Int']>
  /** The credit card's BIN number. */
  firstDigits?: Maybe<Scalars['String']>
  /** The first name of the card holder. */
  firstName?: Maybe<Scalars['String']>
  /** The last 4 digits of the credit card. */
  lastDigits?: Maybe<Scalars['String']>
  /** The last name of the card holder. */
  lastName?: Maybe<Scalars['String']>
  /** The masked credit card number with only the last 4 digits displayed. */
  maskedNumber?: Maybe<Scalars['String']>
}

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 *
 */
export type ICreditCardPaymentInput = {
  /** The amount of the payment. */
  amount: Scalars['Money']
  /** The billing address for the payment. */
  billingAddress: IMailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 *
 */
export type ICreditCardPaymentInputV2 = {
  /** The billing address for the payment. */
  billingAddress: IMailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** The amount and currency of the payment. */
  paymentAmount: IMoneyInput
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String']
}

/** The part of the image that should remain after cropping. */
export enum ICropRegion {
  /** Keep the bottom of the image. */
  Bottom = 'BOTTOM',
  /** Keep the center of the image. */
  Center = 'CENTER',
  /** Keep the left of the image. */
  Left = 'LEFT',
  /** Keep the right of the image. */
  Right = 'RIGHT',
  /** Keep the top of the image. */
  Top = 'TOP',
}

/** A currency. */
export type ICurrency = {
  __typename?: 'Currency'
  /** The ISO code of the currency. */
  isoCode: ICurrencyCode
  /** The name of the currency. */
  name: Scalars['String']
  /** The symbol of the currency. */
  symbol: Scalars['String']
}

/**
 * The three-letter currency codes that represent the world currencies used in stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 *
 */
export enum ICurrencyCode {
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Belarusian Ruble (BYN). */
  Byn = 'BYN',
  /**
   * Belarusian Ruble (BYR).
   * @deprecated `BYR` is deprecated. Use `BYN` available from version `2021-01` onwards instead.
   */
  Byr = 'BYR',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Djiboutian Franc (DJF). */
  Djf = 'DJF',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Eritrean Nakfa (ERN). */
  Ern = 'ERN',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Falkland Islands Pounds (FKP). */
  Fkp = 'FKP',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Gibraltar Pounds (GIP). */
  Gip = 'GIP',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Guinean Franc (GNF). */
  Gnf = 'GNF',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Iranian Rial (IRR). */
  Irr = 'IRR',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Kiribati Dollar (KID). */
  Kid = 'KID',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Libyan Dinar (LYD). */
  Lyd = 'LYD',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Mauritanian Ouguiya (MRU). */
  Mru = 'MRU',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Saint Helena Pounds (SHP). */
  Shp = 'SHP',
  /** Sierra Leonean Leone (SLL). */
  Sll = 'SLL',
  /** Somali Shilling (SOS). */
  Sos = 'SOS',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /**
   * Sao Tome And Principe Dobra (STD).
   * @deprecated `STD` is deprecated. Use `STN` available from version `2022-07` onwards instead.
   */
  Std = 'STD',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tajikistani Somoni (TJS). */
  Tjs = 'TJS',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Tongan Pa'anga (TOP). */
  Top = 'TOP',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /**
   * Venezuelan Bolivares (VEF).
   * @deprecated `VEF` is deprecated. Use `VES` available from version `2020-10` onwards instead.
   */
  Vef = 'VEF',
  /** Venezuelan Bolivares (VES). */
  Ves = 'VES',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Unrecognized currency. */
  Xxx = 'XXX',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW',
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ICustomer = IHasMetafields & {
  __typename?: 'Customer'
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing: Scalars['Boolean']
  /** A list of addresses for the customer. */
  addresses: IMailingAddressConnection
  /** The date and time when the customer was created. */
  createdAt: Scalars['DateTime']
  /** The customer’s default address. */
  defaultAddress?: Maybe<IMailingAddress>
  /** The customer’s name, email or phone number. */
  displayName: Scalars['String']
  /** The customer’s email address. */
  email?: Maybe<Scalars['String']>
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>
  /** A unique identifier for the customer. */
  id: Scalars['ID']
  /** The customer's most recently updated, incomplete checkout. */
  lastIncompleteCheckout?: Maybe<ICheckout>
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<IMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: IMetafieldConnection
  /** The orders associated with the customer. */
  orders: IOrderConnection
  /** The customer’s phone number. */
  phone?: Maybe<Scalars['String']>
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   *
   */
  tags: Array<Scalars['String']>
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars['DateTime']
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ICustomerAddressesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ICustomerMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ICustomerMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ICustomerOrdersArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<IOrderSortKeys>
}

/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
export type ICustomerAccessToken = {
  __typename?: 'CustomerAccessToken'
  /** The customer’s access token. */
  accessToken: Scalars['String']
  /** The date and time when the customer access token expires. */
  expiresAt: Scalars['DateTime']
}

/** Specifies the input fields required to create a customer access token. */
export type ICustomerAccessTokenCreateInput = {
  /** The email associated to the customer. */
  email: Scalars['String']
  /** The login password to be used by the customer. */
  password: Scalars['String']
}

/** Return type for `customerAccessTokenCreate` mutation. */
export type ICustomerAccessTokenCreatePayload = {
  __typename?: 'CustomerAccessTokenCreatePayload'
  /** The newly created customer access token object. */
  customerAccessToken?: Maybe<ICustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `customerAccessTokenCreateWithMultipass` mutation. */
export type ICustomerAccessTokenCreateWithMultipassPayload = {
  __typename?: 'CustomerAccessTokenCreateWithMultipassPayload'
  /** An access token object associated with the customer. */
  customerAccessToken?: Maybe<ICustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
}

/** Return type for `customerAccessTokenDelete` mutation. */
export type ICustomerAccessTokenDeletePayload = {
  __typename?: 'CustomerAccessTokenDeletePayload'
  /** The destroyed access token. */
  deletedAccessToken?: Maybe<Scalars['String']>
  /** ID of the destroyed customer access token. */
  deletedCustomerAccessTokenId?: Maybe<Scalars['String']>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<IUserError>
}

/** Return type for `customerAccessTokenRenew` mutation. */
export type ICustomerAccessTokenRenewPayload = {
  __typename?: 'CustomerAccessTokenRenewPayload'
  /** The renewed customer access token object. */
  customerAccessToken?: Maybe<ICustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<IUserError>
}

/** Return type for `customerActivateByUrl` mutation. */
export type ICustomerActivateByUrlPayload = {
  __typename?: 'CustomerActivateByUrlPayload'
  /** The customer that was activated. */
  customer?: Maybe<ICustomer>
  /** A new customer access token for the customer. */
  customerAccessToken?: Maybe<ICustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
}

/** Specifies the input fields required to activate a customer. */
export type ICustomerActivateInput = {
  /** The activation token required to activate the customer. */
  activationToken: Scalars['String']
  /** New password that will be set during activation. */
  password: Scalars['String']
}

/** Return type for `customerActivate` mutation. */
export type ICustomerActivatePayload = {
  __typename?: 'CustomerActivatePayload'
  /** The customer object. */
  customer?: Maybe<ICustomer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<ICustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `customerAddressCreate` mutation. */
export type ICustomerAddressCreatePayload = {
  __typename?: 'CustomerAddressCreatePayload'
  /** The new customer address object. */
  customerAddress?: Maybe<IMailingAddress>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `customerAddressDelete` mutation. */
export type ICustomerAddressDeletePayload = {
  __typename?: 'CustomerAddressDeletePayload'
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
  /** ID of the deleted customer address. */
  deletedCustomerAddressId?: Maybe<Scalars['String']>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `customerAddressUpdate` mutation. */
export type ICustomerAddressUpdatePayload = {
  __typename?: 'CustomerAddressUpdatePayload'
  /** The customer’s updated mailing address. */
  customerAddress?: Maybe<IMailingAddress>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** The fields required to create a new customer. */
export type ICustomerCreateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>
  /** The customer’s email. */
  email: Scalars['String']
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>
  /** The login password used by the customer. */
  password: Scalars['String']
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']>
}

/** Return type for `customerCreate` mutation. */
export type ICustomerCreatePayload = {
  __typename?: 'CustomerCreatePayload'
  /** The created customer object. */
  customer?: Maybe<ICustomer>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `customerDefaultAddressUpdate` mutation. */
export type ICustomerDefaultAddressUpdatePayload = {
  __typename?: 'CustomerDefaultAddressUpdatePayload'
  /** The updated customer object. */
  customer?: Maybe<ICustomer>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Possible error codes that can be returned by `CustomerUserError`. */
export enum ICustomerErrorCode {
  /** Customer already enabled. */
  AlreadyEnabled = 'ALREADY_ENABLED',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** The input value is blank. */
  Blank = 'BLANK',
  /** Input contains HTML tags. */
  ContainsHtmlTags = 'CONTAINS_HTML_TAGS',
  /** Input contains URL. */
  ContainsUrl = 'CONTAINS_URL',
  /** Customer is disabled. */
  CustomerDisabled = 'CUSTOMER_DISABLED',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Multipass token is not valid. */
  InvalidMultipassRequest = 'INVALID_MULTIPASS_REQUEST',
  /** Address does not exist. */
  NotFound = 'NOT_FOUND',
  /** Input password starts or ends with whitespace. */
  PasswordStartsOrEndsWithWhitespace = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  /** The input value is already taken. */
  Taken = 'TAKEN',
  /** Invalid activation token. */
  TokenInvalid = 'TOKEN_INVALID',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The input value is too short. */
  TooShort = 'TOO_SHORT',
  /** Unidentified customer. */
  UnidentifiedCustomer = 'UNIDENTIFIED_CUSTOMER',
}

/** Return type for `customerRecover` mutation. */
export type ICustomerRecoverPayload = {
  __typename?: 'CustomerRecoverPayload'
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Return type for `customerResetByUrl` mutation. */
export type ICustomerResetByUrlPayload = {
  __typename?: 'CustomerResetByUrlPayload'
  /** The customer object which was reset. */
  customer?: Maybe<ICustomer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<ICustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Specifies the fields required to reset a customer’s password. */
export type ICustomerResetInput = {
  /** New password that will be set as part of the reset password process. */
  password: Scalars['String']
  /** The reset token required to reset the customer’s password. */
  resetToken: Scalars['String']
}

/** Return type for `customerReset` mutation. */
export type ICustomerResetPayload = {
  __typename?: 'CustomerResetPayload'
  /** The customer object which was reset. */
  customer?: Maybe<ICustomer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<ICustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Specifies the fields required to update the Customer information. */
export type ICustomerUpdateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>
  /** The customer’s email. */
  email?: InputMaybe<Scalars['String']>
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>
  /** The login password used by the customer. */
  password?: InputMaybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
   *
   */
  phone?: InputMaybe<Scalars['String']>
}

/** Return type for `customerUpdate` mutation. */
export type ICustomerUpdatePayload = {
  __typename?: 'CustomerUpdatePayload'
  /** The updated customer object. */
  customer?: Maybe<ICustomer>
  /**
   * The newly created customer access token. If the customer's password is updated, all previous access tokens
   * (including the one used to perform this mutation) become invalid, and a new token is generated.
   *
   */
  customerAccessToken?: Maybe<ICustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ICustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<IUserError>
}

/** Represents an error that happens during execution of a customer mutation. */
export type ICustomerUserError = IDisplayableError & {
  __typename?: 'CustomerUserError'
  /** The error code. */
  code?: Maybe<ICustomerErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum IDigitalWallet {
  /** Android Pay. */
  AndroidPay = 'ANDROID_PAY',
  /** Apple Pay. */
  ApplePay = 'APPLE_PAY',
  /** Google Pay. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay. */
  ShopifyPay = 'SHOPIFY_PAY',
}

/**
 * An amount discounting the line that has been allocated by a discount.
 *
 */
export type IDiscountAllocation = {
  __typename?: 'DiscountAllocation'
  /** Amount of discount allocated. */
  allocatedAmount: IMoneyV2
  /** The discount this allocated amount originated from. */
  discountApplication: IDiscountApplication
}

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 *
 */
export type IDiscountApplication = {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: IDiscountApplicationAllocationMethod
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: IDiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: IDiscountApplicationTargetType
  /** The value of the discount application. */
  value: IPricingValue
}

/** The method by which the discount's value is allocated onto its entitled lines. */
export enum IDiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  Across = 'ACROSS',
  /** The value is applied onto every entitled line. */
  Each = 'EACH',
  /**
   * The value is specifically applied onto a particular line.
   * @deprecated Use ACROSS instead.
   */
  One = 'ONE',
}

/**
 * An auto-generated type for paginating through multiple DiscountApplications.
 *
 */
export type IDiscountApplicationConnection = {
  __typename?: 'DiscountApplicationConnection'
  /** A list of edges. */
  edges: Array<IDiscountApplicationEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one DiscountApplication and a cursor during pagination.
 *
 */
export type IDiscountApplicationEdge = {
  __typename?: 'DiscountApplicationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DiscountApplicationEdge. */
  node: IDiscountApplication
}

/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 *
 */
export enum IDiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  All = 'ALL',
  /** The discount is allocated onto only the lines that it's entitled for. */
  Entitled = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = 'EXPLICIT',
}

/**
 * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
 *
 */
export enum IDiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LineItem = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLine = 'SHIPPING_LINE',
}

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
 *
 */
export type IDiscountCodeApplication = IDiscountApplication & {
  __typename?: 'DiscountCodeApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: IDiscountApplicationAllocationMethod
  /** Specifies whether the discount code was applied successfully. */
  applicable: Scalars['Boolean']
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String']
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: IDiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: IDiscountApplicationTargetType
  /** The value of the discount application. */
  value: IPricingValue
}

/** Represents an error in the input of a mutation. */
export type IDisplayableError = {
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Represents a web address. */
export type IDomain = {
  __typename?: 'Domain'
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String']
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean']
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL']
}

/** Represents a video hosted outside of Shopify. */
export type IExternalVideo = IMedia &
  INode & {
    __typename?: 'ExternalVideo'
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>
    /**
     * The URL.
     * @deprecated Use `originUrl` instead
     */
    embeddedUrl: Scalars['URL']
    /** The host of the external video. */
    host: IMediaHost
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** The media content type. */
    mediaContentType: IMediaContentType
    /** The preview image for the media. */
    previewImage?: Maybe<IImage>
  }

/** Represents a single fulfillment in an order. */
export type IFulfillment = {
  __typename?: 'Fulfillment'
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: IFulfillmentLineItemConnection
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   *
   */
  trackingInfo: Array<IFulfillmentTrackingInfo>
}

/** Represents a single fulfillment in an order. */
export type IFulfillmentFulfillmentLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Represents a single fulfillment in an order. */
export type IFulfillmentTrackingInfoArgs = {
  first?: InputMaybe<Scalars['Int']>
}

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
export type IFulfillmentLineItem = {
  __typename?: 'FulfillmentLineItem'
  /** The associated order's line item. */
  lineItem: IOrderLineItem
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars['Int']
}

/**
 * An auto-generated type for paginating through multiple FulfillmentLineItems.
 *
 */
export type IFulfillmentLineItemConnection = {
  __typename?: 'FulfillmentLineItemConnection'
  /** A list of edges. */
  edges: Array<IFulfillmentLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.
 *
 */
export type IFulfillmentLineItemEdge = {
  __typename?: 'FulfillmentLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of FulfillmentLineItemEdge. */
  node: IFulfillmentLineItem
}

/** Tracking information associated with the fulfillment. */
export type IFulfillmentTrackingInfo = {
  __typename?: 'FulfillmentTrackingInfo'
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['URL']>
}

/** Used to specify a geographical location. */
export type IGeoCoordinateInput = {
  /** The coordinate's latitude value. */
  latitude: Scalars['Float']
  /** The coordinate's longitude value. */
  longitude: Scalars['Float']
}

/** Represents information about the metafields associated to the specified resource. */
export type IHasMetafields = {
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<IMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: IMetafieldConnection
}

/** Represents information about the metafields associated to the specified resource. */
export type IHasMetafieldsMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** Represents information about the metafields associated to the specified resource. */
export type IHasMetafieldsMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Represents an image resource. */
export type IImage = {
  __typename?: 'Image'
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>
  /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  height?: Maybe<Scalars['Int']>
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   *
   * @deprecated Use `url` instead
   */
  originalSrc: Scalars['URL']
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead
   */
  src: Scalars['URL']
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   *
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars['URL']
  /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  width?: Maybe<Scalars['Int']>
}

/** Represents an image resource. */
export type IImageTransformedSrcArgs = {
  crop?: InputMaybe<ICropRegion>
  maxHeight?: InputMaybe<Scalars['Int']>
  maxWidth?: InputMaybe<Scalars['Int']>
  preferredContentType?: InputMaybe<IImageContentType>
  scale?: InputMaybe<Scalars['Int']>
}

/**
 * An auto-generated type for paginating through multiple Images.
 *
 */
export type IImageConnection = {
  __typename?: 'ImageConnection'
  /** A list of edges. */
  edges: Array<IImageEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/** List of supported image content types. */
export enum IImageContentType {
  /** A JPG image. */
  Jpg = 'JPG',
  /** A PNG image. */
  Png = 'PNG',
  /** A WEBP image. */
  Webp = 'WEBP',
}

/**
 * An auto-generated type which holds one Image and a cursor during pagination.
 *
 */
export type IImageEdge = {
  __typename?: 'ImageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ImageEdge. */
  node: IImage
}

/** Information about the localized experiences configured for the shop. */
export type ILocalization = {
  __typename?: 'Localization'
  /** The list of countries with enabled localized experiences. */
  availableCountries: Array<ICountry>
  /** The country of the active localized experience. Use the `@inContext` directive to change this value. */
  country: ICountry
}

/** Represents a location where product inventory is held. */
export type ILocation = INode & {
  __typename?: 'Location'
  /** The address of the location. */
  address: ILocationAddress
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The name of the location. */
  name: Scalars['String']
}

/**
 * Represents the address of a location.
 *
 */
export type ILocationAddress = {
  __typename?: 'LocationAddress'
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>
  /** The city of the location. */
  city?: Maybe<Scalars['String']>
  /** The country of the location. */
  country?: Maybe<Scalars['String']>
  /** The country code of the location. */
  countryCode?: Maybe<Scalars['String']>
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars['String']>
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>
  /** The province of the location. */
  province?: Maybe<Scalars['String']>
  /**
   * The code for the province, state, or district of the address of the location.
   *
   */
  provinceCode?: Maybe<Scalars['String']>
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>
}

/**
 * An auto-generated type for paginating through multiple Locations.
 *
 */
export type ILocationConnection = {
  __typename?: 'LocationConnection'
  /** A list of edges. */
  edges: Array<ILocationEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one Location and a cursor during pagination.
 *
 */
export type ILocationEdge = {
  __typename?: 'LocationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of LocationEdge. */
  node: ILocation
}

/** The set of valid sort keys for the Location query. */
export enum ILocationSortKeys {
  /** Sort by the `city` value. */
  City = 'CITY',
  /** Sort by the `distance` value. */
  Distance = 'DISTANCE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `name` value. */
  Name = 'NAME',
}

/** Represents a mailing address for customers and shipping. */
export type IMailingAddress = INode & {
  __typename?: 'MailingAddress'
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: Maybe<Scalars['String']>
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: Maybe<Scalars['String']>
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: Maybe<Scalars['String']>
  /**
   * The name of the country.
   *
   */
  country?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   * @deprecated Use `countryCodeV2` instead
   */
  countryCode?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCodeV2?: Maybe<ICountryCode>
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>
  /**
   * The full name of the customer, based on firstName and lastName.
   *
   */
  name?: Maybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe<Scalars['String']>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars['String']>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>
}

/** Represents a mailing address for customers and shipping. */
export type IMailingAddressFormattedArgs = {
  withCompany?: InputMaybe<Scalars['Boolean']>
  withName?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple MailingAddresses.
 *
 */
export type IMailingAddressConnection = {
  __typename?: 'MailingAddressConnection'
  /** A list of edges. */
  edges: Array<IMailingAddressEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one MailingAddress and a cursor during pagination.
 *
 */
export type IMailingAddressEdge = {
  __typename?: 'MailingAddressEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MailingAddressEdge. */
  node: IMailingAddress
}

/** Specifies the fields accepted to create or update a mailing address. */
export type IMailingAddressInput = {
  /**
   * The first line of the address. Typically the street address or PO Box number.
   *
   */
  address1?: InputMaybe<Scalars['String']>
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: InputMaybe<Scalars['String']>
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: InputMaybe<Scalars['String']>
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: InputMaybe<Scalars['String']>
  /** The name of the country. */
  country?: InputMaybe<Scalars['String']>
  /** The first name of the customer. */
  firstName?: InputMaybe<Scalars['String']>
  /** The last name of the customer. */
  lastName?: InputMaybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']>
  /** The region of the address, such as the province, state, or district. */
  province?: InputMaybe<Scalars['String']>
  /** The zip or postal code of the address. */
  zip?: InputMaybe<Scalars['String']>
}

/**
 * Manual discount applications capture the intentions of a discount that was manually created.
 *
 */
export type IManualDiscountApplication = IDiscountApplication & {
  __typename?: 'ManualDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: IDiscountApplicationAllocationMethod
  /** The description of the application. */
  description?: Maybe<Scalars['String']>
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: IDiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: IDiscountApplicationTargetType
  /** The title of the application. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: IPricingValue
}

/** Represents a media interface. */
export type IMedia = {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /** The media content type. */
  mediaContentType: IMediaContentType
  /** The preview image for the media. */
  previewImage?: Maybe<IImage>
}

/**
 * An auto-generated type for paginating through multiple Media.
 *
 */
export type IMediaConnection = {
  __typename?: 'MediaConnection'
  /** A list of edges. */
  edges: Array<IMediaEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/** The possible content types for a media object. */
export enum IMediaContentType {
  /** An externally hosted video. */
  ExternalVideo = 'EXTERNAL_VIDEO',
  /** A Shopify hosted image. */
  Image = 'IMAGE',
  /** A 3d model. */
  Model_3D = 'MODEL_3D',
  /** A Shopify hosted video. */
  Video = 'VIDEO',
}

/**
 * An auto-generated type which holds one Media and a cursor during pagination.
 *
 */
export type IMediaEdge = {
  __typename?: 'MediaEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MediaEdge. */
  node: IMedia
}

/** Host for a Media Resource. */
export enum IMediaHost {
  /** Host for Vimeo embedded videos. */
  Vimeo = 'VIMEO',
  /** Host for YouTube embedded videos. */
  Youtube = 'YOUTUBE',
}

/** Represents a Shopify hosted image. */
export type IMediaImage = IMedia &
  INode & {
    __typename?: 'MediaImage'
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** The image for the media. */
    image?: Maybe<IImage>
    /** The media content type. */
    mediaContentType: IMediaContentType
    /** The preview image for the media. */
    previewImage?: Maybe<IImage>
  }

/** The merchandise to be purchased at checkout. */
export type IMerchandise = IProductVariant

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 *
 */
export type IMetafield = INode & {
  __typename?: 'Metafield'
  /** The date and time when the storefront metafield was created. */
  createdAt: Scalars['DateTime']
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The key name for a metafield. */
  key: Scalars['String']
  /** The namespace for a metafield. */
  namespace: Scalars['String']
  /** The parent object that the metafield belongs to. */
  parentResource: IMetafieldParentResource
  /**
   * The type name of the metafield.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars['String']
  /** The date and time when the storefront metafield was updated. */
  updatedAt: Scalars['DateTime']
  /** The value of a metafield. */
  value: Scalars['String']
  /**
   * Represents the metafield value type.
   * @deprecated `valueType` is deprecated and replaced by `type` in API version 2021-07.
   */
  valueType: IMetafieldValueType
}

/**
 * An auto-generated type for paginating through multiple Metafields.
 *
 */
export type IMetafieldConnection = {
  __typename?: 'MetafieldConnection'
  /** A list of edges. */
  edges: Array<IMetafieldEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one Metafield and a cursor during pagination.
 *
 */
export type IMetafieldEdge = {
  __typename?: 'MetafieldEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MetafieldEdge. */
  node: IMetafield
}

/** A resource that the metafield belongs to. */
export type IMetafieldParentResource =
  | IArticle
  | IBlog
  | ICollection
  | ICustomer
  | IOrder
  | IPage
  | IProduct
  | IProductVariant
  | IShop

/** Metafield value types. */
export enum IMetafieldValueType {
  /** A boolean metafield. */
  Boolean = 'BOOLEAN',
  /** An integer metafield. */
  Integer = 'INTEGER',
  /** A json string metafield. */
  JsonString = 'JSON_STRING',
  /** A string metafield. */
  String = 'STRING',
}

/** Represents a Shopify hosted 3D model. */
export type IModel3d = IMedia &
  INode & {
    __typename?: 'Model3d'
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** The media content type. */
    mediaContentType: IMediaContentType
    /** The preview image for the media. */
    previewImage?: Maybe<IImage>
    /** The sources for a 3d model. */
    sources: Array<IModel3dSource>
  }

/** Represents a source for a Shopify hosted 3d model. */
export type IModel3dSource = {
  __typename?: 'Model3dSource'
  /** The filesize of the 3d model. */
  filesize: Scalars['Int']
  /** The format of the 3d model. */
  format: Scalars['String']
  /** The MIME type of the 3d model. */
  mimeType: Scalars['String']
  /** The URL of the 3d model. */
  url: Scalars['String']
}

/** Specifies the fields for a monetary value with currency. */
export type IMoneyInput = {
  /** Decimal money amount. */
  amount: Scalars['Decimal']
  /** Currency of the money. */
  currencyCode: ICurrencyCode
}

/**
 * A monetary value with currency.
 *
 */
export type IMoneyV2 = {
  __typename?: 'MoneyV2'
  /** Decimal money amount. */
  amount: Scalars['Decimal']
  /** Currency of the money. */
  currencyCode: ICurrencyCode
}

/**
 * An auto-generated type for paginating through multiple MoneyV2s.
 *
 */
export type IMoneyV2Connection = {
  __typename?: 'MoneyV2Connection'
  /** A list of edges. */
  edges: Array<IMoneyV2Edge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one MoneyV2 and a cursor during pagination.
 *
 */
export type IMoneyV2Edge = {
  __typename?: 'MoneyV2Edge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MoneyV2Edge. */
  node: IMoneyV2
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutation = {
  __typename?: 'Mutation'
  /** Updates the attributes on a cart. */
  cartAttributesUpdate?: Maybe<ICartAttributesUpdatePayload>
  /**
   * Updates customer information associated with a cart.
   * Buyer identity is used to determine
   * [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-checkout)
   * and should match the customer's shipping address.
   *
   */
  cartBuyerIdentityUpdate?: Maybe<ICartBuyerIdentityUpdatePayload>
  /** Creates a new cart. */
  cartCreate?: Maybe<ICartCreatePayload>
  /** Updates the discount codes applied to the cart. */
  cartDiscountCodesUpdate?: Maybe<ICartDiscountCodesUpdatePayload>
  /** Adds a merchandise line to the cart. */
  cartLinesAdd?: Maybe<ICartLinesAddPayload>
  /** Removes one or more merchandise lines from the cart. */
  cartLinesRemove?: Maybe<ICartLinesRemovePayload>
  /** Updates one or more merchandise lines on a cart. */
  cartLinesUpdate?: Maybe<ICartLinesUpdatePayload>
  /** Updates the note on the cart. */
  cartNoteUpdate?: Maybe<ICartNoteUpdatePayload>
  /**
   * Updates the attributes of a checkout if `allowPartialAddresses` is `true`.
   * @deprecated Use `checkoutAttributesUpdateV2` instead
   */
  checkoutAttributesUpdate?: Maybe<ICheckoutAttributesUpdatePayload>
  /** Updates the attributes of a checkout if `allowPartialAddresses` is `true`. */
  checkoutAttributesUpdateV2?: Maybe<ICheckoutAttributesUpdateV2Payload>
  /** Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card. */
  checkoutCompleteFree?: Maybe<ICheckoutCompleteFreePayload>
  /**
   * Completes a checkout using a credit card token from Shopify's Vault.
   * @deprecated Use `checkoutCompleteWithCreditCardV2` instead
   */
  checkoutCompleteWithCreditCard?: Maybe<ICheckoutCompleteWithCreditCardPayload>
  /** Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to  [_request payment processing_](https://shopify.dev/apps/channels/getting-started#request-payment-processing). */
  checkoutCompleteWithCreditCardV2?: Maybe<ICheckoutCompleteWithCreditCardV2Payload>
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV2` instead
   */
  checkoutCompleteWithTokenizedPayment?: Maybe<ICheckoutCompleteWithTokenizedPaymentPayload>
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV3` instead
   */
  checkoutCompleteWithTokenizedPaymentV2?: Maybe<ICheckoutCompleteWithTokenizedPaymentV2Payload>
  /** Completes a checkout with a tokenized payment. */
  checkoutCompleteWithTokenizedPaymentV3?: Maybe<ICheckoutCompleteWithTokenizedPaymentV3Payload>
  /** Creates a new checkout. */
  checkoutCreate?: Maybe<ICheckoutCreatePayload>
  /**
   * Associates a customer to the checkout.
   * @deprecated Use `checkoutCustomerAssociateV2` instead
   */
  checkoutCustomerAssociate?: Maybe<ICheckoutCustomerAssociatePayload>
  /** Associates a customer to the checkout. */
  checkoutCustomerAssociateV2?: Maybe<ICheckoutCustomerAssociateV2Payload>
  /**
   * Disassociates the current checkout customer from the checkout.
   * @deprecated Use `checkoutCustomerDisassociateV2` instead
   */
  checkoutCustomerDisassociate?: Maybe<ICheckoutCustomerDisassociatePayload>
  /** Disassociates the current checkout customer from the checkout. */
  checkoutCustomerDisassociateV2?: Maybe<ICheckoutCustomerDisassociateV2Payload>
  /**
   * Applies a discount to an existing checkout using a discount code.
   * @deprecated Use `checkoutDiscountCodeApplyV2` instead
   */
  checkoutDiscountCodeApply?: Maybe<ICheckoutDiscountCodeApplyPayload>
  /** Applies a discount to an existing checkout using a discount code. */
  checkoutDiscountCodeApplyV2?: Maybe<ICheckoutDiscountCodeApplyV2Payload>
  /** Removes the applied discounts from an existing checkout. */
  checkoutDiscountCodeRemove?: Maybe<ICheckoutDiscountCodeRemovePayload>
  /**
   * Updates the email on an existing checkout.
   * @deprecated Use `checkoutEmailUpdateV2` instead
   */
  checkoutEmailUpdate?: Maybe<ICheckoutEmailUpdatePayload>
  /** Updates the email on an existing checkout. */
  checkoutEmailUpdateV2?: Maybe<ICheckoutEmailUpdateV2Payload>
  /**
   * Applies a gift card to an existing checkout using a gift card code. This will replace all currently applied gift cards.
   * @deprecated Use `checkoutGiftCardsAppend` instead
   */
  checkoutGiftCardApply?: Maybe<ICheckoutGiftCardApplyPayload>
  /**
   * Removes an applied gift card from the checkout.
   * @deprecated Use `checkoutGiftCardRemoveV2` instead
   */
  checkoutGiftCardRemove?: Maybe<ICheckoutGiftCardRemovePayload>
  /** Removes an applied gift card from the checkout. */
  checkoutGiftCardRemoveV2?: Maybe<ICheckoutGiftCardRemoveV2Payload>
  /** Appends gift cards to an existing checkout. */
  checkoutGiftCardsAppend?: Maybe<ICheckoutGiftCardsAppendPayload>
  /** Adds a list of line items to a checkout. */
  checkoutLineItemsAdd?: Maybe<ICheckoutLineItemsAddPayload>
  /** Removes line items from an existing checkout. */
  checkoutLineItemsRemove?: Maybe<ICheckoutLineItemsRemovePayload>
  /** Sets a list of line items to a checkout. */
  checkoutLineItemsReplace?: Maybe<ICheckoutLineItemsReplacePayload>
  /** Updates line items on a checkout. */
  checkoutLineItemsUpdate?: Maybe<ICheckoutLineItemsUpdatePayload>
  /**
   * Updates the shipping address of an existing checkout.
   * @deprecated Use `checkoutShippingAddressUpdateV2` instead
   */
  checkoutShippingAddressUpdate?: Maybe<ICheckoutShippingAddressUpdatePayload>
  /** Updates the shipping address of an existing checkout. */
  checkoutShippingAddressUpdateV2?: Maybe<ICheckoutShippingAddressUpdateV2Payload>
  /** Updates the shipping lines on an existing checkout. */
  checkoutShippingLineUpdate?: Maybe<ICheckoutShippingLineUpdatePayload>
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   *
   */
  customerAccessTokenCreate?: Maybe<ICustomerAccessTokenCreatePayload>
  /**
   * Creates a customer access token using a multipass token instead of email and password.
   * A customer record is created if customer does not exist. If a customer record already
   * exists but the record is disabled, then it's enabled.
   *
   */
  customerAccessTokenCreateWithMultipass?: Maybe<ICustomerAccessTokenCreateWithMultipassPayload>
  /** Permanently destroys a customer access token. */
  customerAccessTokenDelete?: Maybe<ICustomerAccessTokenDeletePayload>
  /**
   * Renews a customer access token.
   *
   * Access token renewal must happen *before* a token expires.
   * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
   *
   */
  customerAccessTokenRenew?: Maybe<ICustomerAccessTokenRenewPayload>
  /** Activates a customer. */
  customerActivate?: Maybe<ICustomerActivatePayload>
  /** Activates a customer with the activation url received from `customerCreate`. */
  customerActivateByUrl?: Maybe<ICustomerActivateByUrlPayload>
  /** Creates a new address for a customer. */
  customerAddressCreate?: Maybe<ICustomerAddressCreatePayload>
  /** Permanently deletes the address of an existing customer. */
  customerAddressDelete?: Maybe<ICustomerAddressDeletePayload>
  /** Updates the address of an existing customer. */
  customerAddressUpdate?: Maybe<ICustomerAddressUpdatePayload>
  /** Creates a new customer. */
  customerCreate?: Maybe<ICustomerCreatePayload>
  /** Updates the default address of an existing customer. */
  customerDefaultAddressUpdate?: Maybe<ICustomerDefaultAddressUpdatePayload>
  /** Sends a reset password email to the customer, as the first step in the reset password process. */
  customerRecover?: Maybe<ICustomerRecoverPayload>
  /** Resets a customer’s password with a token received from `CustomerRecover`. */
  customerReset?: Maybe<ICustomerResetPayload>
  /** Resets a customer’s password with the reset password url received from `CustomerRecover`. */
  customerResetByUrl?: Maybe<ICustomerResetByUrlPayload>
  /** Updates an existing customer. */
  customerUpdate?: Maybe<ICustomerUpdatePayload>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCartAttributesUpdateArgs = {
  attributes: Array<IAttributeInput>
  cartId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCartBuyerIdentityUpdateArgs = {
  buyerIdentity: ICartBuyerIdentityInput
  cartId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCartCreateArgs = {
  input?: InputMaybe<ICartInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCartDiscountCodesUpdateArgs = {
  cartId: Scalars['ID']
  discountCodes?: InputMaybe<Array<Scalars['String']>>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCartLinesAddArgs = {
  cartId: Scalars['ID']
  lines: Array<ICartLineInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCartLinesRemoveArgs = {
  cartId: Scalars['ID']
  lineIds: Array<Scalars['ID']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCartLinesUpdateArgs = {
  cartId: Scalars['ID']
  lines: Array<ICartLineUpdateInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCartNoteUpdateArgs = {
  cartId: Scalars['ID']
  note?: InputMaybe<Scalars['String']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutAttributesUpdateArgs = {
  checkoutId: Scalars['ID']
  input: ICheckoutAttributesUpdateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutAttributesUpdateV2Args = {
  checkoutId: Scalars['ID']
  input: ICheckoutAttributesUpdateV2Input
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutCompleteFreeArgs = {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutCompleteWithCreditCardArgs = {
  checkoutId: Scalars['ID']
  payment: ICreditCardPaymentInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutCompleteWithCreditCardV2Args = {
  checkoutId: Scalars['ID']
  payment: ICreditCardPaymentInputV2
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutCompleteWithTokenizedPaymentArgs = {
  checkoutId: Scalars['ID']
  payment: ITokenizedPaymentInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutCompleteWithTokenizedPaymentV2Args = {
  checkoutId: Scalars['ID']
  payment: ITokenizedPaymentInputV2
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutCompleteWithTokenizedPaymentV3Args = {
  checkoutId: Scalars['ID']
  payment: ITokenizedPaymentInputV3
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutCreateArgs = {
  input: ICheckoutCreateInput
  queueToken?: InputMaybe<Scalars['String']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutCustomerAssociateArgs = {
  checkoutId: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutCustomerAssociateV2Args = {
  checkoutId: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutCustomerDisassociateArgs = {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutCustomerDisassociateV2Args = {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutDiscountCodeApplyArgs = {
  checkoutId: Scalars['ID']
  discountCode: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutDiscountCodeApplyV2Args = {
  checkoutId: Scalars['ID']
  discountCode: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutDiscountCodeRemoveArgs = {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutEmailUpdateArgs = {
  checkoutId: Scalars['ID']
  email: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutEmailUpdateV2Args = {
  checkoutId: Scalars['ID']
  email: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutGiftCardApplyArgs = {
  checkoutId: Scalars['ID']
  giftCardCode: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutGiftCardRemoveArgs = {
  appliedGiftCardId: Scalars['ID']
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutGiftCardRemoveV2Args = {
  appliedGiftCardId: Scalars['ID']
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutGiftCardsAppendArgs = {
  checkoutId: Scalars['ID']
  giftCardCodes: Array<Scalars['String']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutLineItemsAddArgs = {
  checkoutId: Scalars['ID']
  lineItems: Array<ICheckoutLineItemInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutLineItemsRemoveArgs = {
  checkoutId: Scalars['ID']
  lineItemIds: Array<Scalars['ID']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutLineItemsReplaceArgs = {
  checkoutId: Scalars['ID']
  lineItems: Array<ICheckoutLineItemInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutLineItemsUpdateArgs = {
  checkoutId: Scalars['ID']
  lineItems: Array<ICheckoutLineItemUpdateInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutShippingAddressUpdateArgs = {
  checkoutId: Scalars['ID']
  shippingAddress: IMailingAddressInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutShippingAddressUpdateV2Args = {
  checkoutId: Scalars['ID']
  shippingAddress: IMailingAddressInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCheckoutShippingLineUpdateArgs = {
  checkoutId: Scalars['ID']
  shippingRateHandle: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerAccessTokenCreateArgs = {
  input: ICustomerAccessTokenCreateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerAccessTokenCreateWithMultipassArgs = {
  multipassToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerAccessTokenDeleteArgs = {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerAccessTokenRenewArgs = {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerActivateArgs = {
  id: Scalars['ID']
  input: ICustomerActivateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerActivateByUrlArgs = {
  activationUrl: Scalars['URL']
  password: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerAddressCreateArgs = {
  address: IMailingAddressInput
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerAddressDeleteArgs = {
  customerAccessToken: Scalars['String']
  id: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerAddressUpdateArgs = {
  address: IMailingAddressInput
  customerAccessToken: Scalars['String']
  id: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerCreateArgs = {
  input: ICustomerCreateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerDefaultAddressUpdateArgs = {
  addressId: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerRecoverArgs = {
  email: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerResetArgs = {
  id: Scalars['ID']
  input: ICustomerResetInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerResetByUrlArgs = {
  password: Scalars['String']
  resetUrl: Scalars['URL']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type IMutationCustomerUpdateArgs = {
  customer: ICustomerUpdateInput
  customerAccessToken: Scalars['String']
}

/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 *
 */
export type INode = {
  /** A globally-unique identifier. */
  id: Scalars['ID']
}

/** Represents a resource that can be published to the Online Store sales channel. */
export type IOnlineStorePublishable = {
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type IOrder = IHasMetafields &
  INode & {
    __typename?: 'Order'
    /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
    cancelReason?: Maybe<IOrderCancelReason>
    /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
    canceledAt?: Maybe<Scalars['DateTime']>
    /** The code of the currency used for the payment. */
    currencyCode: ICurrencyCode
    /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order. */
    currentSubtotalPrice: IMoneyV2
    /** The total cost of duties for the order, including refunds. */
    currentTotalDuties?: Maybe<IMoneyV2>
    /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
    currentTotalPrice: IMoneyV2
    /** The total of all taxes applied to the order, excluding taxes for returned line items. */
    currentTotalTax: IMoneyV2
    /** The locale code in which this specific order happened. */
    customerLocale?: Maybe<Scalars['String']>
    /** The unique URL that the customer can use to access the order. */
    customerUrl?: Maybe<Scalars['URL']>
    /** Discounts that have been applied on the order. */
    discountApplications: IDiscountApplicationConnection
    /** Whether the order has had any edits applied or not. */
    edited: Scalars['Boolean']
    /** The customer's email address. */
    email?: Maybe<Scalars['String']>
    /** The financial status of the order. */
    financialStatus?: Maybe<IOrderFinancialStatus>
    /** The fulfillment status for the order. */
    fulfillmentStatus: IOrderFulfillmentStatus
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** List of the order’s line items. */
    lineItems: IOrderLineItemConnection
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<IMetafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
     *
     */
    metafields: IMetafieldConnection
    /**
     * Unique identifier for the order that appears on the order.
     * For example, _#1000_ or _Store1001.
     *
     */
    name: Scalars['String']
    /** A unique numeric identifier for the order for use by shop owner and customer. */
    orderNumber: Scalars['Int']
    /** The total cost of duties charged at checkout. */
    originalTotalDuties?: Maybe<IMoneyV2>
    /** The total price of the order before any applied edits. */
    originalTotalPrice: IMoneyV2
    /** The customer's phone number for receiving SMS notifications. */
    phone?: Maybe<Scalars['String']>
    /**
     * The date and time when the order was imported.
     * This value can be set to dates in the past when importing from other systems.
     * If no value is provided, it will be auto-generated based on current date and time.
     *
     */
    processedAt: Scalars['DateTime']
    /** The address to where the order will be shipped. */
    shippingAddress?: Maybe<IMailingAddress>
    /**
     * The discounts that have been allocated onto the shipping line by discount applications.
     *
     */
    shippingDiscountAllocations: Array<IDiscountAllocation>
    /** The unique URL for the order's status page. */
    statusUrl: Scalars['URL']
    /**
     * Price of the order before shipping and taxes.
     * @deprecated Use `subtotalPriceV2` instead
     */
    subtotalPrice?: Maybe<Scalars['Money']>
    /** Price of the order before duties, shipping and taxes. */
    subtotalPriceV2?: Maybe<IMoneyV2>
    /** List of the order’s successful fulfillments. */
    successfulFulfillments?: Maybe<Array<IFulfillment>>
    /**
     * The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).
     * @deprecated Use `totalPriceV2` instead
     */
    totalPrice: Scalars['Money']
    /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
    totalPriceV2: IMoneyV2
    /**
     * The total amount that has been refunded.
     * @deprecated Use `totalRefundedV2` instead
     */
    totalRefunded: Scalars['Money']
    /** The total amount that has been refunded. */
    totalRefundedV2: IMoneyV2
    /**
     * The total cost of shipping.
     * @deprecated Use `totalShippingPriceV2` instead
     */
    totalShippingPrice: Scalars['Money']
    /** The total cost of shipping. */
    totalShippingPriceV2: IMoneyV2
    /**
     * The total cost of taxes.
     * @deprecated Use `totalTaxV2` instead
     */
    totalTax?: Maybe<Scalars['Money']>
    /** The total cost of taxes. */
    totalTaxV2?: Maybe<IMoneyV2>
  }

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type IOrderDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type IOrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type IOrderMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type IOrderMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type IOrderSuccessfulFulfillmentsArgs = {
  first?: InputMaybe<Scalars['Int']>
}

/** Represents the reason for the order's cancellation. */
export enum IOrderCancelReason {
  /** The customer wanted to cancel the order. */
  Customer = 'CUSTOMER',
  /** Payment was declined. */
  Declined = 'DECLINED',
  /** The order was fraudulent. */
  Fraud = 'FRAUD',
  /** There was insufficient inventory. */
  Inventory = 'INVENTORY',
  /** The order was canceled for an unlisted reason. */
  Other = 'OTHER',
}

/**
 * An auto-generated type for paginating through multiple Orders.
 *
 */
export type IOrderConnection = {
  __typename?: 'OrderConnection'
  /** A list of edges. */
  edges: Array<IOrderEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 *
 */
export type IOrderEdge = {
  __typename?: 'OrderEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderEdge. */
  node: IOrder
}

/** Represents the order's current financial status. */
export enum IOrderFinancialStatus {
  /** Displayed as **Authorized**. */
  Authorized = 'AUTHORIZED',
  /** Displayed as **Paid**. */
  Paid = 'PAID',
  /** Displayed as **Partially paid**. */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. */
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  /** Displayed as **Pending**. */
  Pending = 'PENDING',
  /** Displayed as **Refunded**. */
  Refunded = 'REFUNDED',
  /** Displayed as **Voided**. */
  Voided = 'VOIDED',
}

/** Represents the order's aggregated fulfillment status for display purposes. */
export enum IOrderFulfillmentStatus {
  /** Displayed as **Fulfilled**. All of the items in the order have been fulfilled. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service. */
  InProgress = 'IN_PROGRESS',
  /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
  OnHold = 'ON_HOLD',
  /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
  Open = 'OPEN',
  /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by "IN_PROGRESS" status. */
  PendingFulfillment = 'PENDING_FULFILLMENT',
  /** Displayed as **Restocked**. All of the items in the order have been restocked. Replaced by "UNFULFILLED" status. */
  Restocked = 'RESTOCKED',
  /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
  Scheduled = 'SCHEDULED',
  /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
  Unfulfilled = 'UNFULFILLED',
}

/** Represents a single line in an order. There is one line item for each distinct product variant. */
export type IOrderLineItem = {
  __typename?: 'OrderLineItem'
  /** The number of entries associated to the line item minus the items that have been removed. */
  currentQuantity: Scalars['Int']
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<IAttribute>
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<IDiscountAllocation>
  /** The total price of the line item, including discounts, and displayed in the presentment currency. */
  discountedTotalPrice: IMoneyV2
  /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency. */
  originalTotalPrice: IMoneyV2
  /** The number of products variants associated to the line item. */
  quantity: Scalars['Int']
  /** The title of the product combined with title of the variant. */
  title: Scalars['String']
  /** The product variant object associated to the line item. */
  variant?: Maybe<IProductVariant>
}

/**
 * An auto-generated type for paginating through multiple OrderLineItems.
 *
 */
export type IOrderLineItemConnection = {
  __typename?: 'OrderLineItemConnection'
  /** A list of edges. */
  edges: Array<IOrderLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one OrderLineItem and a cursor during pagination.
 *
 */
export type IOrderLineItemEdge = {
  __typename?: 'OrderLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderLineItemEdge. */
  node: IOrderLineItem
}

/** The set of valid sort keys for the Order query. */
export enum IOrderSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `processed_at` value. */
  ProcessedAt = 'PROCESSED_AT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `total_price` value. */
  TotalPrice = 'TOTAL_PRICE',
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type IPage = IHasMetafields &
  INode &
  IOnlineStorePublishable & {
    __typename?: 'Page'
    /** The description of the page, complete with HTML formatting. */
    body: Scalars['HTML']
    /** Summary of the page body. */
    bodySummary: Scalars['String']
    /** The timestamp of the page creation. */
    createdAt: Scalars['DateTime']
    /** A human-friendly unique string for the page automatically generated from its title. */
    handle: Scalars['String']
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<IMetafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
     *
     */
    metafields: IMetafieldConnection
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe<Scalars['URL']>
    /** The page's SEO information. */
    seo?: Maybe<ISeo>
    /** The title of the page. */
    title: Scalars['String']
    /** The timestamp of the latest page update. */
    updatedAt: Scalars['DateTime']
    /**
     * The url pointing to the page accessible from the web.
     * @deprecated Use `onlineStoreUrl` instead
     */
    url: Scalars['URL']
  }

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type IPageMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type IPageMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple Pages.
 *
 */
export type IPageConnection = {
  __typename?: 'PageConnection'
  /** A list of edges. */
  edges: Array<IPageEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one Page and a cursor during pagination.
 *
 */
export type IPageEdge = {
  __typename?: 'PageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of PageEdge. */
  node: IPage
}

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 *
 */
export type IPageInfo = {
  __typename?: 'PageInfo'
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean']
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean']
}

/** The set of valid sort keys for the Page query. */
export enum IPageSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
}

/** A payment applied to a checkout. */
export type IPayment = INode & {
  __typename?: 'Payment'
  /**
   * The amount of the payment.
   * @deprecated Use `amountV2` instead
   */
  amount: Scalars['Money']
  /** The amount of the payment. */
  amountV2: IMoneyV2
  /** The billing address for the payment. */
  billingAddress?: Maybe<IMailingAddress>
  /** The checkout to which the payment belongs. */
  checkout: ICheckout
  /** The credit card used for the payment in the case of direct payments. */
  creditCard?: Maybe<ICreditCard>
  /** A message describing a processing error during asynchronous processing. */
  errorMessage?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /**
   * A client-side generated token to identify a payment and perform idempotent operations.
   * For more information, refer to
   * [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
   *
   */
  idempotencyKey?: Maybe<Scalars['String']>
  /** The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow. */
  nextActionUrl?: Maybe<Scalars['URL']>
  /** Whether the payment is still processing asynchronously. */
  ready: Scalars['Boolean']
  /** A flag to indicate if the payment is to be done in test mode for gateways that support it. */
  test: Scalars['Boolean']
  /** The actual transaction recorded by Shopify after having processed the payment with the gateway. */
  transaction?: Maybe<ITransaction>
}

/** Settings related to payments. */
export type IPaymentSettings = {
  __typename?: 'PaymentSettings'
  /** List of the card brands which the shop accepts. */
  acceptedCardBrands: Array<ICardBrand>
  /** The url pointing to the endpoint to vault credit cards. */
  cardVaultUrl: Scalars['URL']
  /** The country where the shop is located. */
  countryCode: ICountryCode
  /** The three-letter code for the shop's primary currency. */
  currencyCode: ICurrencyCode
  /** A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin. */
  enabledPresentmentCurrencies: Array<ICurrencyCode>
  /** The shop’s Shopify Payments account id. */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<IDigitalWallet>
}

/** The valid values for the types of payment token. */
export enum IPaymentTokenType {
  /** Apple Pay token type. */
  ApplePay = 'APPLE_PAY',
  /** Google Pay token type. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay token type. */
  ShopifyPay = 'SHOPIFY_PAY',
  /** Stripe token type. */
  StripeVaultToken = 'STRIPE_VAULT_TOKEN',
  /** Vault payment token type. */
  Vault = 'VAULT',
}

/** The value of the percentage pricing object. */
export type IPricingPercentageValue = {
  __typename?: 'PricingPercentageValue'
  /** The percentage value of the object. */
  percentage: Scalars['Float']
}

/** The price value (fixed or percentage) for a discount application. */
export type IPricingValue = IMoneyV2 | IPricingPercentageValue

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type IProduct = IHasMetafields &
  INode &
  IOnlineStorePublishable & {
    __typename?: 'Product'
    /** Indicates if at least one product variant is available for sale. */
    availableForSale: Scalars['Boolean']
    /** List of collections a product belongs to. */
    collections: ICollectionConnection
    /** The compare at price of the product across all variants. */
    compareAtPriceRange: IProductPriceRange
    /** The date and time when the product was created. */
    createdAt: Scalars['DateTime']
    /** Stripped description of the product, single line with HTML tags removed. */
    description: Scalars['String']
    /** The description of the product, complete with HTML formatting. */
    descriptionHtml: Scalars['HTML']
    /**
     * A human-friendly unique string for the Product automatically generated from its title.
     * They are used by the Liquid templating language to refer to objects.
     *
     */
    handle: Scalars['String']
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** List of images associated with the product. */
    images: IImageConnection
    /** The media associated with the product. */
    media: IMediaConnection
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<IMetafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
     *
     */
    metafields: IMetafieldConnection
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe<Scalars['URL']>
    /** List of product options. */
    options: Array<IProductOption>
    /**
     * List of price ranges in the presentment currencies for this shop.
     * @deprecated Use `@inContext` instead.
     */
    presentmentPriceRanges: IProductPriceRangeConnection
    /** The price range. */
    priceRange: IProductPriceRange
    /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
    productType: Scalars['String']
    /** The date and time when the product was published to the channel. */
    publishedAt: Scalars['DateTime']
    /** Whether the product can only be purchased with a selling plan. */
    requiresSellingPlan: Scalars['Boolean']
    /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
    sellingPlanGroups: ISellingPlanGroupConnection
    /** The product's SEO information. */
    seo: ISeo
    /**
     * A comma separated list of tags that have been added to the product.
     * Additional access scope required for private apps: unauthenticated_read_product_tags.
     *
     */
    tags: Array<Scalars['String']>
    /** The product’s title. */
    title: Scalars['String']
    /** The total quantity of inventory in stock for this Product. */
    totalInventory?: Maybe<Scalars['Int']>
    /**
     * The date and time when the product was last modified.
     * A product's `updatedAt` value can change for different reasons. For example, if an order
     * is placed for a product that has inventory tracking set up, then the inventory adjustment
     * is counted as an update.
     *
     */
    updatedAt: Scalars['DateTime']
    /**
     * Find a product’s variant based on its selected options.
     * This is useful for converting a user’s selection of product options into a single matching variant.
     * If there is not a variant for the selected options, `null` will be returned.
     *
     */
    variantBySelectedOptions?: Maybe<IProductVariant>
    /** List of the product’s variants. */
    variants: IProductVariantConnection
    /** The product’s vendor name. */
    vendor: Scalars['String']
  }

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type IProductCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type IProductDescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type IProductImagesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  crop?: InputMaybe<ICropRegion>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  maxHeight?: InputMaybe<Scalars['Int']>
  maxWidth?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
  scale?: InputMaybe<Scalars['Int']>
  sortKey?: InputMaybe<IProductImageSortKeys>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type IProductMediaArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<IProductMediaSortKeys>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type IProductMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type IProductMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type IProductOptionsArgs = {
  first?: InputMaybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type IProductPresentmentPriceRangesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  presentmentCurrencies?: InputMaybe<Array<ICurrencyCode>>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type IProductSellingPlanGroupsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type IProductVariantBySelectedOptionsArgs = {
  selectedOptions: Array<ISelectedOptionInput>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type IProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<IProductVariantSortKeys>
}

/** The set of valid sort keys for the ProductCollection query. */
export enum IProductCollectionSortKeys {
  /** Sort by the `best-selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `collection-default` value. */
  CollectionDefault = 'COLLECTION_DEFAULT',
  /** Sort by the `created` value. */
  Created = 'CREATED',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `manual` value. */
  Manual = 'MANUAL',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
}

/**
 * An auto-generated type for paginating through multiple Products.
 *
 */
export type IProductConnection = {
  __typename?: 'ProductConnection'
  /** A list of edges. */
  edges: Array<IProductEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one Product and a cursor during pagination.
 *
 */
export type IProductEdge = {
  __typename?: 'ProductEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductEdge. */
  node: IProduct
}

/** The set of valid sort keys for the ProductImage query. */
export enum IProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
}

/** The set of valid sort keys for the ProductMedia query. */
export enum IProductMediaSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 *
 */
export type IProductOption = INode & {
  __typename?: 'ProductOption'
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The product option’s name. */
  name: Scalars['String']
  /** The corresponding value to the product option name. */
  values: Array<Scalars['String']>
}

/** The price range of the product. */
export type IProductPriceRange = {
  __typename?: 'ProductPriceRange'
  /** The highest variant's price. */
  maxVariantPrice: IMoneyV2
  /** The lowest variant's price. */
  minVariantPrice: IMoneyV2
}

/**
 * An auto-generated type for paginating through multiple ProductPriceRanges.
 *
 */
export type IProductPriceRangeConnection = {
  __typename?: 'ProductPriceRangeConnection'
  /** A list of edges. */
  edges: Array<IProductPriceRangeEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one ProductPriceRange and a cursor during pagination.
 *
 */
export type IProductPriceRangeEdge = {
  __typename?: 'ProductPriceRangeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductPriceRangeEdge. */
  node: IProductPriceRange
}

/** The set of valid sort keys for the Product query. */
export enum IProductSortKeys {
  /** Sort by the `best_selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR',
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type IProductVariant = IHasMetafields &
  INode & {
    __typename?: 'ProductVariant'
    /**
     * Indicates if the product variant is in stock.
     * @deprecated Use `availableForSale` instead
     */
    available?: Maybe<Scalars['Boolean']>
    /** Indicates if the product variant is available for sale. */
    availableForSale: Scalars['Boolean']
    /**
     * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.
     * @deprecated Use `compareAtPriceV2` instead
     */
    compareAtPrice?: Maybe<Scalars['Money']>
    /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`. */
    compareAtPriceV2?: Maybe<IMoneyV2>
    /** Whether a product is out of stock but still available for purchase (used for backorders). */
    currentlyNotInStock: Scalars['Boolean']
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /**
     * Image associated with the product variant. This field falls back to the product image if no image is available.
     *
     */
    image?: Maybe<IImage>
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe<IMetafield>
    /**
     * A paginated list of metafields associated with the resource.
     * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
     *
     */
    metafields: IMetafieldConnection
    /**
     * List of prices and compare-at prices in the presentment currencies for this shop.
     * @deprecated Use `@inContext` instead.
     */
    presentmentPrices: IProductVariantPricePairConnection
    /**
     * List of unit prices in the presentment currencies for this shop.
     * @deprecated Use `@inContext` instead.
     */
    presentmentUnitPrices: IMoneyV2Connection
    /**
     * The product variant’s price.
     * @deprecated Use `priceV2` instead
     */
    price: Scalars['Money']
    /** The product variant’s price. */
    priceV2: IMoneyV2
    /** The product object that the product variant belongs to. */
    product: IProduct
    /** The total sellable quantity of the variant for online sales channels. */
    quantityAvailable?: Maybe<Scalars['Int']>
    /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
    requiresShipping: Scalars['Boolean']
    /** List of product options applied to the variant. */
    selectedOptions: Array<ISelectedOption>
    /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
    sellingPlanAllocations: ISellingPlanAllocationConnection
    /** The SKU (stock keeping unit) associated with the variant. */
    sku?: Maybe<Scalars['String']>
    /** The in-store pickup availability of this variant by location. */
    storeAvailability: IStoreAvailabilityConnection
    /** The product variant’s title. */
    title: Scalars['String']
    /** The unit price value for the variant based on the variant's measurement. */
    unitPrice?: Maybe<IMoneyV2>
    /** The unit price measurement for the variant. */
    unitPriceMeasurement?: Maybe<IUnitPriceMeasurement>
    /** The weight of the product variant in the unit system specified with `weight_unit`. */
    weight?: Maybe<Scalars['Float']>
    /** Unit of measurement for weight. */
    weightUnit: IWeightUnit
  }

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type IProductVariantImageArgs = {
  crop?: InputMaybe<ICropRegion>
  maxHeight?: InputMaybe<Scalars['Int']>
  maxWidth?: InputMaybe<Scalars['Int']>
  scale?: InputMaybe<Scalars['Int']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type IProductVariantMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type IProductVariantMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type IProductVariantPresentmentPricesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  presentmentCurrencies?: InputMaybe<Array<ICurrencyCode>>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type IProductVariantPresentmentUnitPricesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  presentmentCurrencies?: InputMaybe<Array<ICurrencyCode>>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type IProductVariantSellingPlanAllocationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type IProductVariantStoreAvailabilityArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple ProductVariants.
 *
 */
export type IProductVariantConnection = {
  __typename?: 'ProductVariantConnection'
  /** A list of edges. */
  edges: Array<IProductVariantEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one ProductVariant and a cursor during pagination.
 *
 */
export type IProductVariantEdge = {
  __typename?: 'ProductVariantEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantEdge. */
  node: IProductVariant
}

/**
 * The compare-at price and price of a variant sharing a currency.
 *
 */
export type IProductVariantPricePair = {
  __typename?: 'ProductVariantPricePair'
  /** The compare-at price of the variant with associated currency. */
  compareAtPrice?: Maybe<IMoneyV2>
  /** The price of the variant with associated currency. */
  price: IMoneyV2
}

/**
 * An auto-generated type for paginating through multiple ProductVariantPricePairs.
 *
 */
export type IProductVariantPricePairConnection = {
  __typename?: 'ProductVariantPricePairConnection'
  /** A list of edges. */
  edges: Array<IProductVariantPricePairEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one ProductVariantPricePair and a cursor during pagination.
 *
 */
export type IProductVariantPricePairEdge = {
  __typename?: 'ProductVariantPricePairEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantPricePairEdge. */
  node: IProductVariantPricePair
}

/** The set of valid sort keys for the ProductVariant query. */
export enum IProductVariantSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `sku` value. */
  Sku = 'SKU',
  /** Sort by the `title` value. */
  Title = 'TITLE',
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRoot = {
  __typename?: 'QueryRoot'
  /** List of the shop's articles. */
  articles: IArticleConnection
  /** Fetch a specific `Blog` by one of its unique attributes. */
  blog?: Maybe<IBlog>
  /**
   * Find a blog by its handle.
   * @deprecated Use `blog` instead
   */
  blogByHandle?: Maybe<IBlog>
  /** List of the shop's blogs. */
  blogs: IBlogConnection
  /** Find a cart by its ID. */
  cart?: Maybe<ICart>
  /** Fetch a specific `Collection` by one of its unique attributes. */
  collection?: Maybe<ICollection>
  /**
   * Find a collection by its handle.
   * @deprecated Use `collection` instead
   */
  collectionByHandle?: Maybe<ICollection>
  /** List of the shop’s collections. */
  collections: ICollectionConnection
  /** Find a customer by its access token. */
  customer?: Maybe<ICustomer>
  /** Returns the localized experiences configured for the shop. */
  localization: ILocalization
  /**
   * List of the shop's locations that support in-store pickup.
   *
   * When sorting by distance, you must specify a location via the `near` argument.
   *
   */
  locations: ILocationConnection
  /** Returns a specific node by ID. */
  node?: Maybe<INode>
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<INode>>
  /** Fetch a specific `Page` by one of its unique attributes. */
  page?: Maybe<IPage>
  /**
   * Find a page by its handle.
   * @deprecated Use `page` instead
   */
  pageByHandle?: Maybe<IPage>
  /** List of the shop's pages. */
  pages: IPageConnection
  /** Fetch a specific `Product` by one of its unique attributes. */
  product?: Maybe<IProduct>
  /**
   * Find a product by its handle.
   * @deprecated Use `product` instead
   */
  productByHandle?: Maybe<IProduct>
  /**
   * Find recommended products related to a given `product_id`.
   * To learn more about how recommendations are generated, see
   * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
   *
   */
  productRecommendations?: Maybe<Array<IProduct>>
  /**
   * Tags added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   *
   */
  productTags: IStringConnection
  /** List of product types for the shop's products that are published to your app. */
  productTypes: IStringConnection
  /** List of the shop’s products. */
  products: IProductConnection
  /** The list of public Storefront API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<IApiVersion>
  /** The shop associated with the storefront access token. */
  shop: IShop
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootArticlesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<IArticleSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootBlogArgs = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootBlogByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootBlogsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<IBlogSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootCartArgs = {
  id: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootCollectionArgs = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootCollectionByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<ICollectionSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootCustomerArgs = {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootLocationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  near?: InputMaybe<IGeoCoordinateInput>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<ILocationSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootNodeArgs = {
  id: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootNodesArgs = {
  ids: Array<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootPageArgs = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootPageByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootPagesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<IPageSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootProductArgs = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootProductByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootProductRecommendationsArgs = {
  productId: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootProductTagsArgs = {
  first: Scalars['Int']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootProductTypesArgs = {
  first: Scalars['Int']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type IQueryRootProductsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<IProductSortKeys>
}

/** SEO information. */
export type ISeo = {
  __typename?: 'SEO'
  /** The meta description. */
  description?: Maybe<Scalars['String']>
  /** The SEO title. */
  title?: Maybe<Scalars['String']>
}

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 *
 */
export type IScriptDiscountApplication = IDiscountApplication & {
  __typename?: 'ScriptDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: IDiscountApplicationAllocationMethod
  /**
   * The description of the application as defined by the Script.
   * @deprecated Use `title` instead
   */
  description: Scalars['String']
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: IDiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: IDiscountApplicationTargetType
  /** The title of the application as defined by the Script. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: IPricingValue
}

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 *
 */
export type ISelectedOption = {
  __typename?: 'SelectedOption'
  /** The product option’s name. */
  name: Scalars['String']
  /** The product option’s value. */
  value: Scalars['String']
}

/** Specifies the input fields required for a selected option. */
export type ISelectedOptionInput = {
  /** The product option’s name. */
  name: Scalars['String']
  /** The product option’s value. */
  value: Scalars['String']
}

/** Represents how products and variants can be sold and purchased. */
export type ISellingPlan = {
  __typename?: 'SellingPlan'
  /** The description of the selling plan. */
  description?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
  name: Scalars['String']
  /** The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<ISellingPlanOption>
  /** The price adjustments that a selling plan makes when a variant is purchased with a selling plan. */
  priceAdjustments: Array<ISellingPlanPriceAdjustment>
  /** Whether purchasing the selling plan will result in multiple deliveries. */
  recurringDeliveries: Scalars['Boolean']
}

/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
export type ISellingPlanAllocation = {
  __typename?: 'SellingPlanAllocation'
  /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it. */
  priceAdjustments: Array<ISellingPlanAllocationPriceAdjustment>
  /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlan: ISellingPlan
}

/**
 * An auto-generated type for paginating through multiple SellingPlanAllocations.
 *
 */
export type ISellingPlanAllocationConnection = {
  __typename?: 'SellingPlanAllocationConnection'
  /** A list of edges. */
  edges: Array<ISellingPlanAllocationEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination.
 *
 */
export type ISellingPlanAllocationEdge = {
  __typename?: 'SellingPlanAllocationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SellingPlanAllocationEdge. */
  node: ISellingPlanAllocation
}

/** The resulting prices for variants when they're purchased with a specific selling plan. */
export type ISellingPlanAllocationPriceAdjustment = {
  __typename?: 'SellingPlanAllocationPriceAdjustment'
  /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
  compareAtPrice: IMoneyV2
  /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
  perDeliveryPrice: IMoneyV2
  /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
  price: IMoneyV2
  /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
  unitPrice?: Maybe<IMoneyV2>
}

/**
 * An auto-generated type for paginating through multiple SellingPlans.
 *
 */
export type ISellingPlanConnection = {
  __typename?: 'SellingPlanConnection'
  /** A list of edges. */
  edges: Array<ISellingPlanEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one SellingPlan and a cursor during pagination.
 *
 */
export type ISellingPlanEdge = {
  __typename?: 'SellingPlanEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SellingPlanEdge. */
  node: ISellingPlan
}

/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
export type ISellingPlanFixedAmountPriceAdjustment = {
  __typename?: 'SellingPlanFixedAmountPriceAdjustment'
  /** The money value of the price adjustment. */
  adjustmentAmount: IMoneyV2
}

/** A fixed price adjustment for a variant that's purchased with a selling plan. */
export type ISellingPlanFixedPriceAdjustment = {
  __typename?: 'SellingPlanFixedPriceAdjustment'
  /** A new price of the variant when it's purchased with the selling plan. */
  price: IMoneyV2
}

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type ISellingPlanGroup = {
  __typename?: 'SellingPlanGroup'
  /** A display friendly name for the app that created the selling plan group. */
  appName?: Maybe<Scalars['String']>
  /** The name of the selling plan group. */
  name: Scalars['String']
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<ISellingPlanGroupOption>
  /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlans: ISellingPlanConnection
}

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type ISellingPlanGroupSellingPlansArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple SellingPlanGroups.
 *
 */
export type ISellingPlanGroupConnection = {
  __typename?: 'SellingPlanGroupConnection'
  /** A list of edges. */
  edges: Array<ISellingPlanGroupEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.
 *
 */
export type ISellingPlanGroupEdge = {
  __typename?: 'SellingPlanGroupEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SellingPlanGroupEdge. */
  node: ISellingPlanGroup
}

/** Represents an option on a selling plan group that's available in the drop-down list in the storefront. */
export type ISellingPlanGroupOption = {
  __typename?: 'SellingPlanGroupOption'
  /** The name of the option. For example, 'Delivery every'. */
  name: Scalars['String']
  /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
  values: Array<Scalars['String']>
}

/** An option provided by a Selling Plan. */
export type ISellingPlanOption = {
  __typename?: 'SellingPlanOption'
  /** The name of the option (ie "Delivery every"). */
  name?: Maybe<Scalars['String']>
  /** The value of the option (ie "Month"). */
  value?: Maybe<Scalars['String']>
}

/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
export type ISellingPlanPercentagePriceAdjustment = {
  __typename?: 'SellingPlanPercentagePriceAdjustment'
  /** The percentage value of the price adjustment. */
  adjustmentPercentage: Scalars['Int']
}

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type ISellingPlanPriceAdjustment = {
  __typename?: 'SellingPlanPriceAdjustment'
  /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
  adjustmentValue: ISellingPlanPriceAdjustmentValue
  /** The number of orders that the price adjustment applies to If the price adjustment always applies, then this field is `null`. */
  orderCount?: Maybe<Scalars['Int']>
}

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type ISellingPlanPriceAdjustmentValue =
  | ISellingPlanFixedAmountPriceAdjustment
  | ISellingPlanFixedPriceAdjustment
  | ISellingPlanPercentagePriceAdjustment

/** A shipping rate to be applied to a checkout. */
export type IShippingRate = {
  __typename?: 'ShippingRate'
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String']
  /**
   * Price of this shipping rate.
   * @deprecated Use `priceV2` instead
   */
  price: Scalars['Money']
  /** Price of this shipping rate. */
  priceV2: IMoneyV2
  /** Title of this shipping rate. */
  title: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type IShop = IHasMetafields & {
  __typename?: 'Shop'
  /**
   * List of the shop' articles.
   * @deprecated Use `QueryRoot.articles` instead.
   */
  articles: IArticleConnection
  /**
   * List of the shop' blogs.
   * @deprecated Use `QueryRoot.blogs` instead.
   */
  blogs: IBlogConnection
  /**
   * Find a collection by its handle.
   * @deprecated Use `QueryRoot.collectionByHandle` instead.
   */
  collectionByHandle?: Maybe<ICollection>
  /**
   * List of the shop’s collections.
   * @deprecated Use `QueryRoot.collections` instead.
   */
  collections: ICollectionConnection
  /**
   * The three-letter code for the currency that the shop accepts.
   * @deprecated Use `paymentSettings` instead
   */
  currencyCode: ICurrencyCode
  /** A description of the shop. */
  description?: Maybe<Scalars['String']>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<IMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: IMetafieldConnection
  /** A string representing the way currency is formatted when the currency isn’t specified. */
  moneyFormat: Scalars['String']
  /** The shop’s name. */
  name: Scalars['String']
  /** Settings related to payments. */
  paymentSettings: IPaymentSettings
  /** The shop’s primary domain. */
  primaryDomain: IDomain
  /** The shop’s privacy policy. */
  privacyPolicy?: Maybe<IShopPolicy>
  /**
   * Find a product by its handle.
   * @deprecated Use `QueryRoot.productByHandle` instead.
   */
  productByHandle?: Maybe<IProduct>
  /**
   * A list of tags that have been added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   *
   * @deprecated Use `QueryRoot.productTags` instead.
   */
  productTags: IStringConnection
  /**
   * List of the shop’s product types.
   * @deprecated Use `QueryRoot.productTypes` instead.
   */
  productTypes: IStringConnection
  /**
   * List of the shop’s products.
   * @deprecated Use `QueryRoot.products` instead.
   */
  products: IProductConnection
  /** The shop’s refund policy. */
  refundPolicy?: Maybe<IShopPolicy>
  /** The shop’s shipping policy. */
  shippingPolicy?: Maybe<IShopPolicy>
  /** Countries that the shop ships to. */
  shipsToCountries: Array<ICountryCode>
  /**
   * The shop’s Shopify Payments account id.
   * @deprecated Use `paymentSettings` instead
   */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>
  /** The shop’s terms of service. */
  termsOfService?: Maybe<IShopPolicy>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type IShopArticlesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<IArticleSortKeys>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type IShopBlogsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<IBlogSortKeys>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type IShopCollectionByHandleArgs = {
  handle: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type IShopCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<ICollectionSortKeys>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type IShopMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type IShopMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type IShopProductByHandleArgs = {
  handle: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type IShopProductTagsArgs = {
  first: Scalars['Int']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type IShopProductTypesArgs = {
  first: Scalars['Int']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type IShopProductsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<IProductSortKeys>
}

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export type IShopPolicy = INode & {
  __typename?: 'ShopPolicy'
  /** Policy text, maximum size of 64kb. */
  body: Scalars['String']
  /** Policy’s handle. */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** Policy’s title. */
  title: Scalars['String']
  /** Public URL to the policy. */
  url: Scalars['URL']
}

/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 *
 */
export type IStoreAvailability = {
  __typename?: 'StoreAvailability'
  /** Whether the product variant is in-stock at this location. */
  available: Scalars['Boolean']
  /** The location where this product variant is stocked at. */
  location: ILocation
  /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
  pickUpTime: Scalars['String']
}

/**
 * An auto-generated type for paginating through multiple StoreAvailabilities.
 *
 */
export type IStoreAvailabilityConnection = {
  __typename?: 'StoreAvailabilityConnection'
  /** A list of edges. */
  edges: Array<IStoreAvailabilityEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one StoreAvailability and a cursor during pagination.
 *
 */
export type IStoreAvailabilityEdge = {
  __typename?: 'StoreAvailabilityEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of StoreAvailabilityEdge. */
  node: IStoreAvailability
}

/**
 * An auto-generated type for paginating through a list of Strings.
 *
 */
export type IStringConnection = {
  __typename?: 'StringConnection'
  /** A list of edges. */
  edges: Array<IStringEdge>
  /** Information to aid in pagination. */
  pageInfo: IPageInfo
}

/**
 * An auto-generated type which holds one String and a cursor during pagination.
 *
 */
export type IStringEdge = {
  __typename?: 'StringEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of StringEdge. */
  node: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type ITokenizedPaymentInput = {
  /** The amount of the payment. */
  amount: Scalars['Money']
  /** The billing address for the payment. */
  billingAddress: IMailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The type of payment token. */
  type: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type ITokenizedPaymentInputV2 = {
  /** The billing address for the payment. */
  billingAddress: IMailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>
  /** The amount and currency of the payment. */
  paymentAmount: IMoneyInput
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The type of payment token. */
  type: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type ITokenizedPaymentInputV3 = {
  /** The billing address for the payment. */
  billingAddress: IMailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>
  /** The amount and currency of the payment. */
  paymentAmount: IMoneyInput
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The type of payment token. */
  type: IPaymentTokenType
}

/** An object representing exchange of money for a product or service. */
export type ITransaction = {
  __typename?: 'Transaction'
  /**
   * The amount of money that the transaction was for.
   * @deprecated Use `amountV2` instead
   */
  amount: Scalars['Money']
  /** The amount of money that the transaction was for. */
  amountV2: IMoneyV2
  /** The kind of the transaction. */
  kind: ITransactionKind
  /**
   * The status of the transaction.
   * @deprecated Use `statusV2` instead
   */
  status: ITransactionStatus
  /** The status of the transaction. */
  statusV2?: Maybe<ITransactionStatus>
  /** Whether the transaction was done in test mode or not. */
  test: Scalars['Boolean']
}

/** The different kinds of order transactions. */
export enum ITransactionKind {
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   *
   */
  Authorization = 'AUTHORIZATION',
  /** A transfer of the money that was reserved during the authorization stage. */
  Capture = 'CAPTURE',
  /** Money returned to the customer when they have paid too much. */
  Change = 'CHANGE',
  /** An authorization for a payment taken with an EMV credit card reader. */
  EmvAuthorization = 'EMV_AUTHORIZATION',
  /** An authorization and capture performed together in a single step. */
  Sale = 'SALE',
}

/** Transaction statuses describe the status of a transaction. */
export enum ITransactionStatus {
  /** There was an error while processing the transaction. */
  Error = 'ERROR',
  /** The transaction failed. */
  Failure = 'FAILURE',
  /** The transaction is pending. */
  Pending = 'PENDING',
  /** The transaction succeeded. */
  Success = 'SUCCESS',
}

/**
 * The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).
 *
 */
export type IUnitPriceMeasurement = {
  __typename?: 'UnitPriceMeasurement'
  /** The type of unit of measurement for the unit price measurement. */
  measuredType?: Maybe<IUnitPriceMeasurementMeasuredType>
  /** The quantity unit for the unit price measurement. */
  quantityUnit?: Maybe<IUnitPriceMeasurementMeasuredUnit>
  /** The quantity value for the unit price measurement. */
  quantityValue: Scalars['Float']
  /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe<IUnitPriceMeasurementMeasuredUnit>
  /** The reference value for the unit price measurement. */
  referenceValue: Scalars['Int']
}

/** The accepted types of unit of measurement. */
export enum IUnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing areas. */
  Area = 'AREA',
  /** Unit of measurements representing lengths. */
  Length = 'LENGTH',
  /** Unit of measurements representing volumes. */
  Volume = 'VOLUME',
  /** Unit of measurements representing weights. */
  Weight = 'WEIGHT',
}

/** The valid units of measurement for a unit price measurement. */
export enum IUnitPriceMeasurementMeasuredUnit {
  /** 100 centiliters equals 1 liter. */
  Cl = 'CL',
  /** 100 centimeters equals 1 meter. */
  Cm = 'CM',
  /** Metric system unit of weight. */
  G = 'G',
  /** 1 kilogram equals 1000 grams. */
  Kg = 'KG',
  /** Metric system unit of volume. */
  L = 'L',
  /** Metric system unit of length. */
  M = 'M',
  /** Metric system unit of area. */
  M2 = 'M2',
  /** 1 cubic meter equals 1000 liters. */
  M3 = 'M3',
  /** 1000 milligrams equals 1 gram. */
  Mg = 'MG',
  /** 1000 milliliters equals 1 liter. */
  Ml = 'ML',
  /** 1000 millimeters equals 1 meter. */
  Mm = 'MM',
}

/** Systems of weights and measures. */
export enum IUnitSystem {
  /** Imperial system of weights and measures. */
  ImperialSystem = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  MetricSystem = 'METRIC_SYSTEM',
}

/** Represents an error in the input of a mutation. */
export type IUserError = IDisplayableError & {
  __typename?: 'UserError'
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Represents a Shopify hosted video. */
export type IVideo = IMedia &
  INode & {
    __typename?: 'Video'
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>
    /** A globally-unique identifier. */
    id: Scalars['ID']
    /** The media content type. */
    mediaContentType: IMediaContentType
    /** The preview image for the media. */
    previewImage?: Maybe<IImage>
    /** The sources for a video. */
    sources: Array<IVideoSource>
  }

/** Represents a source for a Shopify hosted video. */
export type IVideoSource = {
  __typename?: 'VideoSource'
  /** The format of the video source. */
  format: Scalars['String']
  /** The height of the video. */
  height: Scalars['Int']
  /** The video MIME type. */
  mimeType: Scalars['String']
  /** The URL of the video. */
  url: Scalars['String']
  /** The width of the video. */
  width: Scalars['Int']
}

/** Units of measurement for weight. */
export enum IWeightUnit {
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS',
}

export type IGetShopPageForHomeQueryVariables = Exact<{
  maxWidth?: InputMaybe<Scalars['Int']>
  maxHeight?: InputMaybe<Scalars['Int']>
}>

export type IGetShopPageForHomeQuery = {
  __typename?: 'QueryRoot'
  products: {
    __typename?: 'ProductConnection'
    edges: Array<{
      __typename?: 'ProductEdge'
      node: {
        __typename?: 'Product'
        id: string
        handle: string
        title: string
        productType: string
        tags: Array<string>
        variants: {
          __typename?: 'ProductVariantConnection'
          edges: Array<{
            __typename?: 'ProductVariantEdge'
            node: {
              __typename?: 'ProductVariant'
              id: string
              title: string
              availableForSale: boolean
              weight?: number | null
              weightUnit: IWeightUnit
              priceV2: { __typename?: 'MoneyV2'; amount: any; currencyCode: ICurrencyCode }
              compareAtPriceV2?: {
                __typename?: 'MoneyV2'
                amount: any
                currencyCode: ICurrencyCode
              } | null
              selectedOptions: Array<{ __typename?: 'SelectedOption'; name: string; value: string }>
              image?: {
                __typename?: 'Image'
                altText?: string | null
                originalSrc: any
                transformedSrc: any
              } | null
            }
          }>
        }
        priceRange: {
          __typename?: 'ProductPriceRange'
          maxVariantPrice: { __typename?: 'MoneyV2'; amount: any; currencyCode: ICurrencyCode }
          minVariantPrice: { __typename?: 'MoneyV2'; amount: any; currencyCode: ICurrencyCode }
        }
        images: {
          __typename?: 'ImageConnection'
          edges: Array<{
            __typename?: 'ImageEdge'
            node: {
              __typename?: 'Image'
              altText?: string | null
              originalSrc: any
              transformedSrc: any
            }
          }>
        }
      }
    }>
  }
  shop: {
    __typename?: 'Shop'
    name: string
    privacyPolicy?: { __typename?: 'ShopPolicy'; title: string; handle: string } | null
    refundPolicy?: { __typename?: 'ShopPolicy'; title: string; handle: string } | null
    termsOfService?: { __typename?: 'ShopPolicy'; title: string; handle: string } | null
  }
}

export type IProductFieldsFragment = {
  __typename?: 'Product'
  id: string
  handle: string
  title: string
  productType: string
  tags: Array<string>
  priceRange: {
    __typename?: 'ProductPriceRange'
    maxVariantPrice: { __typename?: 'MoneyV2'; amount: any; currencyCode: ICurrencyCode }
    minVariantPrice: { __typename?: 'MoneyV2'; amount: any; currencyCode: ICurrencyCode }
  }
  images: {
    __typename?: 'ImageConnection'
    edges: Array<{
      __typename?: 'ImageEdge'
      node: { __typename?: 'Image'; altText?: string | null; originalSrc: any; transformedSrc: any }
    }>
  }
}

export type IRootFieldsFragment = {
  __typename?: 'QueryRoot'
  shop: {
    __typename?: 'Shop'
    name: string
    privacyPolicy?: { __typename?: 'ShopPolicy'; title: string; handle: string } | null
    refundPolicy?: { __typename?: 'ShopPolicy'; title: string; handle: string } | null
    termsOfService?: { __typename?: 'ShopPolicy'; title: string; handle: string } | null
  }
}

export type IShopFieldsFragment = {
  __typename?: 'Shop'
  name: string
  privacyPolicy?: { __typename?: 'ShopPolicy'; title: string; handle: string } | null
  refundPolicy?: { __typename?: 'ShopPolicy'; title: string; handle: string } | null
  termsOfService?: { __typename?: 'ShopPolicy'; title: string; handle: string } | null
}

export type IVariantFieldsFragment = {
  __typename?: 'ProductVariant'
  id: string
  title: string
  availableForSale: boolean
  weight?: number | null
  weightUnit: IWeightUnit
  priceV2: { __typename?: 'MoneyV2'; amount: any; currencyCode: ICurrencyCode }
  compareAtPriceV2?: { __typename?: 'MoneyV2'; amount: any; currencyCode: ICurrencyCode } | null
  selectedOptions: Array<{ __typename?: 'SelectedOption'; name: string; value: string }>
  image?: {
    __typename?: 'Image'
    altText?: string | null
    originalSrc: any
    transformedSrc: any
  } | null
}

export const ProductFieldsFragmentDoc = `
    fragment ProductFields on Product {
  id
  handle
  title
  productType
  tags
  priceRange {
    maxVariantPrice {
      amount
      currencyCode
    }
    minVariantPrice {
      amount
      currencyCode
    }
  }
  images(first: 100) {
    edges {
      node {
        altText
        originalSrc
        transformedSrc(
          maxHeight: $maxHeight
          maxWidth: $maxWidth
          crop: CENTER
          scale: 3
        )
      }
    }
  }
}
    `
export const ShopFieldsFragmentDoc = `
    fragment ShopFields on Shop {
  name
  privacyPolicy {
    title
    handle
  }
  refundPolicy {
    title
    handle
  }
  termsOfService {
    title
    handle
  }
}
    `
export const RootFieldsFragmentDoc = `
    fragment RootFields on QueryRoot {
  shop {
    ...ShopFields
  }
}
    ${ShopFieldsFragmentDoc}`
export const VariantFieldsFragmentDoc = `
    fragment VariantFields on ProductVariant {
  id
  title
  availableForSale
  weight
  weightUnit
  priceV2 {
    amount
    currencyCode
  }
  compareAtPriceV2 {
    amount
    currencyCode
  }
  selectedOptions {
    name
    value
  }
  image {
    altText
    originalSrc
    transformedSrc(
      maxHeight: $maxHeight
      maxWidth: $maxWidth
      crop: CENTER
      scale: 3
    )
  }
}
    `
export const GetShopPageForHomeDocument = `
    query GetShopPageForHome($maxWidth: Int = 384, $maxHeight: Int = 384) {
  ...RootFields
  products(
    first: 100
    query: "product_type:vanille OR product_type:epice OR product_type:coffret"
  ) {
    edges {
      node {
        ...ProductFields
        variants(first: 10) {
          edges {
            node {
              ...VariantFields
            }
          }
        }
      }
    }
  }
}
    ${RootFieldsFragmentDoc}
${ProductFieldsFragmentDoc}
${VariantFieldsFragmentDoc}`
export const useGetShopPageForHomeQuery = <TData = IGetShopPageForHomeQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: IGetShopPageForHomeQueryVariables,
  options?: UseQueryOptions<IGetShopPageForHomeQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<IGetShopPageForHomeQuery, TError, TData>(
    variables === undefined ? ['GetShopPageForHome'] : ['GetShopPageForHome', variables],
    fetcher<IGetShopPageForHomeQuery, IGetShopPageForHomeQueryVariables>(
      client,
      GetShopPageForHomeDocument,
      variables,
      headers
    ),
    options
  )

useGetShopPageForHomeQuery.getKey = (variables?: IGetShopPageForHomeQueryVariables) =>
  variables === undefined ? ['GetShopPageForHome'] : ['GetShopPageForHome', variables]
useGetShopPageForHomeQuery.fetcher = (
  client: GraphQLClient,
  variables?: IGetShopPageForHomeQueryVariables,
  headers?: RequestInit['headers']
) =>
  fetcher<IGetShopPageForHomeQuery, IGetShopPageForHomeQueryVariables>(
    client,
    GetShopPageForHomeDocument,
    variables,
    headers
  )
