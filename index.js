import fs  from  "fs";
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';


var string = fs.readFileSync('thing.html')

var doc = new JSDOM(string);
let reader = new Readability(doc.window.document, {debug : true});
let article = reader.parse();