
// returns a license badge based on which license is passed in



function renderLicenseBadge(license) {
  switch (license) {
    case `MIT License`:
    licenseBadge = `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)`
    break;
    case `Creative Commons`:
    licenseBadge = `[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)`
    break;
    case `Unlicense`:
      licenseBadge = `[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)`
      break;
    default:
    licenseBadge = ``
    
      // https://naereen.github.io/badges/
    return licenseBadge;
  }  
}

// returns the license link

function renderLicenseLink(license) {

  switch (license) {
    case `MIT License`:
      licenseLink = `[https://lbesson.mit-license.org/](https://lbesson.mit-license.org/)`
    break;
    case `Creative Commons`:
      licenseLink = `[https://creativecommons.org/licenses/by-nd/4.0](https://creativecommons.org/licenses/by-nd/4.0)`
    break;
    case `Unlicense`:
      licenseLink = `[https://unlicense.org/](https://unlicense.org/)`
    break;
    default:
      licenseLink = ``

    return licenseLink;
  }  
}

// returns the license section of README
function renderLicenseSection(license) {

  switch (license) {
    case `MIT License`:
      licenseSection = `This project is licensed under the terms of the MIT license.`
    break;
    case `Creative Commons`:
      licenseSection = `This project is licensed under the terms of the Creative Commons license.`
    break;
    case `Unlicense`:
      licenseSection = `This project is licensed under the terms of the Unlicense license.`
    break;
    default:
      licenseSection = ``
      
    return licenseSection;
  }  
}

// generate markdown for README
function generateMarkdown(answers, license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
  renderLicenseSection(license);
  
  return `# ${answers.title}
  ${licenseBadge}

## Description:
${answers.description}

## Table of Contents:
- [Project](#project)
  - [Description:](#description)
  - [Table of Contents:](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Questions](#questions)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)

## Installation
_________________
${answers.installation}

## Usage
_________________

${answers.usage}

## Credits
_________________
* README badges pulled from [https://naereen.github.io/badges/](https://naereen.github.io/badges/)
* ${answers.credits}

## Questions
  _________________
  Contact me with any questions, comments or suggestions at:
* [GitHub.com/${answers.github}](http://github.com/${answers.github})
* [${answers.email}](mailto:${answers.email})
* [LinkedIn.com/in/${answers.LinkedIn}](https://www.linkedin.com/in/${answers.LinkedIn})

## Contributing
_________________
${answers.contributing}

## Tests
_________________
${answers.tests}

## License
_________________
${licenseBadge}
* ${licenseSection}
* ${licenseLink}
* Legal Code: [LICENSE](LICENSE)


`;
}

module.exports = generateMarkdown;




