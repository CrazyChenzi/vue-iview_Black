export default function (str,name) {
    if (str===null||typeof str === 'undefined'||str === '') {
      return undefined
    } else {
      let oDate = new Date(str),
      oYear = oDate.getFullYear(),
      oMonth = oDate.getMonth() + 1,
      oDay = oDate.getDate(),
      oTime = oYear + '-' + oMonth + '-' + oDay
      return oTime
    }
  }
