// Code copied (with some modifications) from the Keystone 6 "with-auth" example
// See.. https://github.com/keystonejs/keystone/tree/master/examples/with-auth

import { list } from '@keystone-next/keystone';
import {
  checkbox,
  password,
  relationship,
  text,
  timestamp,
  select,
} from '@keystone-next/keystone/fields';

export const lists = {
  Task: list({
    fields: {
      label: text({ isRequired: true }),
      priority: select({
        dataType: 'enum',
        options: [
          { label: 'Low', value: 'low' },
          { label: 'Medium', value: 'medium' },
          { label: 'High', value: 'high' },
        ],
      }),
      isComplete: checkbox(),
      assignedTo: relationship({ ref: 'Person.tasks', many: false }),
      finishBy: timestamp(),
    },
  }),

  Person: list({
    fields: {
      name: text({ isRequired: true }),
      // Added an email and password pair to be used with authentication
      // The email address is going to be used as the identity field, so it's
      // important that we set both isRequired and isUnique
      email: text({ isRequired: true, isUnique: true, isIndexed: 'unique' }),
      // The password field stores a hash of the supplied password, and
      // we want to ensure that all people have a password set, so we use
      // the isRequired flag.
      password: password({ isRequired: true }),
      tasks: relationship({ ref: 'Task.assignedTo', many: true }),
    },
  }),

  Listing: list({
    fields: {
      title: text({ isRequired: true }),
      email: text({ isRequired: true, isUnique: true, isIndexed: 'unique' }),
      status: select({
        dataType: 'enum',
        options: [
          { label: 'Active', value: 'active' },
          { label: 'Pending', value: 'pending' },
          { label: 'Closed', value: 'closed' },
        ],
      }),
      address: text({}),
      lng: text({}),
      lat: text({}),
      // agent: text({}),
      agent: relationship({ ref: 'Agent.listings', many: false }),
    },
  }),

  Agent: list({
    fields: {
      title: text({ isRequired: true }),
      email: text({ isRequired: true, isUnique: true, isIndexed: 'unique' }),
      address: text({}),
      lng: text({}),
      lat: text({}),
      listings: relationship({ ref: 'Listing.agent', many: false }),
    },
  }),
};
