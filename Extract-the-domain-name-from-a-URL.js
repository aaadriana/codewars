/*  
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

*/
function domainName(url) {
  let hostname;
  if (url.indexOf("//") > -1) {
    hostname = url.split("/")[2];
  } else {
    hostname = url.split("/")[0];
  }
  return hostname.split(".").includes("www")
    ? hostname.split(".")[1]
    : hostname.split(".")[0];
}

domainName("http://google.com"); // "google"
domainName("http://google.co.jp"); // "google"
domainName("www.xakep.ru"); // "xakep"
domainName("https://youtube.com"); // "youtube"
