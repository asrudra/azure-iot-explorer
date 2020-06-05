/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import { addConnectionStringAction, deleteConnectionStringAction, setConnectionStringsAction, upsertConnectionStringAction } from './actions';
import { addConnectionStringSaga } from './sagas/addConnectionStringSaga';
import { deleteConnectionStringSaga } from './sagas/deleteConnectionStringSaga';
import { setConnectionStringsSaga } from './sagas/setConnectionStringsSaga';
import { upsertConnectionStringSaga } from './sagas/upsertConnectionStringSaga';

export function* connectionStringsSaga() {
    yield all([
        takeEvery(addConnectionStringAction, addConnectionStringSaga),
        takeEvery(deleteConnectionStringAction, deleteConnectionStringSaga),
        takeLatest(setConnectionStringsAction, setConnectionStringsSaga),
        takeEvery(upsertConnectionStringAction, upsertConnectionStringSaga)
    ]);
}
