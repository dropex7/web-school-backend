const pool = require('./pool')

const queries = {
  getUsers: async () => {
    const res = await pool.query('SELECT * FROM public.users')
    return res.rows
  },
  getCourses: async () => {
    const res = await pool.query('SELECT * FROM public.courses')
    return res.rows
  },
  getFullCourses: async () => {
    const res = await pool.query(`
      SELECT crs.courseID, crs.name, lns.lessonID, lns.lesson_name,
      lns.video_name, lns.preview_link, lns.video_link
      FROM public.courses as crs 
      RIGHT JOIN public.lessons as lns 
      ON lns.courseID = crs.courseID`)
    return res.rows
  },
  getTasksByLessonID: async (lessonID) => {
    const res = await pool.query(`
      SELECT lns.lessonID, lns.lesson_name, tsk.taskID, tsk.question, tsk.right_answer, 
      tsk.wrong_answer_1, tsk.wrong_answer_2, tsk.wrong_answer_3
      FROM public.lessons as lns
      RIGHT JOIN public.tasks as tsk
      ON tsk.lessonID = lns.lessonID
      WHERE lns.lessonID = ${lessonID}`)
    return res.rows
  },
}

module.exports = queries