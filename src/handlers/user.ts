import { create } from 'domain';
import prisma from '../db';
import { hashPassword, createJWT, comparePasswords } from '../modules/auth';

// Create user
export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });
  const token = createJWT(user);
  res.json({ token });
};

// Sign in user
export const signinUser = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401).json({ message: 'Invalid credentials 🤨' });
    return;
  }
  const token = createJWT(user);
  res.json({ token });
};
