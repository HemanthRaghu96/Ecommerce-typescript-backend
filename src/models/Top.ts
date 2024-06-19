import { Schema, model } from 'mongoose';

interface ITop {
  name: string;
  poster: string[];
  price: number;
  description: string;
  size: string[];
}

const topSchema = new Schema<ITop>({
  name: { type: String, required: true },
  poster: { type: [String], required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  size: { type: [String], required: true },
});

const Top = model<ITop>('Top', topSchema);

export default Top;
