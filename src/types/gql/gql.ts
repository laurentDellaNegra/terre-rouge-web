/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetAllProductsWithSlug {\n    products(first: 250) {\n      edges {\n        node {\n          handle\n        }\n      }\n    }\n  }\n": types.GetAllProductsWithSlugDocument,
    "\n  query GetOurSelection($maxWidth: Int = 384, $maxHeight: Int = 384) {\n    collection(handle: \"frontpage\") {\n      products(first: 4) {\n        edges {\n          node {\n            id\n            handle\n            title\n            productType\n            tags\n            priceRange {\n              maxVariantPrice {\n                amount\n                currencyCode\n              }\n              minVariantPrice {\n                amount\n                currencyCode\n              }\n            }\n            images(first: 100) {\n              edges {\n                node {\n                  altText\n                  originalSrc\n                  transformedSrc(maxHeight: $maxHeight, maxWidth: $maxWidth, crop: CENTER, scale: 3)\n                }\n              }\n            }\n            variants(first: 10) {\n              edges {\n                node {\n                  id\n                  title\n                  availableForSale\n                  weight\n                  weightUnit\n                  priceV2 {\n                    amount\n                    currencyCode\n                  }\n                  compareAtPriceV2 {\n                    amount\n                    currencyCode\n                  }\n                  selectedOptions {\n                    name\n                    value\n                  }\n                  image {\n                    altText\n                    originalSrc\n                    transformedSrc(\n                      maxHeight: $maxHeight\n                      maxWidth: $maxWidth\n                      crop: CENTER\n                      scale: 3\n                    )\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetOurSelectionDocument,
    "\n  query GetProduct($handle: String!) {\n    product(handle: $handle) {\n      id\n      handle\n      title\n      productType\n      tags\n      priceRange {\n        maxVariantPrice {\n          amount\n          currencyCode\n        }\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      images(first: 10) {\n        edges {\n          node {\n            id\n            altText\n            url(transform: { maxHeight: 700, maxWidth: 700, crop: CENTER, scale: 3 })\n            smallUrl: url(transform: { maxHeight: 160, maxWidth: 160, crop: CENTER, scale: 3 })\n          }\n        }\n      }\n      descriptionHtml\n      variants(first: 10) {\n        edges {\n          node {\n            id\n            title\n            availableForSale\n            weight\n            weightUnit\n            price {\n              amount\n              currencyCode\n            }\n            compareAtPrice {\n              amount\n              currencyCode\n            }\n            selectedOptions {\n              name\n              value\n            }\n            image {\n              id\n            }\n          }\n        }\n      }\n      application: metafield(namespace: \"custom\", key: \"application\") {\n        key\n        value\n      }\n      benefits: metafield(namespace: \"custom\", key: \"benefits\") {\n        key\n        value\n      }\n      composition: metafield(namespace: \"custom\", key: \"composition\") {\n        key\n        value\n      }\n    }\n  }\n": types.GetProductDocument,
    "\n  query GetShop {\n    shop {\n      name\n      privacyPolicy {\n        title\n        handle\n      }\n      refundPolicy {\n        title\n        handle\n      }\n      termsOfService {\n        title\n        handle\n      }\n    }\n    collections(first: 4) {\n      edges {\n        node {\n          title\n          handle\n          products(first: 50) {\n            edges {\n              node {\n                productType\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetShopDocument,
};

