import axiosInstance from './axiosInstance.js';


export const userLogin = async (email, password) => {
    try {
      const response = await axiosInstance.post('auth/login', {
        credentials: {
          emailid: email,
          password: password
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };


  export const userSignUp = async (email, password, username, mobileNo) => {
    try {
      const response = await axiosInstance.post('user-profile/register', {
        username: username,
        phoneno: mobileNo,
        emailid: email,
        password : password
      });
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };