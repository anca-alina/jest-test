//filesystem module
import fs from 'fs';
// path
import path from 'path';
//use path to build a file path to our data subdirectory 
const dataDir=path.join(process.cwd(), "data" );

//console.log(dataDir);

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const filepath = path.join( dataDir, "car.json" );

  const jsondata = fs.readFileSync( filepath, "utf8" );

  const jsonObj = JSON.parse( jsondata );

  jsonObj.sort(
    function(a,b) {
      return a.make.localeCompare(b.make);
    }
  );

  res.status(200).json( jsonObj );
}
