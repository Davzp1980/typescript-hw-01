type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form

type Params = Omit<Form, 'errors'>;

const p1: Params = {
  email: 'dsa',
  firstName: 'sdf',
  lastName: 'asd',
  phone: '123',
};

console.log(p1);
