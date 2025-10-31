import mongoose from 'mongoose';

const RecordSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  present: { type: Boolean, default: false }
});

const AttendanceSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  className: { type: String, required: true },
  records: [RecordSchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.model('Attendance', AttendanceSchema);
