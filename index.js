module.exports.compiler = require("./src/compiler.js");
module.exports.c_tester = require("./ports/c/tester.js");
module.exports.wasm_tester = require("./ports/wasm/tester.js");
module.exports.tester = module.exports.wasm_tester;
module.exports.testerReuse = require("./ports/wasm/tester-reuse.js");
module.exports.c_tester_reuse = require("./ports/c/tester-reuse.js");
