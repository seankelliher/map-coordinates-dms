[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/map-coordinates-dms?style=flat-square)](/LICENSE.txt)
## Map Coordinates DMS

Guided interface to convert longitude and latitude coordinates from the traditional Degrees Minutes, Seconds (DMS) format to the Digital Degrees (DD) format used in computer-based mapping. Interface built with Vue.js. [View working component](https://sean-kelliher-map-coordinates-dms.netlify.app).

## Project Status

Next steps, I want to do more extensive accessibility and browser testing.

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

## Reflection

 I wanted to build a "step by step" guided interface for users to convert map coordinates in the Degrees, Minutes, and Seconds format, found on printed maps, to the Digital Degrees format used in computer-based mapping software.

 The math to convert the coordinates is not too difficult, although there are a number of steps to keep organized.

 Error handling was challenging. I needed to determine all the possible ways users may enter incorrect data or no data, have ways to catch these errors, and respond with helpful error messages.

 Integrating a dynamic Mapbox map based on the coordinates a user provides also took some time. With this, the most frustrating aspect was that the map's container would easily collapse, making the map disappear. I needed to find the correct CSS combinations that would keep it visible.

## Acknowledgments

* Latitude and Longitude guidance from [Humboldt State University](http://gsp.humboldt.edu/OLM/Lessons/GIS/01%20SphericalCoordinates/Reporting_Geographic_Coordinates.html), [University of Nebraska - Lincoln](http://astro.unl.edu/naap/motion1/tc_units.html), [Wikipedia](https://en.wikipedia.org/wiki/Decimal_degrees), [Journey North](https://journeynorth.org/tm/LongitudeIntro.html), [Exploring Our Fluid Earth](https://manoa.hawaii.edu/exploringourfluidearth/physical/world-ocean/locating-points-globe/compare-contrast-connect-converting-decimal-degrees), and [University of Alaska, Fairbanks](http://cespubs.uaf.edu/publications?show=1#2491).
* Helpful advice on rounding numbers in JavaScript from [Stackoverflow](https://stackoverflow.com/questions/7342957/how-do-you-round-to-one-decimal-place-in-javascript).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Shields from [Shields](https://shields.io).