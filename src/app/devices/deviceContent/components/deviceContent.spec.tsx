/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import 'jest';
import * as React from 'react';
import { DeviceContentComponent, DeviceContentDispatchProps, DeviceContentDataProps } from './deviceContent';
import { testSnapshot } from '../../../shared/utils/testHelpers';

describe('deviceContent', () => {

    const pathname = `/#/devices/detail/?id=testDevice`;

    const location: any = { // tslint:disable-line:no-any
        pathname
    };
    const routerprops: any = { // tslint:disable-line:no-any
        history: {
            location
        },
        location,
        match: {}
    };
    const deviceContentDataProps: DeviceContentDataProps = {
        deviceId: 'testDevice',
        digitalTwinModelId: 'dtmi:__azureiot:samplemodel;1',
        identityWrapper: null,
        isLoading: false,
    };

    const deviceContentDispatchProps: DeviceContentDispatchProps = {
        getDeviceIdentity: jest.fn(),
        getDigitalTwin: jest.fn(),
        setComponentName: jest.fn()
    };

    const getComponent = (overrides = {}) => {
        const props = {
            ...deviceContentDataProps,
            ...deviceContentDispatchProps,
            ...routerprops,
            ...overrides
        };

        return (
            <DeviceContentComponent {...props} />
        );
    };

    it('matches snapshot', () => {
        testSnapshot(getComponent());
    });
});
