const c = require("config");
const { Router } = require("express");
const queries = require("../sql/queries");

const router = Router();

router.get("/courses", [], async (req, res) => {
  try {
    const courses = await queries.getFullCourses();
    return res.status(200).json({ courses });
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Error while getting courses.", errors: e.message });
  }
});

router.get("/tasks/:lessonid", [], async (req, res) => {
  try {
    const tasks = await queries.getTasksByLessonID(req.params.lessonid);
    return res.status(200).json({ tasks });
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Error while getting tasks.", errors: e.message });
  }
});

module.exports = router;
