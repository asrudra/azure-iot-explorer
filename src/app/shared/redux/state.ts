/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import { AzureResourceStateInterface } from '../../azureResource/state';
import { DeviceContentStateType } from '../../devices/deviceContent/state';
import { ConnectionStringsStateInterface } from '../../connectionStrings/state';
import { IotHubStateInterface } from '../../iotHub/state';
import { ModelRepositoryStateInterface } from '../../modelRepository/state';
import { NotificationsStateInterface } from '../../notifications/state';
import { IM } from '../types/types';

export interface StateInterface {
    azureResourceState: AzureResourceStateInterface;
    connectionStringsState: ConnectionStringsStateInterface;
    deviceContentState: DeviceContentStateType;
    iotHubState: IotHubStateInterface;
    modelRepositoryState: ModelRepositoryStateInterface;
    notificationsState: NotificationsStateInterface;
}

export type StateType = IM<StateInterface>;
