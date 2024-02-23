const siteNameMap = {
  'https://sellercentral.amazon.com': 'US',
  'https://sellercentral-japan.amazon.com': 'JP',
  'https://sellercentral.amazon.co.jp': 'JP',
  // 'https://sellercentral-japan.amazon.com/gp/homepage.html/ref=xx_home_logo_xx': 'JP',
  'https://sellercentral.amazon.ca': 'US',
  'https://sellercentral.amazon.de': 'UK',
  'https://sellercentral.amazon.com.au': 'AU',
  'https://sellercentral-europe.amazon.com': 'UK',
  'https://sellercentral.amazon.in': 'IN',
  'https://sellercentral.amazon.ae': 'AE',
  'https://sellercentral.amazon.co.uk': 'UK',
  'https://sellercentral.amazon.sg': 'SG',
  'https://sellercentral.amazon.fr': 'UK',
  'https://sellercentral.amazon.it': 'UK',
  'https://sellercentral.amazon.es': 'UK',
  'https://sellercentral.amazon.nl': 'UK',
  'https://sellercentral.amazon.com.mx': 'US',
  'https://sellercentral.amazon.com.br': 'US',
  'https://sellercentral.amazon.se': 'UK',
  'https://sellercentral.amazon.sa': 'AE',
  'https://sellercentral.amazon.pl': 'UK',
  'https://sellercentral.amazon.tr': 'UK',
  'https://sellercentral.amazon.com.be': 'UK',
}

const siteToUrlMap = {
  US: [
    'https://sellercentral.amazon.com',
    'https://sellercentral.amazon.ca',
    'https://sellercentral.amazon.com.mx',
    'https://sellercentral.amazon.com.br',
  ],
  UK: [
    'https://sellercentral.amazon.de',
    'https://sellercentral-europe.amazon.com',
    'https://sellercentral.amazon.co.uk',
    'https://sellercentral.amazon.fr',
    'https://sellercentral.amazon.it',
    'https://sellercentral.amazon.es',
    'https://sellercentral.amazon.nl',
    'https://sellercentral.amazon.se',
    'https://sellercentral.amazon.pl',
    'https://sellercentral.amazon.ae',
    'https://sellercentral.amazon.sa',
    'https://sellercentral.amazon.tr',
    'https://sellercentral.amazon.com.be',
  ],
  JP: [
    'https://sellercentral-japan.amazon.com/gp/homepage.html/ref=xx_home_logo_xx',
    'https://sellercentral-japan.amazon.com',
    'https://sellercentral.amazon.co.jp'
  ],
  AU: [
    'https://sellercentral.amazon.com.au',
  ],
  IN: ['https://sellercentral.amazon.in'],
  SG: ['https://sellercentral.amazon.sg'],
}

