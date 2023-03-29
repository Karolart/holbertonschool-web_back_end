export default function getStudentIdsSum(ListStudents) {
    if (Array.isArray(ListStudents)) {
      return ListStudents.reduce((accumulator, currentStud) => accumulator + currentStud.id, 0);
    }
    return [];
  }