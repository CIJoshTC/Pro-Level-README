// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}
 // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === 'None'){
      return '';
    }
  
    return `\n* [License](#license)\n`; 
    
  }