const marketplaceObj = {
  BR: 'A2Q3Y263D00KWC',
  CA: 'A2EUQ1WTGCTBG2',
  MX: 'A1AM78C64UM0Y8',
  US: 'ATVPDKIKX0DER',
  AE: 'A2VIGQ35RCS4UG',
  DE: 'A1PA6795UKMFR9',
  EG: 'ARBP9OOSHTCHU',
  ES: 'A1RKKUPIHCS9HS',
  FR: 'A13V1IB3VIYZZH',
  UK: 'A1F83G8C2ARO7P',
  GB: 'A1F83G8C2ARO7P',
  IN: 'A21TJRUUN4KGV',
  IT: 'APJ6JRA9NG5V4',
  NL: 'A1805IZSGTT6HS',
  SA: 'A17E79C6D8DWNP',
  TR: 'A33AVAJ2PDY3EV',
  SG: 'A19VAU5U5O7RUS',
  AU: 'A39IBJ37TRP1C6',
  JP: 'A1VC38T7YXB528',
  SE: 'A2NODRKZP88ZB9',
  PL: 'A1C3SOZRARQ6R3',
  BE: 'AMEN7PMS3EDWL',
}
const marketplaceUrlMap = {
  'A2Q3Y263D00KWC': 'https://sellercentral.amazon.com.br',
  'A2EUQ1WTGCTBG2': 'https://sellercentral.amazon.ca',
  'A1AM78C64UM0Y8': 'https://sellercentral.amazon.com.mx',
  'ATVPDKIKX0DER': 'https://sellercentral.amazon.com',
  'A2VIGQ35RCS4UG': 'https://sellercentral.amazon.ae',
  'A1PA6795UKMFR9': 'https://sellercentral.amazon.de',
  'ARBP9OOSHTCHU': 'https://sellercentral.amazon.eg',
  'A1RKKUPIHCS9HS': 'https://sellercentral.amazon.es',
  'A13V1IB3VIYZZH': 'https://sellercentral.amazon.fr',
  'A1F83G8C2ARO7P': 'https://sellercentral.amazon.co.uk',
  'A21TJRUUN4KGV': 'https://sellercentral.amazon.in',
  'APJ6JRA9NG5V4': 'https://sellercentral.amazon.it',
  'A1805IZSGTT6HS': 'https://sellercentral.amazon.nl',
  'A17E79C6D8DWNP': 'https://sellercentral.amazon.sa',
  'A33AVAJ2PDY3EV': 'https://sellercentral.amazon.tr',
  'A19VAU5U5O7RUS': 'https://sellercentral.amazon.sg',
  'A39IBJ37TRP1C6': 'https://sellercentral.amazon.com.au',
  'A1VC38T7YXB528': 'https://sellercentral-japan.amazon.com',
  // 'A1VC38T7YXB528Copy': 'https://sellercentral-japan.amazon.com/gp/homepage.html/ref=xx_home_logo_xx',
  'A2NODRKZP88ZB9': 'https://sellercentral.amazon.se',
  'A1C3SOZRARQ6R3': 'https://sellercentral.amazon.pl',
  'AMEN7PMS3EDWL': 'https://sellercentral.amazon.com.be',
}
const codeToSiteMap = {
  A2Q3Y263D00KWC: 'BR',
  A2EUQ1WTGCTBG2: 'CA',
  A1AM78C64UM0Y8: 'MX',
  ATVPDKIKX0DER: 'US',
  A2VIGQ35RCS4UG: 'AE',
  A1PA6795UKMFR9: 'DE',
  ARBP9OOSHTCHU: 'EG',
  A1RKKUPIHCS9HS: 'ES',
  A13V1IB3VIYZZH: 'FR',
  A1F83G8C2ARO7P: 'UK',
  A21TJRUUN4KGV: 'IN',
  APJ6JRA9NG5V4: 'IT',
  A1805IZSGTT6HS: 'NL',
  A17E79C6D8DWNP: 'SA',
  A33AVAJ2PDY3EV: 'TR',
  A19VAU5U5O7RUS: 'SG',
  A39IBJ37TRP1C6: 'AU',
  A1VC38T7YXB528: 'JP',
  A2NODRKZP88ZB9: 'SE',
  A1C3SOZRARQ6R3: 'PL',
  AMEN7PMS3EDWL: 'BE',
}
const countryMap = { US: "北美站", UK: "欧洲站", JP: "日本站", AU: "澳洲站", IN: "印度站", AE: "阿联酋", SA: "沙特阿拉伯", SG: "新加坡" }
const countryIdsMap = {
  'ATVPDKIKX0DER': 'US',
  'A2EUQ1WTGCTBG2': 'US',
  'A1AM78C64UM0Y8': 'US',
  'A2Q3Y263D00KWC': 'US',
  'A1F83G8C2ARO7P': "UK",
  'APJ6JRA9NG5V4': "UK",
  'A33AVAJ2PDY3EV': "UK",
  'A1805IZSGTT6HS': "UK",
  'A1PA6795UKMFR9': "UK",
  'A2NODRKZP88ZB9': "UK",
  'A1C3SOZRARQ6R3': "UK",
  'A13V1IB3VIYZZH': "UK",
  'AMEN7PMS3EDWL': 'UK',
  'ARBP9OOSHTCHU': "UK",
  'A1RKKUPIHCS9HS': "UK",
  'A1VC38T7YXB528': "JP",
  'A39IBJ37TRP1C6': "AU",
  'A21TJRUUN4KGV': "IN",
  'A2VIGQ35RCS4UG': "AE",
  'A17E79C6D8DWNP': "SA",
  'A19VAU5U5O7RUS': "SG",
}

const marketUrlcookieMap = { US: "https://www.amazon.com", CA: "https://www.amazon.ca", MX: "https://www.amazon.com.mx", BR: "https://www.amazon.com.br", UK: "https://www.amazon.co.uk", DE: "https://www.amazon.de", ES: "https://www.amazon.es", IT: "https://www.amazon.it", FR: "https://www.amazon.fr", NL: "https://www.amazon.nl", SE: "https://www.amazon.se", IN: "https://www.amazon.in", AE: "https://www.amazon.ae", SA: "https://www.amazon.sa", PL: "https://www.amazon.pl", TR: "https://www.amazon.com.tr", BE: "https://www.amazon.com.be", SG: "https://www.amazon.sg", JP: "https://www.amazon.co.jp", AU: "https://www.amazon.com.au" }
export default {
  siteNameMap,
  siteToUrlMap,
  marketplaceObj,
  codeToSiteMap,
  countryMap,
  countryIdsMap,
  marketUrlcookieMap,
  marketplaceUrlMap
}