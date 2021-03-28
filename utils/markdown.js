function licenseInfo(data){
    const licenseName = data.license[0];
    let licenseBadge = ' ';
    if (licenseName ===  "GNU General Public License 2.0"){
        licenseBadge = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
    };
    if (licenseName === 'MIT'){
        licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    };
    if(licenseName === "Apache License 2.0"){
        licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
    
}

function GenMark(data){
    return `# ${data.title}


    ## Table of Contents:
***
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [Questions](#Questions)
  

## Description
${data.description} 

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${licenseInfo(data)}

## Questions
${data.Questions}`
}

module.exports = GenMark;