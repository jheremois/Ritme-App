import I18n, {getLanguages} from 'react-native-i18n';

import es from './es';
import en from './en';
I18n.fallbacks = true;

I18n.translations = {
  en,
  es
};

getLanguages()
  .then((languages: any) => {
    // I18nManager.forceRTL(true);
    //console.log('getLanguages', languages); // ['en-US', 'en']
  })
  .catch((error: any) => {
    //console.log('getLanguages error : ', error);
  });
export default I18n;