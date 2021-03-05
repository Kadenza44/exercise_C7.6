
export function sum(a, b) {
    return a + b
}


export function reversStr(str){
  if(typeof(str)==='string'){
    const lastLetter = str.length-1
    let resultStr = ''
    for(let i=lastLetter; i>=0; i--){
      resultStr += str[i]
    }
    return resultStr
  } else{
    return `${str} - не является строкой`
  }
}



