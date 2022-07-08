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


  // TODO: Create a function that returns the license link
// If there is no license, return an empty string

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

## Installation
  These are the steps required to install project and then deploy it:*



module.exports = generateMarkdown;
