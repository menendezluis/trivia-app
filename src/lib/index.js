/**
 * @param {string[]} array
 * @returns {Object}
 * @example
 * // returns { a: 'a', b: 'b', c: 'c'}
 * stringArrayToObject(['a', 'b', 'c'])
 */
export const stringArrayToObject = array =>
  array.reduce((object, string) => ({ ...object, [string]: string }), {});
