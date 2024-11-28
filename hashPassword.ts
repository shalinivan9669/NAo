// hashPassword.ts
import bcrypt from 'bcrypt';

const password = 'NAO_trud_Med'; // Замените на желаемый пароль

const hashPassword = async (plainPassword: string) => {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(plainPassword, saltRounds);
  console.log(`Хеш пароля для "${plainPassword}":\n${hashed}`);
};

hashPassword(password);
