let text = "<xml><return_code><![CDATA[SUCCESS]]></return_code>↵<return_msg><![CDATA[OK]]></return_msg>↵<appid><![CDATA[wx3ec444c597ea5a04]]></appid>↵<mch_id><![CDATA[1517420991]]></mch_id>↵<nonce_str><![CDATA[KNM8Q4y56a1xopAl]]></nonce_str>↵<sign><![CDATA[BFBE9A2A7E702C6A004EE98C96D8CE2E]]></sign>↵<result_code><![CDATA[SUCCESS]]></result_code>↵<prepay_id><![CDATA[wx060634432448240b6a27b34e1441358000]]></prepay_id>↵<trade_type><![CDATA[JSAPI]]></trade_type>↵</xml>";
function parseXML(text){
  var parse = text;
//   console.log(parse.substring(0,5));
  let length = parse.length
  var parsedArray = parse.match(/\<(.*?)\>/g)
//   console.log(parse.substring(length - 6, length));
  console.log(parsedArray)
  
  var parsedLength = parsedArray.length
  
  if (parsedArray[0] !== "<xml>" && parsedArray[parsedLength -1] !== "</xml>") {
    return;
  } else {
    console.log("start parse")
//     console.log(text.match('CDATA'))
    // loop through each parsedArray items
    /**
    *  check if they have 
    **/
    if(text.match('CDATA') != null){
      console.log('matches')
      console.log(text.match("CDATA"))
      console.log(text.match(/\[(.*?)\]/g))
      var parseArray = text.match(/\[(.*?)\]/g)
      if (parseArray && parseArray.length > 0){
        for(var i = 0; i < parseArray.length -1; i++){
          let item = parseArray[i]
          console.log(item.substring(1, 6))
          if (item.substring(1, 6) === "CDATA"){
            var information = item.substring(7, item.length -1)
            console.log(information)

          } 
          
        }
      }
      
    } else {
      console.log('not match')
    }
   
  }
}

parseXML(text)
