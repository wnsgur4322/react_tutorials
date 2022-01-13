// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Washer, Dryer } = initSchema(schema);

export {
  Washer,
  Dryer
};