// Install dependencies: npm install express mongoose body-parser
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// ------------------ DB Connection ------------------
mongoose.connect("mongodb://127.0.0.1:27017/studentDB", {
 useNewUrlParser: true,
 useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Failed", err));
// ------------------ Model ------------------
const studentSchema = new mongoose.Schema({
 name: { type: String, required: true },
 rollNo: { type: String, unique: true, required: true },
 course: { type: String, required: true },
 year: { type: Number, required: true },
 email: { type: String, unique: true, required: true }
}, { timestamps: true });
const Student = mongoose.model("Student", studentSchema);
// ------------------ Controller ------------------
const studentController = {
 getAllStudents: async (req, res) => {
 try {
 const students = await Student.find();
 res.status(200).json(students);
 } catch (error) {
 res.status(500).json({ message: error.message });
 }
 },
addStudent: async (req, res) => {
 try {
 const student = new Student(req.body);
 await student.save();
 res.status(201).json(student);
 } catch (error) {
 res.status(400).json({ message: error.message });
 }
 },
 updateStudent: async (req, res) => {
 try {
 const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true
});
 res.status(200).json(student);
 } catch (error) {
 res.status(400).json({ message: error.message });
 }
 },
 deleteStudent: async (req, res) => {
 try {
 await Student.findByIdAndDelete(req.params.id);
 res.status(200).json({ message: "Student deleted successfully" });
 addStudent: async (req, res) => {
 try {
 const student = new Student(req.body);
 await student.save();
 res.status(201).json(student);
 } catch (error) {
 res.status(400).json({ message: error.message });
 }
 },
 updateStudent: async (req, res) => {
 try {
 const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true
});
 res.status(200).json(student);
 } catch (error) {
 res.status(400).json({ message: error.message });
 }
 },
 deleteStudent: async (req, res) => {
 try {
 await Student.findByIdAndDelete(req.params.id);
 res.status(200).json({ message: "Student deleted successfully" });