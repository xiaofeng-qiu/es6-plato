


# es6-plato
Visualize JavaScript source complexity with plato.
Based on the older es5 plato, this is a port to `es6` and `eslint`

And still under development.


#The Report
![dank-es6-nugs](https://cloud.githubusercontent.com/assets/954596/18904556/3a81efea-8524-11e6-8588-ad8f5a51b001.PNG)

## Installation
Install the module with: `npm install --save es6-plato`

## Usage


### From scripts

```js

//be sure and set your src, output, and any options.
let src = './scripts/**/*.js';
let outputDir = './artifacts/plato';

let platoArgs = {
  title: 'example',
  eslint: {}
};

//you can use the reports in the callback.
function callback(reports){
  let overview = plato.getOverviewReport(reports);

  let {
    total,
    average
  } = overview.summary;

  let output = `total
    ----------------------
    eslint: ${total.eslint}
    sloc: ${total.sloc}
    maintainability: ${total.maintainability}
    average
    ----------------------
    eslint: ${average.eslint}
    sloc: ${average.sloc}
    maintainability: ${average.maintainability}`;

  console.log(output);
}


//usage is plato.inspect
plato.inspect(src, outputDir, platoArgs, callback);

```

# Example Gulpfile


```js
let gulp = require('gulp');
let plato = require('es6-plato');

let src = './scripts/**/*.js';
let outputDir = './artifacts/plato';


let lintRules = {
  'rules': {
    'indent': [2,'tab'],
    'quotes': [2,'single'],
    'semi': [2,'always'],
    'no-console' : [1],
    'curly': ['error'],
    'no-dupe-keys': 2,
    'func-names': [1, 'always']
  },
  'env': {
    'es6': true
  },
  'globals': {
    'require' : true
  },
  'parserOptions' : {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'modules': true
    }
  }
};


let complexityRules = {

};

let platoArgs = {
    title: 'example',
    eslint: lintRules,
    complexity: complexityRules
};

function analysis() {
  return plato.inspect(src, outputDir, platoArgs);
}

gulp.task('analysis', analysis);

```


### From the commandline

```sh
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
  -t, --title : String
      Title of the report
  -D, --date : String
      Time to use as the report date (seconds, > 9999999999 assumed to be ms)
```

__Example__

```shell
plato -r -d report src
```

![class functions, ya'll](https://cloud.githubusercontent.com/assets/954596/18904476/d1a57302-8523-11e6-85df-b474be8c59a8.PNG)

## Data sources
  - Complexity from [typhonjs-escomplex](https://github.com/typhonjs-node-escomplex/typhonjs-escomplex)
  - Lint data from [eslint](http://eslint.org/)

## Contributors
  - [Jesse Harlin](https://github.com/the-simian)
  - [Jarrod Overson](https://github.com/jsoverson)
  - [Craig Davis](https://github.com/there4)
  - [David Linse](https://github.com/davidlinse)

## Release History
  | version     | update |
- | 1.0.2-alpha | Project works with es6 and eslint |
- | 1.0.6-alpha | Use typhonjs-escomplex |
- | 1.0.0       | Class methods parsed and evaluated correctly |
- | 1.0.2       | Fix error when no callback supplied |

#About
This is currently a reimplementation of the older  plato, and started as a fork from https://github.com/deedubs/es6-plato, but has since been heavily modified.
After seeing it was unpublished on npm and also wanting to add more features, I Asked if it [would be alright for me to publish and continue the work.](https://github.com/deedubs/es6-plato/issues/4)
This project uses eslint, not jshint for default linting.

I have switched to the [typhon-js](https://github.com/typhonjs-node-escomplex/typhonjs-escomplex) module since it properly parses classes.

## License
Copyright (c) 2012 Jesse Harlin
Licensed under the MIT license.
