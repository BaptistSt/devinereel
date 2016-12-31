import React, { Component } from 'react';

import StudentList from 'src/js/components/StudentList';
import CourseList from 'src/js/components/CourseList';
import Display from 'src/js/components/Display';

import Courses from 'src/js/static/courses';
import Students from 'src/js/static/students';

class App extends Component {

  state = {
    course: undefined,
    student: undefined,
    year: `${new Date().getFullYear()}${new Date().getFullYear() + 1}`,
  };

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
    let { year } = this.state;
    year = yearInput.target.value;
    this.setState({ year });
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
      document.querySelector(`section`).appendChild(video);
    } else {
      if (document.querySelector(`.anthony-mode`)) document.querySelector(`.anthony-mode`).remove();
    }
  }

  render() {
    const { student, course, year } = this.state;
    return (
      <div>
        <nav>
          <div className='nav-inputs'>
            <select className='year-list' onChange={this.handleYearInput} value={year}>
              <option value='20142015'>2014-2015</option>
              <option value='20152016'>2015-2016</option>
              <option value='20162017'>2016-2017</option>
            </select>
            <CourseList
              courses={Courses}
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
