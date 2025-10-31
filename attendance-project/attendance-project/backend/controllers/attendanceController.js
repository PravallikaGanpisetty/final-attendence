import Attendance from '../models/Attendance.js';

export const createAttendance = async (req, res) => {
  const { date, className, studentIds } = req.body;
  const records = (studentIds || []).map(id => ({ student: id, present: false }));
  const att = await Attendance.create({ date, className, records, createdBy: req.user._id });
  res.status(201).json(att);
};

export const markAttendance = async (req, res) => {
  const { attendanceId } = req.params;
  const { records } = req.body;
  const att = await Attendance.findById(attendanceId);
  if (!att) return res.status(404).json({ message: 'Not found' });
  att.records = att.records.map(r => {
    const u = records.find(x => String(x.student) === String(r.student));
    if (u) r.present = !!u.present;
    return r;
  });
  await att.save();
  res.json(att);
};

export const getAttendanceByClass = async (req, res) => {
  const { className } = req.params;
  const list = await Attendance.find({ className }).populate('records.student', 'name email');
  res.json(list);
};

export const getAttendanceById = async (req, res) => {
  const att = await Attendance.findById(req.params.id).populate('records.student', 'name email');
  if (!att) return res.status(404).json({ message: 'Not found' });
  res.json(att);
};
