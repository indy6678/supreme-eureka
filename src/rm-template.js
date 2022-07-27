// const compList = require("compList")
const genReadMe = (compList) => {

return `
# ${compList.title}

## Description (Req)

${compList.description}

## Table of Contents (Req)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation (Req)

${compList.install}

## Usage (Req)

${compList.usage}

## License (Req)

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

${compList.license[0]}<br>
${compList.license[1]}<br>
${compList.license[2]}

## How To Contribute

If you would like to contribute, please follow guidelines as set forth [here](https://www.contributor-covenant.org/).

## Tests



## Questions (req)

GitHub Username: ${compList.github}<br>
GitHub link: https://github.com/${compList.github}<br>
- For more information, feel free to reach me at ${compList.email}.

`;
}

module.exports = genReadMe