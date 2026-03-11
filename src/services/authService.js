import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import * as userRepository from "../repositories/userRepository.js";

export async function register(email, password) {

  const existingUser = await userRepository.findByEmail(email);

  if (existingUser) {
    throw new Error("El usuario ya existe");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userRepository.createUser(email, hashedPassword);

  return {
    id: newUser.id,
    email: newUser.email
  };
}

export async function login(email, password) {

  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw new Error("Credenciales inválidas");
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new Error("Credenciales inválidas");
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return token;
}