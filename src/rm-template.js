// const compList = require("compList")
const genReadMe = (compList) => {

return `
# ${compList.title}

## Description

${compList.description}

## Table of Content

- [Installation](#installation)
- [Usage](#usage)

## Installation

## Usage

`;
}

module.exports = genReadMe