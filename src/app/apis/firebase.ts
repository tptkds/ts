import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const createUserOnFireBase = async (
  email: FormDataEntryValue,
  password: FormDataEntryValue
) => {
  const res = await createUserWithEmailAndPassword(
    auth,
    email.toString(),
    password.toString()
  )
    .then((userCredential) => userCredential.user)
    .catch((error) => error);

  return res;
};
