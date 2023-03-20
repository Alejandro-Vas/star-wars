import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterActions } from 'store/slices/filter';
import { translationActions } from 'store/slices/translation';

const AllActions = {
  ...filterActions,
  ...translationActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;
