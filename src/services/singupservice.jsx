import axios from 'axios';


export const signUp = async (codeEmploye, email_user, password_user) => {
  try {
    const response = await axios.post("https://striking-reprieve-production.up.railway.app/api/users/register", null, {
      params: {
        employe_code: codeEmploye,
        email_user: email_user,
        password_user: password_user
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error; // Re-throw the error so it can be handled by the calling component
  }
};



