import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import localStorageService from 'libs/localStorageService';
import { SESSION_ID } from 'constant';
import sendApi from '../apis/sendApi';

const userHook = () => {
  const [myInfo, setMyInfo] = useState({});
  const history = useHistory();

  useEffect(() => {
    const getMyInfo = async () => {
      try {
        if (localStorageService.get(SESSION_ID)) {
          const { data } = await sendApi.getMyProfile();
          setMyInfo(data.data);
        }
      } catch (error) {
        if (error.response.status === 401) {
          localStorageService.delete('authToken');
          history.push('/Main');
        } else {
          alert(error.response.data.message);
        }
      }
    };

    getMyInfo();
  }, []);

  return myInfo;
};

export default userHook;
