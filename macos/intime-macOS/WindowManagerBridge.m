#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(WindowManager, NSObject)
RCT_EXTERN_METHOD(applyStyles)
RCT_EXTERN_METHOD(startListeningForKeys)
@end

@interface RCT_EXTERN_MODULE(KeyEventListener, RCTEventEmitter)
RCT_EXTERN_METHOD(sendKeyEvent:(nonnull NSNumber)keyCode)
@end
