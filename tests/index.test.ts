import {
  all,
  findByCountry,
  findByCode,
  findByDialCode,
  findByMultipleCode,
  findByMultipleDialCode,
  findByMultipleName,
} from '../src'

describe('world-country', () => {
  describe('all', () => {
    it('should return all countries', () => {
      const countries = all()
      expect(countries).toBeDefined()
      expect(Array.isArray(countries)).toBe(true)
      expect(countries.length).toBeGreaterThan(0)
    })
  })

  describe('findByCountry', () => {
    it('should find country by name', () => {
      const usa = findByCountry('United States')
      expect(usa).toEqual({
        name: 'United States',
        dial_code: '+1',
        code: 'US',
      })
    })

    it('should return undefined for non-existent country', () => {
      const result = findByCountry('NonExistentCountry')
      expect(result).toBeUndefined()
    })
  })

  describe('findByCode', () => {
    it('should find country by ISO code', () => {
      const japan = findByCode('JP')
      expect(japan).toEqual({
        name: 'Japan',
        dial_code: '+81',
        code: 'JP',
      })
    })

    it('should return undefined for non-existent code', () => {
      const result = findByCode('XX')
      expect(result).toBeUndefined()
    })
  })

  describe('findByDialCode', () => {
    it('should find a country with the given dial code', () => {
      const country = findByDialCode('+44')
      expect(country).toBeDefined()
      expect(country?.dial_code).toBe('+44')
      // Note: We don't check specific country as +44 is shared by multiple countries
    })

    it('should return undefined for non-existent dial code', () => {
      const result = findByDialCode('+999')
      expect(result).toBeUndefined()
    })
  })

  describe('findByMultipleCode', () => {
    it('should find countries by multiple ISO codes', () => {
      const countries = findByMultipleCode(['US', 'JP'])
      expect(countries).toHaveLength(2)
      const codes = countries.map(c => c.code).sort()
      expect(codes).toEqual(['JP', 'US'])
    })

    it('should return empty array for non-existent codes', () => {
      const result = findByMultipleCode(['XX', 'YY'])
      expect(result).toHaveLength(0)
    })
  })

  describe('findByMultipleDialCode', () => {
    it('should find countries by multiple dial codes', () => {
      const countries = findByMultipleDialCode(['+1', '+81'])
      expect(countries.length).toBeGreaterThan(0)
      const dialCodes = [...new Set(countries.map(c => c.dial_code))].sort()
      expect(dialCodes).toEqual(['+1', '+81'])
    })

    it('should return empty array for non-existent dial codes', () => {
      const result = findByMultipleDialCode(['+999', '+888'])
      expect(result).toHaveLength(0)
    })
  })

  describe('findByMultipleName', () => {
    it('should find countries by multiple names', () => {
      const countries = findByMultipleName(['United States', 'Japan'])
      expect(countries).toHaveLength(2)
      const names = countries.map(c => c.name).sort()
      expect(names).toEqual(['Japan', 'United States'])
    })

    it('should return empty array for non-existent names', () => {
      const result = findByMultipleName(['NonExistentCountry1', 'NonExistentCountry2'])
      expect(result).toHaveLength(0)
    })
  })
})
