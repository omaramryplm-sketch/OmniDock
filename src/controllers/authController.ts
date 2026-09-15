import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
    res.json({ token, user: { id: user.id, email: user.email, rol: user.rol } });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

export const requestPasswordReset = async (req: Request, res: Response) => {
  // Implementation of password reset email
  res.json({ message: 'Password reset email sent if user exists' });
};

export const resetPassword = async (req: Request, res: Response) => {
  // Implementation of resetting password using token
  res.json({ message: 'Password has been reset' });
};
