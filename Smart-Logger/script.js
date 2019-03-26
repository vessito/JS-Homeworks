function loggerObj(url){
    this.log = ()=>{
        console.log(`logger is logging!`);
    }
    this.dir = ()=>{
        console.dir(url);
    }
}
function noLoggerObj(url){
    this.log = ()=>{
      console.log();
    }
    this.dir = ()=>{
        console.dir(url);
    }
}

function smartLogger(url) {
    if(url.startsWith('http://127.0.0.1:5500')){
      return new loggerObj(url);
    } else {
        return new noLoggerObj(url);
    }
  }

var logger = smartLogger(document.URL);
var logger2 = smartLogger('http://128.0.0.1:5500/JS-Homeworks/OOP-in-JS/Smart-Logger/index.html');

logger.log();
logger.dir();
logger2.log();
logger2.dir();
