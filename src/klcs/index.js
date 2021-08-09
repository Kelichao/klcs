// import './private/common.css';
import kit from "./private/kit"
import _ from "./public/underscore"

// var _ = require("./public/underscore")

import ajax from "./private/ajax"
import $   from "./public/jquery"
// var a = require ("./public/jquery")
// var jquery = require("@/public/jquery")
// import jquery from "jquery"
// var cont = require("./public/underscore")

// console.log(cont,2222)
// console.log($)
// console.log(_,4444)

kit._ = _;
kit.$ = $;
kit.ajax = ajax;

export default kit