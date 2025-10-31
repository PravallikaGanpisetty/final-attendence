import express from 'express';
import { createAttendance, markAttendance, getAttendanceByClass, getAttendanceById } from '../controllers/attendanceController.js';
import { protect } from '../middleware/auth.js';
const router = express.Router();
router.post('/', protect, createAttendance);
router.put('/:attendanceId', protect, markAttendance);
router.get('/class/:className', protect, getAttendanceByClass);
router.get('/:id', protect, getAttendanceById);
export default router;
