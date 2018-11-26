'use strict'

import PhonesPage from './phones/phones-page.js';

let currentPage = new PhonesPage({
  element: document.querySelector('[data-page-container]'),
});


// getAcademyBySubdomain('academy', (academy) => {
//   getCourse(1234, (course) => {
//     getUserByToken('hsadgjkhgsjhdfgkasdf', (user) => {
//       getUserCourse(user.id, course.id, (userCourse) => {
//         getTopic(userCourse.currentTopicId, (topic) => {
//           render(topic)
//         })
//       })
//     })
//   })
// })
//
// let academyPromise = getAcademyBySubdomain('academy');
// let coursePromise = getCourse(1234);
// let userPromise = getUserByToken('hsadgjkhgsjhdfgkasdf');
// let userCoursePromise = getUserCourse(user.id, course.id);
// let topicPromise = getTopic(userCourse.currentTopicId);
//
// academyPromise
//   .then((academy) => coursePromise)
//   .then((course) => userPromise)
//   .then((user) => userCoursePromise)
//   .then((userCourse) => topicPromise)
//   .then((topic) => {
//     render(topic);
//   });
//
// Promise.all([academyPromise, coursePromise])
//   .then()
