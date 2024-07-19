[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/map-coordinates-dms?style=flat-square)](/LICENSE.txt)
## Map Coordinates DMS

Guided "step by step" interface to convert longitude and latitude coordinates from traditional Degrees Minutes, Seconds (DMS) format to Digital Degrees (DD) format used in computer-based mapping. After conversion, the interface dynamically generates a map of the converted location. This project is built with Vue.js and Mapbox. [View working component](https://sean-kelliher-map-coordinates-dms.netlify.app).

## Project Status

Project meets general accessibility (WACG) and cross-browser requirements. More testing with a dedicated services (e.g., Sauce Labs) would be helpful if deploying to production.

## Project Screen Shots

* Starting view.
![screen shot of project](/screenshots/map-coordinates-dms-screenshot1.png?s=600)

* Enter longitude.
![screen shot of project](/screenshots/map-coordinates-dms-screenshot2.png?s=600)

* Enter latitude, with error message for empty input.
![screen shot of project](/screenshots/map-coordinates-dms-screenshot3.png?s=600)

* Results, with Mapbox map.
![screen shot of project](/screenshots/map-coordinates-dms-screenshot4.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`  

To Run Vue:

`npm run dev`    

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`.

## Acknowledgments

* Latitude and Longitude guidance from [Humboldt State University](http://gsp.humboldt.edu/OLM/Lessons/GIS/01%20SphericalCoordinates/Reporting_Geographic_Coordinates.html), [University of Nebraska - Lincoln](http://astro.unl.edu/naap/motion1/tc_units.html), [Wikipedia](https://en.wikipedia.org/wiki/Decimal_degrees), [Journey North](https://journeynorth.org/tm/LongitudeIntro.html), [Exploring Our Fluid Earth](https://manoa.hawaii.edu/exploringourfluidearth/physical/world-ocean/locating-points-globe/compare-contrast-connect-converting-decimal-degrees), and [University of Alaska, Fairbanks](http://cespubs.uaf.edu/publications?show=1#2491).
* Helpful advice on rounding numbers in JavaScript from [Stackoverflow](https://stackoverflow.com/questions/7342957/how-do-you-round-to-one-decimal-place-in-javascript).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Shields from [Shields](https://shields.io).