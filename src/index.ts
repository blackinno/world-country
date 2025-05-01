import { Country } from './types'
import countries from './data/index'

/**
 * Returns an array of all countries with their details
 * @returns {Country[]} Array of all countries
 */
export const all = (): Country[] => countries

/**
 * Finds a country by its name
 * @param {string} name - The name of the country to find
 * @returns {Country | undefined} The country object if found, undefined otherwise
 */
export const findByCountry = (name: string): Country | undefined => countries.find(country => country.name === name)

/**
 * Finds a country by its ISO code
 * @param {string} code - The ISO code of the country to find
 * @returns {Country | undefined} The country object if found, undefined otherwise
 */
export const findByCode = (code: string): Country | undefined => countries.find(country => country.code === code)

/**
 * Finds a country by its dial code
 * @param {string} dial - The dial code of the country to find
 * @returns {Country | undefined} The country object if found, undefined otherwise
 */
export const findByDialCode = (dial: string): Country | undefined =>
  countries.find(country => country.dial_code === dial)

/**
 * Finds multiple countries by their ISO codes
 * @param {string[]} codes - Array of ISO codes to find
 * @returns {Country[]} Array of countries matching the provided codes
 */
export const findByMultipleCode = (codes: string[]): Country[] =>
  countries.filter(country => codes.includes(country.code))

/**
 * Finds multiple countries by their dial codes
 * @param {string[]} dials - Array of dial codes to find
 * @returns {Country[]} Array of countries matching the provided dial codes
 */
export const findByMultipleDialCode = (dials: string[]): Country[] =>
  countries.filter(country => dials.includes(country.dial_code))

/**
 * Finds multiple countries by their names
 * @param {string[]} names - Array of country names to find
 * @returns {Country[]} Array of countries matching the provided names
 */
export const findByMultipleName = (names: string[]): Country[] =>
  countries.filter(country => names.includes(country.name))
