/**
* 主模块文件
*/
import 'babel-polyfill';
import semver from 'semver';

/**
 * 入口函数
 */
function main(...args) {
  process.stdout.write('Hello world!\n');
  let ver = '1.3.2';
  console.log(semver.inc(ver, 'patch'));
  console.log(semver.inc(ver, 'minor'));
  console.log(semver.inc(ver, 'major'));

}

/**
 * 缺省执行main函数
 */
main(...process.argv.slice(2));
