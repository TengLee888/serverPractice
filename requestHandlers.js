function start() {
  console.log("Request handler 'start' was called.");
  return "Hello Start";
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "Hello Upload";
}

function teng() {
  console.log("Request handler 'teng' was called.");
  return "Teng, you are awesome!";
}


exports.start = start;
exports.upload = upload;
exports.teng = teng;
