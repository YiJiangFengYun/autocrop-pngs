import fsExtra from "fs-extra";
import path from "path";
import jimp from "jimp";


var dirSrc = process.argv[2];
var tgtSrc = process.argv[3];

var files = await fsExtra.readdir(dirSrc);
for (var file of files)
{
    if (path.extname(file).toLowerCase() === ".png")
    {
        var lenna = await jimp.read(path.join(dirSrc, file));
        lenna.autocrop();
        await lenna.writeAsync(path.join(tgtSrc, file));
    }
}
