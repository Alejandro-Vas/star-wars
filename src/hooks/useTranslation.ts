import { useTypedSelector } from 'hooks/useTypedSelector';

const useTranslation = () => {
  const { language } = useTypedSelector((state) => state.translation);
};

export default useTranslation;
