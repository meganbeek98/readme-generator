// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(userResponses, userInfo) {

  // Generate Table of Contents conditionally based on userResponses
  let draftToC = `## Table of Contents`;

  if (userResponses.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftToC += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { draftToC += `
  * [Tests](#tests)` };


  // generates the top of readme.md file
  let draftMarkdown = 
  `# ${userResponses.title}

  ## Description 
  
  *The what, why, and how:* 
  
  ${userResponses.description}
  `

  // Add Table of Contents to markdown
  draftMarkdown += draftToC;
 
  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;
  

  // Optional Installation section
  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userResponses.installation}`
  };
  

  // Optional Usage section
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`
  };
  
  
  // Optional Contributing section
  if (userResponses.contributing !== '') {

  draftMarkdown +=
    
  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${userResponses.contributing}`
  };
  

  // Optional Tests section
  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`
  };

   // License Section (required)
   draftMarkdown +=
   `
   
   ## License
   
   ${userResponses.license}
   `;
 
 
   // 'About-the-Developer' Questions Section
   let draftDev = 
   `
   ---

   ## Questions?
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="40%" />
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  // IF GitHub/GitHub-email is valid, add to 'Developer' Section
  if (userInfo.email !== null) {
  
  draftDev +=
  `
  Email: ${userInfo.email}
  `};

  // ADDS developer-question answers Section to .md file
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;
  
}

module.exports = generateMarkdown;