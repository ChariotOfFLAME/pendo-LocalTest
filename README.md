# pendo-LocalTest
A localhost website created by Alex Newton, heavily modified by @ChariotOfFLAME . 
Featuring many Pendo testing and debugging methods, as well as other tangential projects.

![Screenshot of a the site](https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDQFw_dlyM10gysGvyQ0RnLyXQn-19LFImaDsRjc4lrnrUSnDsLcaJzMFssT1MClSeRvNhqEooFWLspOgGu0A32OsT2gA=w2560-h1323)

:warning: _WARNING: This repo is designed for use with Pendo Employees and their access levels to the Pendo Application in mind. While many of these functions may work for your customer Subscription, the below instructions are geared towards internal Pendo Employees._ ⚠️

## Setup
- Create a new App in your personal Pendo Test Subscription, or add these pages to another App.
- Download the Repo into a self-contained folder
- open [pendo-snippet.js](/pendo-snippet.js) in your text editor
- replace the string on [line 104](/pendo-snippet.js#L104) with the above App's [Pendo API Key](https://support.pendo.io/hc/en-us/articles/9480629519131-Error-No-Matching-API-Key)
  - This will be loaded on every page in the directory, and thus is installed on each page, so you only need to change the API key here.
  - for an EU sub, comment out [lines 28-104](pendo-snippet.js#L28-L104) and uncomment [lines 108-134](pendo-snippet.js#L108C3-L134), replacing the string on [line 134](pendo-snippet.js#L134) with the EU Sub App's API Key

## Run
- [Ensure you have installed Python 3 on your Pendo Mac (using Pendo Self Service)](https://pendo-io.atlassian.net/wiki/spaces/ENG/pages/176652/Python+Setup)
- On Mac, navigate to the parent folder above where you placed the files from this repo
- right click on the folder and select "Run Terminal at Folder"
- copy the text from [runThisInTerminalFromThisFolder.txt](runThisInTerminalFromThisFolder.txt) into the new Terminal Window and hit Enter
- navigate to [http://localhost:8080/](http://localhost:8080/)

## Alternate Configurations:
- Optional Configurations include:
  - [Programmatic Location API](https://agent.pendo.io/advanced/location#pendolocationaddtransforms) - [index.html lines 21-39](index.html#L21-L39)
  - [Programmatic API-Activation Guides Launcher](https://agent.pendo.io/public/Guides#showGuideById) - [index.html line 10](index.html#L10) and [lines 59-62](index.html#L59-L62) and [pendo-guideLauncher.js](pendo-guideLauncher.js)
  - [Pendo Function Shortcuts](https://agent.pendo.io/public/Agent) - [index.html line 11](index.html#L11) and [lines 64-188](index.html#L64-L118), and [pendo-agent-functions.js](pendo-agent-functions.js)
  - [Pendo Status Page API Checker](https://status.atlassian.com/api#javascript-library) - [index.html lines 12-20](index.html#L12-L20) and [lines 283-286](index.html#L283-L286), [cdn.statuspage.io_se-v2.js](cdn.statuspage.io_se-v2.js), and [pendo-status.js](pendo-status.js)
  - Heavily modified and simplified [iFrame Town](https://github.com/4storia/4storia.github.io) - [multiFrame folder](multiFrame)
    - credit to @4storia for building the first iFrame Town

## Pre-built Pendo Adjustments:
- Change Visitor or Account Information:
  - Change the variables being passed in [pendo-snippet.js lines 3-18](pendo-snippet.js#L3-L18)
  - Switch to hardcoded strings in [pendo-snippet.js lines 54-69](pendo-snippet.js#L54-L69)
- Enable Snippet-based [Location API](https://agent.pendo.io/advanced/location):
  - Comment in [pendo-snippet.js lines 92-100](pendo-snippet.js#L92-L100)
- Add [client-side Track Event](https://support.pendo.io/hc/en-us/articles/360032294291-Track-Events-Configuration) to any element:
  - configure the Track Event Properties in [pendo-trackEvent.js](pendo-trackEvent.js)
  - in any HTML file, add ```onclick="pendoClickEvent()"``` as an attribute to any element
