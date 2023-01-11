const managerPrompt = require("../manager_questions");

//function to generate HTML for Profiles
function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <h1>NACHO CHEESE DORITOS<h1>
    <h2>Office Number: ${data.manager_office}
    <body>
      
    </body>
    </html>
   
 
 `;
 } 


module.exports = generateHTML;
