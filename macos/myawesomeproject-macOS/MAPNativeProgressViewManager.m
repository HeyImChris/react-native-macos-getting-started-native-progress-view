//
//  MAPNativeProgressViewManager.m
//  projectname-macOS
//
//  Created by Chris Hogan on 4/1/21.
//

#import <React/RCTBridge.h>
#import "MAPNativeProgressViewManager.h"
#import "MAPNativeProgressView.h"

@implementation MAPNativeProgressViewManager

RCT_EXPORT_MODULE()

#pragma mark - RCTViewManager overrides

- (RCTUIView *)view {
  return [MAPNativeProgressView new];
}

RCT_CUSTOM_VIEW_PROPERTY(progressValue, NSNumber*, MAPNativeProgressView) {
  if (view && [view isKindOfClass:[MAPNativeProgressView class]] && [json isKindOfClass:[NSNumber class]]) {
    [view setProgressValue:[(NSNumber*)json doubleValue]];
  }
}

@end
