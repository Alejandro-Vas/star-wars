import { translations } from 'constants/index';
import { useTypedSelector } from 'hooks/useTypedSelector';

type ITranslation = keyof typeof translations.english | keyof typeof translations.wookiee

const useTranslation = (type: ITranslation[]) => {
  const { language } = useTypedSelector((state) => state.translation);

  const translation = translations[language];

  return type.map((el) => translation[el]);
};

export default useTranslation;
