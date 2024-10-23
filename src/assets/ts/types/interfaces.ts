interface Country {
  countryCode: string;
  name: string;
}

interface CountryHoliday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  global: boolean;
  counties: any;
  launchYear: number;
  types: [string];
}

export { Country, CountryHoliday };
