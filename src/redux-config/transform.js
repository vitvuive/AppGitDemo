/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
// code get from eatsywaiter'
import R from 'ramda';
import Immutable from 'seamless-immutable';

const createTransformer = () => {
  const isImmutable = R.has('asMutable');
  const convertToJs = (state) => state.asMutable({ deep: true, });
  const fromImmutable = R.when(isImmutable, convertToJs);
  const toImmutable = (raw) => Immutable(raw);
  return {
    in: fromImmutable,
    out: (state) => {
      state.mergeDeep = R.identity;
      return toImmutable(state);
    },
  };
};

export default createTransformer();
