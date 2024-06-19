import { Request, Response } from 'express';
import Top from '../models/Top';

export const getTops = async (req: Request, res: Response) => {
  try {
    const tops = await Top.find();
    res.json(tops);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const getTopById = async (req: Request, res: Response) => {
  try {
    const top = await Top.findById(req.params.id);
    if (!top) {
      return res.status(404).json({ message: 'Top not found' });
    }
    res.json(top);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const createTop = async (req: Request, res: Response) => {
  const { name, poster, price, description, size } = req.body;
  const top = new Top({
    name,
    poster,
    price,
    description,
    size,
  });

  try {
    const newTop = await top.save();
    res.status(201).json(newTop);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};
