// ES5 JavaScript - Old-school JavaScript way to program !!
// 
// TODO: use modern EcmaScript Language Feature to make this program more 2020 friendly
// - remove semi-colons
// - use const or let instead of const
// - use arrow-function => instead of function(){}
// - use TemplateString 
// - What if you rename the file from server.js to server.ts  :-) 
// - etc......

const port = 1234

const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');
    imageDir = '../';
 

http.createServer( (req, res) => {
    const query = url.parse(req.url,true).query;
        pic = query.image;
 
    if (typeof pic === 'undefined') {
        getImages(imageDir,  (err, files) => {
            let imageLists = '<ul>';
            for (let i=0; i<files.length; i++) {
                imageLists += '<li><a href="/?image=' + files[i] + '">' + files[i] + '</li>';
            }
            imageLists += '</ul>';
            res.writeHead(200, {'Content-type':'text/html'});
            res.end(imageLists);
        });
    } else {
        //read the image using fs and send the image content back in the response
        fs.readFile(imageDir + pic, (err, content) => {
            if (err) {
                res.writeHead(400, {'Content-type':'text/html'})
                console.log(err);
                res.end("No such image");    
            } else {
                //specify the content type in the response will be an image
                res.writeHead(200,{'Content-type':'image/jpg'});
                res.end(content);
            }
        });
    }
 
}).listen(port);
console.log(`Server running at http://localhost:${port}/`);
 
//get the list of jpg files in the image dir
let getImages = (imageDir, callback) => {
    let fileType = '.jpg',
        files = [], i;
    fs.readdir(imageDir, (err, list) => {
        for(i=0; i<list.length; i++) {
            if(path.extname(list[i]) === fileType) {
                files.push(list[i]); //store the file name into the array files
            }
        }
        callback(err, files);
    });
}