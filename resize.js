import jimp from "jimp";


var pathTgt = process.argv[2];
var width = Number(process.argv[3]);
var height = Number(process.argv[4]);

var lenna = await jimp.read(pathTgt);
// lenna.resize(width, height, jimp.RESIZE_NEAREST_NEIGHBOR);
lenna.resize(width, height);
await lenna.writeAsync(pathTgt);

