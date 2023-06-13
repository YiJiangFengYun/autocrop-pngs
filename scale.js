import jimp from "jimp";


var pathTgt = process.argv[2];
var scale = Number(process.argv[3]);

var lenna = await jimp.read(pathTgt);
lenna.scale(scale);
await lenna.writeAsync(pathTgt);

