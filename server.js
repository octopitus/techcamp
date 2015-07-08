process.env.NODE_PATH = 'app';

require('module').Module._initPaths();

// Register babel loader
require('babel/register')({ stage: 1 });

// Bootstrap server
require('./server/bootstrap');
