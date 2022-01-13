import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type WasherMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DryerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Washer {
  readonly id: string;
  readonly isTurnOn?: boolean;
  readonly user?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Washer, WasherMetaData>);
  static copyOf(source: Washer, mutator: (draft: MutableModel<Washer, WasherMetaData>) => MutableModel<Washer, WasherMetaData> | void): Washer;
}

export declare class Dryer {
  readonly id: string;
  readonly isTurnOn?: boolean;
  readonly user?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Dryer, DryerMetaData>);
  static copyOf(source: Dryer, mutator: (draft: MutableModel<Dryer, DryerMetaData>) => MutableModel<Dryer, DryerMetaData> | void): Dryer;
}