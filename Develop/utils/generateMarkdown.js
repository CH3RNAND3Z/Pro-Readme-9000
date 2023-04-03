// Function that returns a license badge, the license link, and the license section of README.
// If there is no license, return an empty string
// Function also generates markdown for README

const generateMarkdown = (data) => {
  const badge = renderLicenseBadge(data.license);
  const license = renderLicenseSection(data.license);
  return `
 # ${data.title}

${badge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the project, please contact me at ${
    data.email
  }. You can find more of my work at https://github.com/${data.github}.
`;
};

const renderLicenseBadge = (license) => {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return '';
};

const renderLicenseSection = (license) => {
  if (license !== 'None') {
    return `This project is licensed under the ${license} license.`;
  }
  return 'This project is not licensed.';
};

module.exports = generateMarkdown;
