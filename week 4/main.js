var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://mhd-hfz.github.io/F28WP-lab1/week%204/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();
