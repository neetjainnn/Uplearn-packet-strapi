function calculatePacketStats(data: any) {
  const levels = data.levels || [];

  let totalCourses = 0;
  let totalDurationMinutes = 0;
  let totalFreeCourses = 0;

  for (const level of levels) {
    const courses = level.courses || [];
    totalCourses += courses.length;

    for (const course of courses) {
      if (course.isFree) {
        totalFreeCourses++;
      }

      const modules = course.modules || [];
      let courseDuration = 0;
      for (const mod of modules) {
        courseDuration += mod.moduleDuration || 0;
      }
      // Auto-set course duration from its modules
      course.courseDuration = courseDuration;
      totalDurationMinutes += courseDuration;
    }
  }

  data.totalLevels = levels.length;
  data.totalCourses = totalCourses;
  data.totalFreeCourses = totalFreeCourses;
  data.totalContentHours = parseFloat((totalDurationMinutes / 60).toFixed(2));
}

export default {
  beforeCreate(event: any) {
    const { data } = event.params;
    calculatePacketStats(data);
  },
  beforeUpdate(event: any) {
    const { data } = event.params;
    if (data.levels) {
      calculatePacketStats(data);
    }
  },
};
