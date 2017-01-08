import React, { Component } from 'react';

import { StudentList, CourseList, Display } from 'src/js/components/';
import { Students, Courses } from 'src/js/static/';

import { flatten } from 'src/js/utils/';

class App extends Component {

  state = {
    course: ``,
    courses: [],
    student: ``,
    year: `20162017`,
  };

  componentDidMount() {
    let { courses } = this.state;

    Courses.filter(course => course.name === 20162017)
      .forEach(course => courses.push(...course.courses));
    courses = flatten(courses);

    this.setState({ courses, course: courses[0] });
  }

  handleCourseInput = courseInput => {
    let { course } = this.state;
    course = courseInput.target.value;
    this.setState({ course });
  }

  handleStudentInput = studentInput => {
    let { student } = this.state;
    student = studentInput.target.value;
    this.setState({ student });
  }

  handleYearInput = yearInput => {
    let { year, courses } = this.state;
    courses = [];
    year = yearInput.target.value;

    Courses.filter(course => course.name === parseInt(year))
      .forEach(course => courses.push(...course.courses));
    courses = flatten(courses);

    this.setState({ year, courses });
  }

  handleAnthonyMode = checked => {
    if (checked.target.checked) {
      const video = document.createElement(`video`);
      video.setAttribute(`src`, `https://student.howest.be/jannes.vandepitte/viewer2/tony.mp4`);
      video.setAttribute(`autoplay`, ``);
      video.setAttribute(`loop`, ``);
      video.className = `anthony-mode`;
      video.style.position = `absolute`;
      video.style.top = `50%`;
      video.style.left = `50%`;
      video.style.transform = `translate(-50%, -50%)`;
      document.body.appendChild(video);
    } else {
      if (document.querySelector(`.anthony-mode`)) document.querySelector(`.anthony-mode`).remove();
    }
  }

  render() {
    const { student, course, year, courses } = this.state;
    return (
      <div>
        <nav>
          <div className='nav-inputs'>
            <select className='year-list' onChange={this.handleYearInput} value={year}>
              <option value='20162017'>2016-2017</option>
              <option value='20152016'>2015-2016</option>
              <option value='20142015'>2014-2015</option>
            </select>
            <CourseList
              courses={courses}
              currentCourse={course}
              onChangeCourseInput={this.handleCourseInput}
            />
            <StudentList
              students={Students}
              currentStudent={student}
              onChangeStudentInput={this.handleStudentInput}
            />
            <input className='show-that-anthony' type='checkbox' onClick={this.handleAnthonyMode} />
          </div>
          <a className='link-wrapper' target='_blank' rel='noopener'
            href='https://github.com/thibmaek/devineviewer/edit/master/src/js/static/Students.js'>
            <button>Not in the list? Add yourself!</button>
          </a>
        </nav>
        <Display course={course} student={student} year={year} />
      </div>
    );
  }
}

export default App;
