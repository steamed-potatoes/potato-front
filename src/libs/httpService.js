export default {
  authorization: (token) => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  },
};
