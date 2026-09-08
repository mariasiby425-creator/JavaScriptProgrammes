import student from "./student.json" with {type:"json"} //imprt json file student
JSON.parse(JSON.stringify(student))               //stringify - convert json object into string,
 const jsobj=JSON.parse(JSON.stringify(student)) //Parse = to convert to jscript object
 console.log(jsobj.name)