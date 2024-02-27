export const studentRegisterValues = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    course: '',
    class: '',
    trainingMedium: 'Virtual',
    connection: '',
    comment: '',
  };
  return initialValues;
};

export const addAdminValues = () => {
  const initialValues = {
    name: '',
    email: '',
    role: '',
    skill: '',
    password: '',
    confirmPassword: '',
  };
  return initialValues;
};

export const adminLoginValues = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  return initialValues;
};

export const addPostValues = () => {
  const initialValues = {
    title: '',
    category: '',
    img: '',
    content: '',
  };
  return initialValues;
};

export const addReviewValues = () => {
  const initialValues = {
    name: '',
    review: '',
    rating: '',
  };
  return initialValues;
};
