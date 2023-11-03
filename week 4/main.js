var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://mhd-hfz.github.io/F28WP-lab1/week%204/index.html');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
console.log(ourData[0]);
};
ourRequest.send();
