const { isArray } = require('./src/is/IsArray')
const { isString } = require('./src/is/IsString')
const { isNumber } = require('./src/is/IsNumber')
const { isObject } = require('./src/is/IsObject')
const { isUndefined } = require('./src/is/isUndefined')
const { isNull } = require('./src/is/IsNull')
const { isDate } = require('./src/is/IsDate')
const { isFunction } = require('./src/is/IsFunction')
const { isBoolean } = require('./src/is/IsBoolean')
const { isRegExp } = require('./src/is/IsRegExp')

module.exports = {
  isArray, isString, isNumber, isObject, isUndefined, isNull, isDate, isFunction,
  isBoolean, isRegExp
}
