/* Generated by restful-react */

import React from 'react';

import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';
export const SPEC_VERSION = 'undefined';
export interface Course {
  pid: string;
  title: string;
  subject: string;
  code: string;
}

export type Term = '202001' | '202005' | '202009' | '202101' | '202105' | '202109' | '202201' | '202205';

export interface NestedPreCoRequisites {
  reqList?: (NestedPreCoRequisites | KualiCourse | string)[];
  unparsed?: string;
  gpa?: string;
  grade?: string;
  units?: boolean;
  coreq?: boolean;
  quantity?: number | 'ALL';
}

export interface KualiCourse {
  pid?: string;
  code: string;
  subject: string;
}

export interface CourseDetails {
  pid: string;
  title: string;
  description: string;
  dateStart: string;
  credits: {
    chosen: string;
    value:
      | string
      | {
          max: string;
          min: string;
        };
    credits: {
      max: string;
      min: string;
    };
  };
  hoursCatalog?: {
    lab: string;
    tutorial: string;
    lecture: string;
  }[];
  preAndCorequisites?: (string | NestedPreCoRequisites | KualiCourse)[];
  preOrCorequisites?: (string | NestedPreCoRequisites | KualiCourse)[];
  /**
   * Abbriviation of the subject of the course.
   */
  subject: string;
  /**
   * The code portion of the course.
   */
  code: string;
  /**
   * If a course was named something else previously.
   */
  formally?: string;
}

export interface EventRequest {
  name: string;
  [key: string]: {};
}

export type LevelType = 'law' | 'undergraduate' | 'graduate';

export type SectionType = 'lecture' | 'lab' | 'tutorial' | 'gradable lab' | 'lecture topic';

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface PickClassScheduleListingExcludeKeyofClassScheduleListingMeetingTimes {
  title: string;
  crn: string;
  sectionCode: string;
  additionalNotes?: string;
  associatedTerm: {
    end: string;
    start: string;
  };
  registrationDates: {
    end: string;
    start: string;
  };
  levels: LevelType[];
  campus: 'online' | 'in-person';
  sectionType: SectionType;
  instructionalMethod: string;
  credits: string;
}

export type OmitClassScheduleListingMeetingTimes = PickClassScheduleListingExcludeKeyofClassScheduleListingMeetingTimes;

export interface MeetingTimes {
  roomNumber?: string;
  buildingAccronym?: string;
  building?: string;
  instructors: string[];
  scheduleType: string;
  dateRange: string;
  where: string;
  days: string;
  time: string;
  type: string;
}

export type Section = OmitClassScheduleListingMeetingTimes & {
  meetingTimes: MeetingTimes[];
};

export interface Seating {
  capacity: number;
  actual: number;
  remaining: number;
}

export type Classification = 'YEAR_1' | 'YEAR_2' | 'YEAR_3' | 'YEAR_4' | 'YEAR_5' | 'unclassified';

export interface Requirements {
  level: LevelType[];
  fieldOfStudy?: string[];
  classification?: Classification[];
  negClassification?: Classification[];
  degree?: string[];
  program?: string[];
  negProgram?: string[];
  college?: string[];
  negCollege?: string[];
  major?: string[];
}

export interface Seat {
  title: string;
  seats: Seating;
  waitListSeats: Seating;
  requirements?: Requirements;
  crn: string;
}

export interface KualiSubject {
  subject: string;
  title: string;
}

export type Subject = KualiSubject;

export interface ExtendedTextbook {
  instructor?: string;
  isbn?: string;
  price: {
    newAndDigitalAccessCad?: string;
    digitalAccessCad?: string;
    usedCad?: string;
    newCad?: string;
  };
  required: boolean;
  authors?: string[];
  title: string;
  imageUrl?: string;
  bookstoreUrl?: string;
  amazonUrl?: string;
}

export interface CourseTextbook {
  textbooks: ExtendedTextbook[];
  instructor?: string;
  additionalInfo?: string[];
  section?: string;
}

export interface TextbookInfo {
  subject: string;
  code: string;
  term: string;
  sections: CourseTextbook[];
}

export interface TimetableCourse {
  /**
   * The colour code displayed on the timetable
   */
  color: string;
  /**
   * The selected tutorial section of the course.
   */
  tutorial?: string[];
  /**
   * The selected lab section of the course.
   */
  lab?: string[];
  /**
   * The selected lecture section of the course.
   */
  lecture?: string[];
  /**
   * The PID of the course.
   */
  pid: string;
  /**
   * The code portion of the course.
   */
  code: string;
  /**
   * Abbreviation of the subject of the course.
   */
  subject: string;
}

export interface Timetable {
  courses: TimetableCourse[];
  term: Term;
}

export type TimetableReturn = {
  slug: string;
} & Timetable;

