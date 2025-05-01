# world-country
[![Test](https://github.com/blackinno/world-country/actions/workflows/test.yml/badge.svg)](https://github.com/blackinno/world-country/actions/workflows/test.yml/badge.svg)
[![Linter](https://github.com/blackinno/world-country/actions/workflows/linter.yml/badge.svg)](https://github.com/blackinno/world-country/actions/workflows/linter.yml/badge.svg)
[![Security](https://github.com/blackinno/world-country/actions/workflows/security.yml/badge.svg)](https://github.com/blackinno/world-country/actions/workflows/security.yml/badge.svg)
[![codecov](https://codecov.io/gh/blackinno/world-country/graph/badge.svg?token=HGJS8SS5OP)](https://codecov.io/gh/blackinno/world-country)

A TypeScript library for working with country data including dial codes, country names, and ISO codes. This library provides a simple and efficient way to access and search country information.

## Features

- Written in TypeScript with full type definitions
- Zero dependencies
- Comprehensive country data including:
  - Country names
  - International dial codes
  - ISO country codes
- Multiple search methods
- 100% test coverage

## Installation

```bash
npm install world-country
```

## Usage

### Basic Usage

```typescript
import { all, findByCountry, findByCode, findByDialCode } from 'world-country';

// Get all countries
const countries = all();

// Find a specific country by name
const usa = findByCountry('United States');
console.log(usa);
// Output: { name: 'United States', dial_code: '+1', code: 'US' }

// Find by ISO code
const japan = findByCode('JP');
console.log(japan);
// Output: { name: 'Japan', dial_code: '+81', code: 'JP' }

// Find by dial code
const uk = findByDialCode('+44');
console.log(uk);
// Note: Some dial codes may be shared by multiple countries
```

### Multiple Search Methods

```typescript
import { findByMultipleCode, findByMultipleDialCode, findByMultipleName } from 'world-country';

// Find multiple countries by ISO codes
const asianCountries = findByMultipleCode(['JP', 'CN', 'KR']);

// Find countries by dial codes
const northAmerica = findByMultipleDialCode(['+1']);

// Find countries by names
const europeanCountries = findByMultipleName(['France', 'Germany', 'Italy']);
```

## API Reference

### Single Search Functions

#### `all(): Country[]`
Returns an array of all available countries.

#### `findByCountry(name: string): Country | undefined`
- **Parameters**: `name` - The full name of the country
- **Returns**: Country object if found, undefined otherwise

#### `findByCode(code: string): Country | undefined`
- **Parameters**: `code` - The ISO country code (e.g., 'US', 'GB')
- **Returns**: Country object if found, undefined otherwise

#### `findByDialCode(dial: string): Country | undefined`
- **Parameters**: `dial` - The international dial code including '+' (e.g., '+1', '+44')
- **Returns**: Country object if found, undefined otherwise

### Multiple Search Functions

#### `findByMultipleCode(codes: string[]): Country[]`
- **Parameters**: `codes` - Array of ISO country codes
- **Returns**: Array of matching countries

#### `findByMultipleDialCode(dials: string[]): Country[]`
- **Parameters**: `dials` - Array of international dial codes
- **Returns**: Array of matching countries

#### `findByMultipleName(names: string[]): Country[]`
- **Parameters**: `names` - Array of country names
- **Returns**: Array of matching countries

## Types

```typescript
interface Country {
  name: string;      // Full country name
  code: string;      // ISO country code
  dial_code: string; // International dial code with '+'
}
```

## Data Coverage

The library includes data for over 200 countries and territories, including:
- All UN member states
- Major territories and dependencies
- Special administrative regions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Thotsaphon Ben Ruthamnong

## Support

If you find any issues or have questions, please file an issue on the GitHub repository.
