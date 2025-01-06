import jimp from "jimp";
import fsExtra from "fs-extra";
import path from "path";

var dirSrc = process.argv[2];
var dirOutput = process.argv[3];
await fsExtra.ensureDir(dirOutput);
await fsExtra.emptyDir(dirOutput);

// 设置透明边框的宽度
const borderWidth = 10;

var files = await fsExtra.readdir(dirSrc);
for (var file of files)
{
    if (path.extname(file).toLowerCase() === ".png")
    {
        var image = await jimp.read(path.join(dirSrc, file));
        // 创建一个新的图像，大小为原图的宽度加上两倍的透明边框宽度，
        // 高度同理
        const newWidth = image.bitmap.width + borderWidth * 2;
        const newHeight = image.bitmap.height + borderWidth * 2;

        var blankImage = await jimp.create(newWidth, newHeight, 0x00000000);

        blankImage.composite(image, borderWidth, borderWidth);
        await blankImage.writeAsync(path.join(dirOutput, file));
    }
}


