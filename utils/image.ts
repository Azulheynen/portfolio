import mongoose, { Document, Schema } from "mongoose";

export interface IImage extends Document {
  filePath: string;
  originalName: string;
  uploadedAt: Date;
}

const ImageSchema: Schema = new Schema({
  filePath: { type: String, required: true },
  originalName: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IImage>("Image", ImageSchema);
