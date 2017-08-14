/**
 * Created by yanshan on 2017/7/19.
 */

function alertFun() {
    alert('您输入的值不在我们要求的范围');
}
//年龄
let ageC = function (x) {
    if(x<0 || x>150){
        return false
    }
    return true
};
//身高
let heightC = function (x) {
    if(x<110 || x>230){
        return false
    }
    return true
};
//体重
let weightC = function (x) {
    if(x<5 || x>160){
        return false
    }
  return true
};
//肩宽
let shoulderWC = function (x) {
    if(x<25 || x>60){
        return false
    }
  return true
};
//肩高
let shoulderHC = function (x) {
  if(x<80||x>180){
    return false
  }
  return true
};
//腰围
let waistlineWC = function (x) {
    if(x<15 || x>60){
        return false
    }
  return true
};
//腰宽
let waistLineW = function (x) {
    if(x<10 || x>60){
      return false
    }
    return true
};
//腰高
let waistlineHC = function (x) {
  if(x<50||x>180){
    return false
  }
  return true
};
//臀围
let hiplineWC = function (x) {
    if(x<25 || x>60){
        return false
    }
  return true
};
//臀宽
let hipWC = function (x) {
  if(x<25||x>60){
    return false
  }
  return true
};
//臀高
let hipHC = function (x) {
  if(x<40||x>150){
    return false
  }
  return true
};
//胸宽
let waistWC = function (x) {
  if(x<25 || x>60){
    return false
  }
  return true
};
//胸高
let waistHC = function (x) {
  if(x<80||x>180){
    return false
  }
  return true
};

export {
  ageC,    //0~150
  heightC,    //110~230
  weightC,    //5~160
  shoulderWC,   //25~60
  shoulderHC,   //80~180
  waistlineWC,    //15~60
  waistLineW,   //10~60
  waistlineHC,    //50~180
  hiplineWC,    //25~60
  hipWC,    //25~60
  hipHC,    //40~150
  waistWC,  //25~60
  waistHC   //80~180
}
