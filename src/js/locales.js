import locale from 'locale-codes';

//Languages shown in settings
export const customLocales = [
  locale.getByTag('en'),
  // locale.getByTag('ne'),
  //Add for non iso languages - copied some from wikipedia, not sure if its correct.
  {name:"Thai", local:"ไทย", location: "", tag: "thai"},
  {name:"Thai Romanized", local:"Thai Romanized", location: "", tag: "thai-rom"},
  {name:"Tibetan", local:"བོད་སྐད་", location: "", tag: "bo"},
  {name:"Central Tibetan", local:"དབུས་སྐད", location: "", tag: "ct"},
  {name:"Central Tibetan Romanized", local:"Central Tibetan", location: "", tag: "ctr"},
  {name:"Amdo Tibetan", local:"ཨ་མདོ་སྐད", location: "", tag: "at"},
  {name:"Amdo Tibetan Romanized", local:"Amdo Tibetan", location: "", tag: "atr"},
];


export function getLocale(code) {
  var locale = customLocales.find( ({tag}) => tag === code );
  if (locale === 'undefined') {
    locale = locale.getByTag(code);
  }
  return locale;
}
