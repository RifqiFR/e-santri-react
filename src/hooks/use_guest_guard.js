import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { ADMIN_SANTRI, BENDAHARA, SUPER_ADMIN } from 'constants/roles';
import { parseLoginToken } from 'utils/auth';
import { AuthContext } from 'context/auth_context';

// Used as a middleware to allow guest or non logged in user only
// Should be attached to main page layout, such as AdminContainer, SuperAdminContainer, etc.
// This guard use "isLogin" value in AuthContext state
const useGuestGuard = () => {
  const { isLogin } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (isLogin) {
      const role = parseLoginToken().role;

      if (role === ADMIN_SANTRI) {
        history.replace('/admin');
      } else if (role === SUPER_ADMIN){
        history.replace('/super-admin/dashboard');
      } else if (role === BENDAHARA){
        history.replace('/bendahara/dashboard');
      }
    }
  }, [history, isLogin]);
};

export default useGuestGuard;