export interface ValidateErrorJSON {
  message: 'Validation failed';
  details: {
    [key: string]: {};
  };
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface PickTimetableCoursesOrTerm {
  courses: TimetableCourse[];
  term: Term;
}

export type TimetableParams = PickTimetableCoursesOrTerm;

export interface GetCoursesQueryParams {
  in_session?: boolean;
}

export interface GetCoursesPathParams {
  term: Term;
}

export type GetCoursesProps = Omit<GetProps<Course[], unknown, GetCoursesQueryParams, GetCoursesPathParams>, 'path'> &
  GetCoursesPathParams;

/**
 * Retrieves all the courses available. If query params are passed in, they will be used to filter results.
 */
export const GetCourses = ({ term, ...props }: GetCoursesProps) => (
  <Get<Course[], unknown, GetCoursesQueryParams, GetCoursesPathParams> path={`/courses/${term}`} {...props} />
);

export type UseGetCoursesProps = Omit<
  UseGetProps<Course[], unknown, GetCoursesQueryParams, GetCoursesPathParams>,
  'path'
> &
  GetCoursesPathParams;

/**
 * Retrieves all the courses available. If query params are passed in, they will be used to filter results.
 */
export const useGetCourses = ({ term, ...props }: UseGetCoursesProps) =>
  useGet<Course[], unknown, GetCoursesQueryParams, GetCoursesPathParams>(
    (paramsInPath: GetCoursesPathParams) => `/courses/${paramsInPath.term}`,
    { pathParams: { term }, ...props }
  );

export interface GetCoursePathParams {
  term: Term;
  pid: string;
}

export type GetCourseProps = Omit<GetProps<CourseDetails, unknown, void, GetCoursePathParams>, 'path'> &
  GetCoursePathParams;

/**
 * Retrieves course details given the term and pid.
 */
export const GetCourse = ({ term, pid, ...props }: GetCourseProps) => (
  <Get<CourseDetails, unknown, void, GetCoursePathParams> path={`/courses/${term}/${pid}`} {...props} />
);

export type UseGetCourseProps = Omit<UseGetProps<CourseDetails, unknown, void, GetCoursePathParams>, 'path'> &
  GetCoursePathParams;

/**
 * Retrieves course details given the term and pid.
 */
export const useGetCourse = ({ term, pid, ...props }: UseGetCourseProps) =>
  useGet<CourseDetails, unknown, void, GetCoursePathParams>(
    (paramsInPath: GetCoursePathParams) => `/courses/${paramsInPath.term}/${paramsInPath.pid}`,
    { pathParams: { term, pid }, ...props }
  );

export interface GetCourseDetailsPathParams {
  term: Term;
  subject: string;
  code: string;
}

export type GetCourseDetailsProps = Omit<GetProps<CourseDetails, unknown, void, GetCourseDetailsPathParams>, 'path'> &
  GetCourseDetailsPathParams;

export const GetCourseDetails = ({ term, subject, code, ...props }: GetCourseDetailsProps) => (
  <Get<CourseDetails, unknown, void, GetCourseDetailsPathParams>
    path={`/courses/${term}/${subject}/${code}`}
    {...props}
  />
);

export type UseGetCourseDetailsProps = Omit<
  UseGetProps<CourseDetails, unknown, void, GetCourseDetailsPathParams>,
  'path'
> &
  GetCourseDetailsPathParams;

export const useGetCourseDetails = ({ term, subject, code, ...props }: UseGetCourseDetailsProps) =>
  useGet<CourseDetails, unknown, void, GetCourseDetailsPathParams>(
    (paramsInPath: GetCourseDetailsPathParams) =>
      `/courses/${paramsInPath.term}/${paramsInPath.subject}/${paramsInPath.code}`,
    { pathParams: { term, subject, code }, ...props }
  );

export interface PostEventResponse {
  success: boolean;
}

export type PostEventProps = Omit<MutateProps<PostEventResponse, unknown, void, EventRequest, void>, 'path' | 'verb'>;

export const PostEvent = (props: PostEventProps) => (
  <Mutate<PostEventResponse, unknown, void, EventRequest, void> verb="POST" path={`/events`} {...props} />
);

export type UsePostEventProps = Omit<
  UseMutateProps<PostEventResponse, unknown, void, EventRequest, void>,
  'path' | 'verb'
>;

export const usePostEvent = (props: UsePostEventProps) =>
  useMutate<PostEventResponse, unknown, void, EventRequest, void>('POST', `/events`, props);

export interface SectionsQueryParams {
  subject: string;
  code: string;
}

export interface SectionsPathParams {
  term: Term;
}

export type SectionsProps = Omit<GetProps<Section[], void, SectionsQueryParams, SectionsPathParams>, 'path'> &
  SectionsPathParams;

export const Sections = ({ term, ...props }: SectionsProps) => (
  <Get<Section[], void, SectionsQueryParams, SectionsPathParams> path={`/sections/${term}`} {...props} />
);

export type UseSectionsProps = Omit<UseGetProps<Section[], void, SectionsQueryParams, SectionsPathParams>, 'path'> &
  SectionsPathParams;

export const useSections = ({ term, ...props }: UseSectionsProps) =>
  useGet<Section[], void, SectionsQueryParams, SectionsPathParams>(
    (paramsInPath: SectionsPathParams) => `/sections/${paramsInPath.term}`,
    { pathParams: { term }, ...props }
  );

export interface SeatsQueryParams {
  subject: string;
  code: string;
}

export interface SeatsPathParams {
  term: Term;
}

export type SeatsProps = Omit<GetProps<Seat[], void, SeatsQueryParams, SeatsPathParams>, 'path'> & SeatsPathParams;

export const Seats = ({ term, ...props }: SeatsProps) => (
  <Get<Seat[], void, SeatsQueryParams, SeatsPathParams> path={`/sections/${term}/seats`} {...props} />
);

export type UseSeatsProps = Omit<UseGetProps<Seat[], void, SeatsQueryParams, SeatsPathParams>, 'path'> &
  SeatsPathParams;

export const useSeats = ({ term, ...props }: UseSeatsProps) =>
  useGet<Seat[], void, SeatsQueryParams, SeatsPathParams>(
    (paramsInPath: SeatsPathParams) => `/sections/${paramsInPath.term}/seats`,
    { pathParams: { term }, ...props }
  );

export interface SubjectsPathParams {
  term: Term;
}

export type SubjectsProps = Omit<GetProps<Subject[], unknown, void, SubjectsPathParams>, 'path'> & SubjectsPathParams;

export const Subjects = ({ term, ...props }: SubjectsProps) => (
  <Get<Subject[], unknown, void, SubjectsPathParams> path={`/subjects/${term}`} {...props} />
);

export type UseSubjectsProps = Omit<UseGetProps<Subject[], unknown, void, SubjectsPathParams>, 'path'> &
  SubjectsPathParams;

export const useSubjects = ({ term, ...props }: UseSubjectsProps) =>
  useGet<Subject[], unknown, void, SubjectsPathParams>(
    (paramsInPath: SubjectsPathParams) => `/subjects/${paramsInPath.term}`,
    { pathParams: { term }, ...props }
  );

export type GetTextbooksResponse = TextbookInfo | {};

export interface GetTextbooksPathParams {
  term: Term;
  subject: string;
  code: string;
}

export type GetTextbooksProps = Omit<GetProps<GetTextbooksResponse, void, void, GetTextbooksPathParams>, 'path'> &
  GetTextbooksPathParams;

export const GetTextbooks = ({ term, subject, code, ...props }: GetTextbooksProps) => (
  <Get<GetTextbooksResponse, void, void, GetTextbooksPathParams>
    path={`/textbooks/${term}/${subject}/${code}`}
    {...props}
  />
);

export type UseGetTextbooksProps = Omit<UseGetProps<GetTextbooksResponse, void, void, GetTextbooksPathParams>, 'path'> &
  GetTextbooksPathParams;

export const useGetTextbooks = ({ term, subject, code, ...props }: UseGetTextbooksProps) =>
  useGet<GetTextbooksResponse, void, void, GetTextbooksPathParams>(
    (paramsInPath: GetTextbooksPathParams) =>
      `/textbooks/${paramsInPath.term}/${paramsInPath.subject}/${paramsInPath.code}`,
    { pathParams: { term, subject, code }, ...props }
  );

export type GetTimetableResponse = Timetable | {};

export interface GetTimetablePathParams {
  slug: string;
}

export type GetTimetableProps = Omit<GetProps<GetTimetableResponse, void, void, GetTimetablePathParams>, 'path'> &
  GetTimetablePathParams;

export const GetTimetable = ({ slug, ...props }: GetTimetableProps) => (
  <Get<GetTimetableResponse, void, void, GetTimetablePathParams> path={`/timetables/${slug}`} {...props} />
);

export type UseGetTimetableProps = Omit<UseGetProps<GetTimetableResponse, void, void, GetTimetablePathParams>, 'path'> &
  GetTimetablePathParams;

export const useGetTimetable = ({ slug, ...props }: UseGetTimetableProps) =>
  useGet<GetTimetableResponse, void, void, GetTimetablePathParams>(
    (paramsInPath: GetTimetablePathParams) => `/timetables/${paramsInPath.slug}`,
    { pathParams: { slug }, ...props }
  );

export type CreateTimetableResponse = TimetableReturn | {};

export type CreateTimetableProps = Omit<
  MutateProps<CreateTimetableResponse, ValidateErrorJSON, void, TimetableParams, void>,
  'path' | 'verb'
>;

export const CreateTimetable = (props: CreateTimetableProps) => (
  <Mutate<CreateTimetableResponse, ValidateErrorJSON, void, TimetableParams, void>
    verb="PUT"
    path={`/timetables`}
    {...props}
  />
);

export type UseCreateTimetableProps = Omit<
  UseMutateProps<CreateTimetableResponse, ValidateErrorJSON, void, TimetableParams, void>,
  'path' | 'verb'
>;

export const useCreateTimetable = (props: UseCreateTimetableProps) =>
  useMutate<CreateTimetableResponse, ValidateErrorJSON, void, TimetableParams, void>('PUT', `/timetables`, props);
