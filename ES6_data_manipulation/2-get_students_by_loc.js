export default function getStudentsByLocation(listSts, city) {
  if (Array.isArray(listSts)) {
    return listSts.filter((listSts) => listSts.location === city);
  return [];
  }
}
