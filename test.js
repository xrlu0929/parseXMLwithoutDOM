let text = "<xml><return_code><![CDATA[SUCCESS]]></return_code>↵<return_msg><![CDATA[OK]]></return_msg>↵<appid><![CDATA[wx3ec444c597ea5a04]]></appid>↵<mch_id><![CDATA[1517420991]]></mch_id>↵<nonce_str><![CDATA[KNM8Q4y56a1xopAl]]></nonce_str>↵<sign><![CDATA[BFBE9A2A7E702C6A004EE98C96D8CE2E]]></sign>↵<result_code><![CDATA[SUCCESS]]></result_code>↵<prepay_id><![CDATA[wx060634432448240b6a27b34e1441358000]]></prepay_id>↵<trade_type><![CDATA[JSAPI]]></trade_type>↵</xml>";
function parseXML(text){
  var parse = text;
//   console.log(parse.substring(0,5));
  let length = parse.length
  var parsedArray = parse.match(/\<(.*?)\>/g)
//   console.log(parse.substring(length - 6, length));
//   console.log(parsedArray)
  
  var parsedLength = parsedArray.length
  
  let returnInfo = {}
  
  if (parsedArray[0] !== "<xml>" && parsedArray[parsedLength -1] !== "</xml>") {
    returnInfo = null;
  } else {
    console.log("start parse")
    
    var key = ''
    var value = ''
    for(let i = 0; i < parsedLength; i++) {
      if (i % 3 == 1 && i != parsedLength - 1) {
//         console.log(parsedArray[i]);
        // key
        key = parsedArray[i].substring(1, parsedArray[i].length-1);
        console.log(key);
      } else if (i % 3 == 2) {
//         console.log(parsedArray[i]);
//         value
        value = parsedArray[i].substring(9, parsedArray[i].length-3);
        console.log(value);
      } else if (i!= 0 && i != parsedLength - 1){
        returnInfo[key]=value
      }
     
    }
    console.log(returnInfo)
    
  }
}

parseXML(text)
