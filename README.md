
#About this repo

This is currently just plato, started as a fork from https://github.com/deedubs/es6-plato.
After seeing it was unpublished on npm and also wanting to add more features, I Asked if it [would be alright for me to publish and continue the work.](https://github.com/deedubs/es6-plato/issues/4)

Eventually I would like to make something that is similar to this, but provides more feedback to the developer, so they can integrate complexity reporting more fluidly into their CI pipeline, but for now, just a working version of plato that also works on es6/React projects is goal #1.

This is still under development, and is published with an alpha tag.

# plato
Visualize JavaScript source complexity with plato.
## Example report on popular projects

## Installation
Install the module with: `npm install -g plato`

## Usage

### From the commandline

```
Usage : plato [options] -d <output_dir> <input files>
  -h, --help
      Display this help text.
  -q, --quiet
      Reduce output to errors only
  -v, --version
      Print the version.
  -x, --exclude : String
      File exclusion regex
  -d, --dir : String *required*
      The output directory
  -r, --recurse
      Recursively search directories
  -l, --jshint : String
      Specify a jshintrc file for JSHint linting
  -t, --title : String
      Title of the report
  -D, --date : String
      Time to use as the report date (seconds, > 9999999999 assumed to be ms)
```

__Example__

```shell
plato -r -d report src
```

__Extended example__

```
plato -r -d report -l .jshintrc -t "My Awesome App" -x .json routes/*.js
```

### From scripts

```
var plato = require('plato');

var files = [
  'path/to/javascript/file1.js',
  ...
  'path/to/javascript/fileN.js'
];

var outputDir = './output/dir';
// null options for this example
var options = {
  title: 'Your title here'
};

var callback = function (report){
// once done the analysis,
// execute this
};

plato.inspect(files, outputDir, {}, callback);
```

## Data sources

  - Complexity data by [Phil Booth](https://github.com/philbooth)'s [complexity-report](https://github.com/philbooth/complexityReport.js)
  - Lint data from [jshint](https://github.com/jshint/jshint/) NOTE: SWAP FOR ESLINT!

## Contributors
  - [Jarrod Overson](https://github.com/jsoverson)
  - [Craig Davis](https://github.com/there4)
  - [David Linse](https://github.com/davidlinse)
  - [Jesse Harlin](https://github.com/the-simian/es6-plato)

## Release History


## License
Copyright (c) 2012 Jesse Harlin
Licensed under the MIT license.

Based on a fork by
Jarrod Overson
