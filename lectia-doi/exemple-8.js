/**
 * un scrip in care sa afisezi anumite deadline-uri
 * 0 day= today
 * 1 peste tomorrow
 * 2 after tomorrow
 * 3 date in the future
 */

const dayUntilDeadline = 5;
if ((dayUntilDeadline === 0)) {
  console.log("today");
} else if (dayUntilDeadline === 1) {
  console.log("tomorrow");
} else if (dayUntilDeadline === 2) {
  console.log("after tomorrow");
} else {
  console.log("date in the futre ");
}
