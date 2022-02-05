import { AuthContext } from 'context/auth_context';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { parseLoginToken } from 'utils/auth';

// Used as a middleware to logged in user and specific role only
// Should be attached to main page layout, such as Login, Register, etc.
// This guard use "isLogin" value in AuthContext state
const useRoleGuard = (preferedRole, redirectUrl = '/login') => {
  const { isLogin } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (isLogin) {
      const role = parseLoginToken().role;

      if (role !== preferedRole) {
        history.replace(redirectUrl);
      }
    } else {
      history.replace(redirectUrl);
    }
  }, [history, isLogin, preferedRole, redirectUrl])
};

export default useRoleGuard;