export function graphql(source: "\n  query GetAllProductsWithSlug {\n    products(first: 250) {\n      edges {\n        node {\n          handle\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllProductsWithSlug {\n    products(first: 250) {\n      edges {\n        node {\n          handle\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetOurSelection($maxWidth: Int = 384, $maxHeight: Int = 384) {\n    collection(handle: \"frontpage\") {\n      products(first: 4) {\n        edges {\n          node {\n            id\n            handle\n            title\n            productType\n            tags\n            priceRange {\n              maxVariantPrice {\n                amount\n                currencyCode\n              }\n              minVariantPrice {\n                amount\n                currencyCode\n              }\n            }\n            images(first: 100) {\n              edges {\n                node {\n                  altText\n                  originalSrc\n                  transformedSrc(maxHeight: $maxHeight, maxWidth: $maxWidth, crop: CENTER, scale: 3)\n                }\n              }\n            }\n            variants(first: 10) {\n              edges {\n                node {\n                  id\n                  title\n                  availableForSale\n                  weight\n                  weightUnit\n                  priceV2 {\n                    amount\n                    currencyCode\n                  }\n                  compareAtPriceV2 {\n                    amount\n                    currencyCode\n                  }\n                  selectedOptions {\n                    name\n                    value\n                  }\n                  image {\n                    altText\n                    originalSrc\n                    transformedSrc(\n                      maxHeight: $maxHeight\n                      maxWidth: $maxWidth\n                      crop: CENTER\n                      scale: 3\n                    )\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOurSelection($maxWidth: Int = 384, $maxHeight: Int = 384) {\n    collection(handle: \"frontpage\") {\n      products(first: 4) {\n        edges {\n          node {\n            id\n            handle\n            title\n            productType\n            tags\n            priceRange {\n              maxVariantPrice {\n                amount\n                currencyCode\n              }\n              minVariantPrice {\n                amount\n                currencyCode\n              }\n            }\n            images(first: 100) {\n              edges {\n                node {\n                  altText\n                  originalSrc\n                  transformedSrc(maxHeight: $maxHeight, maxWidth: $maxWidth, crop: CENTER, scale: 3)\n                }\n              }\n            }\n            variants(first: 10) {\n              edges {\n                node {\n                  id\n                  title\n                  availableForSale\n                  weight\n                  weightUnit\n                  priceV2 {\n                    amount\n                    currencyCode\n                  }\n                  compareAtPriceV2 {\n                    amount\n                    currencyCode\n                  }\n                  selectedOptions {\n                    name\n                    value\n                  }\n                  image {\n                    altText\n                    originalSrc\n                    transformedSrc(\n                      maxHeight: $maxHeight\n                      maxWidth: $maxWidth\n                      crop: CENTER\n                      scale: 3\n                    )\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetProduct($handle: String!) {\n    product(handle: $handle) {\n      id\n      handle\n      title\n      productType\n      tags\n      priceRange {\n        maxVariantPrice {\n          amount\n          currencyCode\n        }\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      images(first: 10) {\n        edges {\n          node {\n            id\n            altText\n            url(transform: { maxHeight: 700, maxWidth: 700, crop: CENTER, scale: 3 })\n            smallUrl: url(transform: { maxHeight: 160, maxWidth: 160, crop: CENTER, scale: 3 })\n          }\n        }\n      }\n      descriptionHtml\n      variants(first: 10) {\n        edges {\n          node {\n            id\n            title\n            availableForSale\n            weight\n            weightUnit\n            price {\n              amount\n              currencyCode\n            }\n            compareAtPrice {\n              amount\n              currencyCode\n            }\n            selectedOptions {\n              name\n              value\n            }\n            image {\n              id\n            }\n          }\n        }\n      }\n      application: metafield(namespace: \"custom\", key: \"application\") {\n        key\n        value\n      }\n      benefits: metafield(namespace: \"custom\", key: \"benefits\") {\n        key\n        value\n      }\n      composition: metafield(namespace: \"custom\", key: \"composition\") {\n        key\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProduct($handle: String!) {\n    product(handle: $handle) {\n      id\n      handle\n      title\n      productType\n      tags\n      priceRange {\n        maxVariantPrice {\n          amount\n          currencyCode\n        }\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      images(first: 10) {\n        edges {\n          node {\n            id\n            altText\n            url(transform: { maxHeight: 700, maxWidth: 700, crop: CENTER, scale: 3 })\n            smallUrl: url(transform: { maxHeight: 160, maxWidth: 160, crop: CENTER, scale: 3 })\n          }\n        }\n      }\n      descriptionHtml\n      variants(first: 10) {\n        edges {\n          node {\n            id\n            title\n            availableForSale\n            weight\n            weightUnit\n            price {\n              amount\n              currencyCode\n            }\n            compareAtPrice {\n              amount\n              currencyCode\n            }\n            selectedOptions {\n              name\n              value\n            }\n            image {\n              id\n            }\n          }\n        }\n      }\n      application: metafield(namespace: \"custom\", key: \"application\") {\n        key\n        value\n      }\n      benefits: metafield(namespace: \"custom\", key: \"benefits\") {\n        key\n        value\n      }\n      composition: metafield(namespace: \"custom\", key: \"composition\") {\n        key\n        value\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetShop {\n    shop {\n      name\n      privacyPolicy {\n        title\n        handle\n      }\n      refundPolicy {\n        title\n        handle\n      }\n      termsOfService {\n        title\n        handle\n      }\n    }\n    collections(first: 4) {\n      edges {\n        node {\n          title\n          handle\n          products(first: 50) {\n            edges {\n              node {\n                productType\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetShop {\n    shop {\n      name\n      privacyPolicy {\n        title\n        handle\n      }\n      refundPolicy {\n        title\n        handle\n      }\n      termsOfService {\n        title\n        handle\n      }\n    }\n    collections(first: 4) {\n      edges {\n        node {\n          title\n          handle\n          products(first: 50) {\n            edges {\n              node {\n                productType\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;