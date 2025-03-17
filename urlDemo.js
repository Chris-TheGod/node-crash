import url from 'url';

const urlString = 'https://www.google.com/search?=hello+world';

// URL Object
const urlObj = new URL(urlString);

console.log(urlObj);

console.log(url.format(urlObj));
