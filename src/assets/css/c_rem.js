var fs = require("fs");
var path = require("path");

function toRem(filePath, keywords) {
  //  同步读取文件内容
  var content = fs.readFileSync(filePath, "utf-8")

  var arr = content.split("\n")

  var count = 0,resultArray=[]

  for (var i = 0; i < arr.length; i++) {
    var value = arr[i]
    // console.log(value)
    var temp = value.replace(/(\d*\.?\d+)rem/g, function () {
      count++;
      return Math.round(Number(arguments[1])*40) + "px"
    })
    // console.log(temp)
    resultArray.push(temp);
  }

  var result = resultArray.join("\n")

  var formatFilePath = filePath.replace(".", keywords||'' + ".");
  var dirPath = formatFilePath.substring(0,formatFilePath.lastIndexOf('\\'));
  console.log(formatFilePath,dirPath);
  fs.exists(dirPath,function(exists){
    if(!exists){
      console.log("文件夹不存在")
      fs.mkdir(dirPath, function (ret) {
        console.log(ret);
      });
    }
  })
  fs.writeFile(formatFilePath, result, "utf-8", function(err) {
    if (err) console.log(err)
    console.log("change lines number: " + count)
  })
}
/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath){
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath,function(err,files){
    if(err){
      console.warn(err)
    }else{
      //遍历读取到的文件列表
      files.forEach(function(filename){
        //获取当前文件的绝对路径
        var filedir = path.join(filePath,filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir,function(eror,stats){
          if(eror){
            console.warn('获取文件stats失败');
          }else{
            var isFile = stats.isFile();//是文件
            var isDir = stats.isDirectory();//是文件夹
            if(isFile){
              console.log(filedir);
              if(filename.lastIndexOf('.css')!== -1){
                toRem('.\\'+filedir, 'tempcss');
              }
            }
            if(isDir){
              fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        })
      });
    }
  });
}
// fileDisplay('./css');
toRem('./form.styl', '');