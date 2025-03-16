## What happens when you submit the form? What is the query string? 

- nothing happens
- the quary string is: 
name=&name=&birthdate=&password=&biography=&fav-color=%23000000

## If you change the form method to "POST", what happens when you submit the form? Is there a query string?

- still nothing because there is no "action" attribute set
- There is no string in the url, but I found it in the body of the request using dev tools -> network -> index.html -> payload:

name=Arturo&name=test&gender=male&birthdate=2025-02-25&password=securepassword&biography=tecweb+student&fav-color=%230d0d0d

(i did fill in some data this time)⬆️

## Use the browser’s web tools to inspect the POST request that is sent upon submission of the form. What is the body of the POST request? 

- uh ups. Did this one early.

## What happens, upon submission, if one of the inputs does not have a name attribute? 

- it does not appear in the query, thus its value does not get passed
