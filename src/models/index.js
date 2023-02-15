// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Tests } = initSchema(schema);

export {
  Users,
  Tests
};