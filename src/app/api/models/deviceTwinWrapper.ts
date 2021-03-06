/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import { ErrorResponse } from './errorResponse';
import { SynchronizationStatus } from './synchronizationStatus';
import { Twin } from './device';

export interface DeviceTwinWrapper {
    deviceTwin?: Twin;
    deviceTwinSynchronizationStatus: SynchronizationStatus;
    error?: ErrorResponse;
}
