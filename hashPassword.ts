// hashPassword.ts
import bcrypt from 'bcrypt';

const password = 'NAO_trud_Med';

const hashPassword = async (plainPassword: string) => {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(plainPassword, saltRounds);
  console.log(`Хеш пароля для "${plainPassword}":\n${hashed}`);
};

hashPassword(password);
