// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

// always string, never empty, url always same format

// return string

// Example
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

const domainName = url => url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com" ));