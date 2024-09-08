type UserGeneric = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserGeneric>) {
  // Оновлення користувача
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
