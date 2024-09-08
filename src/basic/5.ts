enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Wednesday) {
    return true;
  }
  return false;
};

isWeekend(DayOfWeek.Saturday);
