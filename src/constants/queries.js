export const FEATURED_PRODUCTS = `[[at(document.type, "product")]]&q=[[at(document.tags, ["Featured"])]]`;
export const CATEGORY = '[[at(document.type, "category")]]';
export const PRODUCT = '[[at(document.type, "product")]]';
export const PRODUCT_DETAIL = (productId) => `[[:d+=+at(document.id,+${productId})+]]`;
export const PRODUCT_SEARCH = '[[at(document.type, "product")]]&q=[[fulltext(document, "{searchTerm}")]]';