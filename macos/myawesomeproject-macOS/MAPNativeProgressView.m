//
//  MAPNativeProgressView.m
//  projectname-macOS
//
//  Created by Chris Hogan on 4/1/21.
//

#import <AppKit/AppKit.h>
#import <React/RCTBridge.h>
#import "React/UIView+React.h"

#import "MAPNativeProgressView.h"

@implementation MAPNativeProgressView {
  NSProgressIndicator *_progressView;
}

- (instancetype)init {
  if (self = [super initWithFrame:CGRectZero]) {
    _progressView = [[NSProgressIndicator alloc] init];
    
    /* These can all be props defined and passed through in our JS if we want */
    [_progressView setStyle:NSProgressIndicatorBarStyle];
    [_progressView setIndeterminate:NO];
    [_progressView setFrame:CGRectMake(0, 0, 400, 40)];

    [self addSubview:_progressView];
  }
  return self;
}

- (void)setProgressValue:(double)progressValue {
  [_progressView incrementBy:(progressValue - _progressView.doubleValue)]; // increase/decrease by the difference
}

@end
