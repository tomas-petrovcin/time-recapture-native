import { v4 as uuid } from 'react-native-uuid';

import { BSON } from 'realm';

// example
// export class Profile extends Realm.Object<Profile> {
//   _id!: BSON.ObjectId;
//   name!: string;
//   static schema: ObjectSchema = {
//     name: 'Profile',
//     properties: {
//       _id: 'objectId',
//       name: { type: 'string', indexed: 'full-text' },
//     },
//     primaryKey: '_id',
//   };
// }

export class Project extends Realm.Object<Project> {
  _id!: BSON.ObjectId = uuid();
  // userId!: User; // Foreign key (reference to User object)
  title!: string;
  description!: string;
  tasks!: Task[];
  static schema: ObjectSchema = {
    name: 'Project',
    properties: {
      _id: 'objectId',
      userId: 'User',
      title: { type: 'string', indexed: true },
      description: 'string',
      tasks: 'Task[]',
    },
    primaryKey: '_id',
  };
}

export class Task extends Realm.Object<Task> {
  _id!: BSON.ObjectId = uuid();
  projectId?: Project;
  storyId?: Task;
  // userId!: User; // Foreign key (reference to User object)
  title!: string;
  description!: string;
  status!: string;
  priority!: string;
  static schema: ObjectSchema = {
    name: 'Task',
    properties: {
      _id: 'objectId',
      projectId: 'Project',
      storyId: 'Task',
      // userId: 'User',
      title: { type: 'string', indexed: true },
      description: 'string',
      status: 'string',
      priority: 'string',
    },
    primaryKey: '_id',
  };
}

// export class Schedule extends Realm.Object<Schedule> {
//   _id!: BSON.ObjectId = uuid();
//   date: Date;
//   title!: string;
//   description!: string;
//
//   static schema: ObjectSchema = {
//     name: 'Schedule',
//     properties: {
//       _id: 'objectId',
//       title: { type: 'string', indexed: true },
//       description: 'string',
//     },
//     primaryKey: '_id',
//   };
// }
