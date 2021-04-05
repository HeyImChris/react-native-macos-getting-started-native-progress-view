//
//  MAPNativeProgressView.h
//  projectname
//
//  Created by Chris Hogan on 4/1/21.
//

#import <React/RCTView.h>

@interface MAPNativeProgressView : RCTUIView /* this is a macro to an NSView on macOS */

@property(nonatomic) double progressValue; // Expose this to our manager

@end
