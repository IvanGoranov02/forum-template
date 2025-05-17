// utils/cleanUnicode.js
// Removes broken surrogate pairs and BOM from a string to prevent rendering issues with emojis and special characters
export function cleanUnicode(str) {
  if (!str) return '';
  // Remove BOM
  str = str.replace(/^\uFEFF/, '');
  // Remove broken surrogate pairs
  str = str.replace(/([\uD800-\uDBFF])(?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])([\uDC00-\uDFFF])/g, '');
  // Force UTF-8 encoding
  try {
    return decodeURIComponent(escape(str));
  } catch {
    return str;
  }
} 