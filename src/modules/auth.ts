import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const comparePasswords = (clientPassword, hashedPassword) => {
  // Compare the password the user sent to the password that was saved on the server as a hash
  return bcrypt.compare(clientPassword, hashedPassword);
};

// Hash user password
export const hashPassword = (password) => {
  const salt = 5;
  return bcrypt.hash(password, salt);
};

// Create JWT
export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  // Check if the client sent token
  if (!bearer) {
    res.status(401);
    res.send('Not authorized! 🤨');
    return;
  }

  // Desturcutre the token from the bearer array(bearer.split(' ')) we created
  const [, token] = bearer.split(' ');
  if (!token) {
    console.log('here');
    res.status(401);
    res.send('Not authorized! 🤨');
    return;
  }

  // Check if the client sent a valid token
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    console.log(payload.username);
    next();
    return;
  } catch (err) {
    console.error(err);
    res.status(401);
    res.send('Not authorized! 🤨');
    return;
  }
};
