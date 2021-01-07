const { Router } = require("express")
const queries = require("../sql/queries")

const router = Router()

router.get("/courses", [], async (req, res) => {
  try {
    const courses = await queries.getFullCourses()
    courses.map(course => {
      course.name = course.name.trim()
      course.lesson_name = course.lesson_name.trim()
      course.video_name = course.video_name.trim()
      course.preview_link = course.preview_link.trim()
      course.video_link = course.video_link.trim()
    })
    return res.status(200).json({ courses })
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Error while getting courses.", errors: e.message })
  }
})

router.get("/tasks/:lessonid", [], async (req, res) => {
  try {
    const tasks = await queries.getTasksByLessonID(req.params.lessonid);
    tasks.map(task => {
      task.lesson_name = task.lesson_name.trim()
      task.question = task.question.trim()
      task.right_answer = task.right_answer.trim()
      task.wrong_answer_1 = task.wrong_answer_1.trim()
      task.wrong_answer_2 = task.wrong_answer_2.trim()
      task.wrong_answer_3 = task.wrong_answer_3.trim()
    })
    return res.status(200).json({ tasks })
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Error while getting tasks.", errors: e.message })
  }
})

router.get("/progress/:userid", [], async (req, res) => {
  try {
    const progress = await queries.getProgress(req.params.userid)
    return res.status(200).json({ progress })
  } catch (e) {
    return res
      .status(500)
      .json({ message: `Get progress error: ${e.message}` })
  }
})

router.post("/progress/:userid", [], async (req, res) => {
  try {
    const setRes = await queries.updateProgress(req.params.userid, req.body.newLesson)
    return res.status.json({ message: 'Success' })
  } catch (e) {
    return res
      .status(500)
      .json({ message: `Post progress error: ${e.message}` })
  }
})

module.exports = router
