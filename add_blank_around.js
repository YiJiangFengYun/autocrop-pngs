import jimp from "jimp";


var pathSrc = process.argv[2];
var pathOutput = process.argv[3];

var image = await jimp.read(pathSrc);
 
// 设置透明边框的宽度
const borderWidth = 10;
 
// 创建一个新的图像，大小为原图的宽度加上两倍的透明边框宽度，
// 高度同理
const newWidth = image.bitmap.width + borderWidth * 2;
const newHeight = image.bitmap.height + borderWidth * 2;

var blankImage = await jimp.create(newWidth, newHeight, 0x00000000);

blankImage.composite(image, borderWidth, borderWidth);
 
await blankImage.writeAsync(pathOutput);

