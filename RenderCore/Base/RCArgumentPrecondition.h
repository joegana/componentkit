/*
 *  Copyright (c) 2014-present, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 */

#pragma once

#define RCArgumentPreconditionCheckIf(condition, message) do { if (!(condition)) { @throw [NSException exceptionWithName:NSInvalidArgumentException reason:(message) userInfo:nil]; } } while (0)

#define RCInternalConsistencyCheckIf(condition, message) do { if (!(condition)) { @throw [NSException exceptionWithName:NSInternalInconsistencyException reason:(message) userInfo:nil]; } } while (0)
