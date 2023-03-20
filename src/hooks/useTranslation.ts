import { useTypedSelector } from 'hooks/useTypedSelector';

const translations = {
  english: {
    header: 'Peoples for you to choose your favorite',
    eyeColor: 'color eye',
    language: 'language',
  },
  wookiee: {
    header: 'Rcwochuanaoc ochuan uanaoc',
    eyeColor: 'Aochuana uanao',
    language: 'rrrawhra',
  },
} as const;

type ITranslation = keyof typeof translations.english | keyof typeof translations.wookiee

const useTranslation = (type: ITranslation[]) => {
  const { language } = useTypedSelector((state) => state.translation);

  const translation = translations[language];

  return type.map((el) => translation[el]);
};

export default useTranslation;
