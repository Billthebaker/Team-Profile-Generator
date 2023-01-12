
//function to generate HTML for Profiles
function generateHTML(answer) {
    console.log(answer)
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <h1>Team Roster<h1>
    <h2> Engineer Roster </h2
    <li> Engineer Name:${answer.engineer_name}
    Engineer ID number:${answer.engineer_id}
   Engineer Email: ${answer.engineer_email}
    Engineer Github:${answer.engineer_git}

    <h2> Intern Roster</h2>
    Intern Name:${answer.intern_name}
    
      
    </body>
    </html>
   
 
 `;
 
 } 
 
 
 module.exports = generateHTML;

