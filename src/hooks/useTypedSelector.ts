import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TypeRootState } from '../store/store';

// eslint-disable-next-line import/prefer-default-export
export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
