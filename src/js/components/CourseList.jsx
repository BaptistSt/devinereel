import React, { PropTypes } from 'react';

const CourseList = ({ courses, currentCourse, onChangeCourseInput: handleCourseInput }) => {
  // Make an immutable collection with undefined values filtered out, sorted alphabetically in the end
  const sortedArr = courses.filter(course => course !== undefined).sort();

  return (
    <select className='course-list' onChange={handleCourseInput} value={currentCourse}>
      {sortedArr.map(course => <option key={Math.random()}>{course}</option>)}
    </select>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  currentCourse: PropTypes.string,
  onChangeCourseInput: PropTypes.func,
};

export default CourseList;
