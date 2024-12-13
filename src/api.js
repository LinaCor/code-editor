const mockFetch = (userCode) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        resolve({
          status: 'success',
          output: 'Hello, world!\n',
        });
      } else {
        resolve({
          status: 'error',
          error: 'SyntaxError: Unexpected token',
        });
      }
    }, 2000);
  });
};


export const checkCode = async (value, language) => {
  const languageToLow = language.toLowerCase();

  const userCode = {
    language: languageToLow,
    code: value,
  };

  try {
    const json = await mockFetch(userCode);
    return json;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
};

