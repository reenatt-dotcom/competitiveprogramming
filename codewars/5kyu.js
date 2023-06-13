// 1. not very secure
function alphanumeric(string){
    //your code here
    if (string=="") return false
    else {
      for(let i=0;i<string.length;i++){
        if (!("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".includes(string[i]))) return false
      }
    }
    return true
  }