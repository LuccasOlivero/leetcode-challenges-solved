// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function strStr(haystack: string, needle: string): number {
  // if the length of needle is bigger than the haystack return -1, because it is not possible to find the word inside the haystack
  if (haystack.length < needle.length) return -1;

  // iterate until there are enough charaters to fund needle
  for (let i: number = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
}
