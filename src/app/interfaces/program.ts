export interface TimeSlot {
  StartTime: string,
  Slots: number;
}

export interface Schedule {
  StartDate: string;
  TimeSlot: TimeSlot[];
}

export interface Program {
  ProgramName: string;
  ProgramType: string;
  Description: string;
  Days: number;
  HoursPerDay: number;
  Schedule: Schedule[];
}
