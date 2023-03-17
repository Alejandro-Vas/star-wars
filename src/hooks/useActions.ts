import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterActions } from 'store/slices/filter';

const AllActions = {
  ...filterActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;
