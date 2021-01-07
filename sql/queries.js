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
      SELECT crs.course_id, crs.name, lns.lesson_id, lns.lesson_name,
      lns.video_name, lns.preview_link, lns.video_link
      FROM public.courses as crs 
      RIGHT JOIN public.lessons as lns 
      ON lns.course_id = crs.course_id`)
    return res.rows
  },
  getTasksByLessonID: async (lessonID) => {
    const res = await pool.query(`
      SELECT lns.lesson_id, lns.lesson_name, tsk.task_id, tsk.question, tsk.right_answer, 
      tsk.wrong_answer_1, tsk.wrong_answer_2, tsk.wrong_answer_3
      FROM public.lessons as lns
      RIGHT JOIN public.tasks as tsk
      ON tsk.lesson_id = lns.lesson_id
      WHERE lns.lesson_id = ${lessonID}`)
    return res.rows
  },
  getProgress: async (userID) => {
    const res = await pool.query(`
      SELECT pgs.user_id, pgs.finished_lessons
      FROM public.progresses as pgs
      WHERE pgs.user_id = ${userID}`)
    return res.rows
  },
  updateProgress: async (userID, newLessonID) => {
    const pgs = await queries.getProgress(userID)
    if (pgs.length) {
      const finished = pgs[0].finished_lessons
      if (!finished.includes(newLessonID)) {
        const res = await pool.query(`
          UPDATE public.progresses
          SET finished_lessons = '{${finished.concat(newLessonID).join(',')}}'
          WHERE user_id = ${userID}`)
        return res
      }
      return
    }
    const res = await pool.query(`
      INSERT INTO public.progresses (user_id, finished_lessons)
      VALUES (${userID}, '{${newLessonID}}')`)
    return res
  }
}

module.exports = queries