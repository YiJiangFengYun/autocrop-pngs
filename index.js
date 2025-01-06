import fsExtra from "fs-extra";
import path from "path";
import jimp from "jimp";


var srcDir = process.argv[2];
var tgtDir = process.argv[3];
await fsExtra.ensureDir(tgtDir);
await fsExtra.emptyDir(tgtDir);

var files = await fsExtra.readdir(srcDir);
for (var file of files)
{
    if (path.extname(file).toLowerCase() === ".png")
    {
        var lenna = await jimp.read(path.join(srcDir, file));
        lenna.autocrop();
        await lenna.writeAsync(path.join(tgtDir, file));
    }
}
