import moment from 'moment'

moment.locale('zh-cn');

/**
 * 时间格式化函数
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *
 * @param {Date||number} date Date对象或者时间戳
 * @param {string} fmt 格式化字符串
 *        ("YYYY-MM-DD HH:mm:ss") ==> 2006-07-02 08:09:04
 * @returns {string} 格式化后的字符串
 */
export function format(date, fmt = 'YYYY-MM-DD HH:mm:ss') {
  if (!date) return '';
  let d = moment(date).format(fmt);
  return ~d.indexOf('Invalid') ? '' : d;
}