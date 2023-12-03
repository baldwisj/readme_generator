// this function returns a license badge based on which license is passed in
// If there is no license it returns an empty string

function renderLicenseBadge(license) {
  let licenseBadge;
  switch (license) {
    case 'Apache 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Boost Software 1.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'BSD 3-Clause':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'BSD 2-Clause':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case 'Elipse Public 1.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      break;
    case 'GNU GPL v3':
      licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'GNU GPL v2':
      licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case '':
      licenseBadge = ''

  }
  return licenseBadge;
}

// This function returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch (license) {
    case 'Apache 2.0':
      licenseLink = 'https://opensource.org/license/apache-2-0/'
      break;
    case 'Boost Software 1.0':
      licenseLink = 'https://www.boost.org/LICENSE_1_0.txt'
      break;
    case 'BSD 3-Clause':
      licenseLink = 'https://opensource.org/license/bsd-3-clause/'
      break;
    case 'BSD 2-Clause':
      licenseLink = 'https://opensource.org/license/bsd-2-clause/'
      break;
    case 'Elipse Public 1.0':
      licenseLink = 'https://opensource.org/license/epl-1-0/'
      break;
    case 'GNU GPL v3':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
      break;
    case 'GNU GPL v2':
      licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
      break;
    case '':
      licenseLink = ''
      break;
  }
  return licenseLink;
}

//This function returns the license section of README
// If there is not a license, it returns an empty string
function renderLicenseSection(license) {
  let licenseSection;
  const licenseLink = renderLicenseLink(license);
  (licenseLink) ? licenseSection = `## License\n- License: ${license}\n-${licenseLink}` : licenseSection = ``;

  return licenseSection;
}

//This function generates the markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
  ${licenseBadge}\n
  # ${data.title}\n
  ## Table of Contents\n
  - Description(#Description)\n
  - Installation(#Insallation)\n
  - Usage(#Usage)\n
  - License(#License)\n
  - Contribution(#Contribution)\n
  - Test(#Test)\n
  - Questions(#Questions)\n
  - Links(#Links)\n

  ## Description\n
  ${data.description}\n

  ## Installation\n
  ${data.installation}\n

  ## Usage\n
  ${data.usage}\n

  ${licenseSection}\n

  ## Contribution\n
  ${data.contribution}\n

  ## Test\n
  ${data.test}\n

  ## Questions\n
  - ${data.gitName}\n
  - ${data.email}\n

  ## Links\n
  - ${data.links}
`;
}

module.exports = generateMarkdown;
