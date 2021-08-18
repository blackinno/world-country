const countries = require('./data')

const all = () => countries

/**
 * @param name string
 */
const findByCountry = name => countries.find(country => country.name === name)

/**
 * @param code string
 */
const findByCode = code => countries.find(country => country.code === code)

/**
 * @param dial string
 */
const findByDialCode = dial => countries.find(country => country.dial_code === dial)

module.exports = {
  all,
  findByCountry,
  findByCode,
  findByDialCode
}
