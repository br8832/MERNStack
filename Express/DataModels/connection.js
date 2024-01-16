let mongooseObj = require("mongoose")
schemaObj = mongooseObj.Schema
//creates db with name mernstack17 or opens a connection if already present
//mongooseObj.createConnection("mongodb://127.0.0.1/mernstack17")
mongooseObj.connect("mongodb://127.0.0.1/mernstack17"); 
module.exports = mongooseObj