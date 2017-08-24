/**
 * Created by aresn on 16/7/4.
 */
/**
* 千位分隔符
* */
export default function (value) {
    switch(value){
        case 1:
            return '中文';
        case 2:
            return '英文';
        default:
            return ''
    }
    // return value.toString().replace(/\B(?=(\d{3})+$)/g,',');
}