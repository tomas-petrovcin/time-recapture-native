#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(KeyEventListener, RCTEventEmitter)

RCT_EXTERN_METHOD(supportedEvents)
RCT_EXTERN_METHOD(sendKeyEvent:(nonnull NSNumber *)key)

@end

@interface RCT_EXTERN_MODULE(WindowManager, NSObject)

RCT_EXTERN_METHOD(applyStyles)
RCT_EXTERN_METHOD(startListeningForKeys)

@end
