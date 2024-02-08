import AppKit

@objc(WindowManager)
class WindowManager: NSObject {

  @objc
  var bridge: RCTBridge!

  @objc
  func applyStyles() -> Void {
    DispatchQueue.main.async {
      if #available(macOS 10.2, *) {
        guard let window = NSApp.windows.first else {return};
        window.isMovableByWindowBackground  = false;
        window.isOpaque = false;
        window.hasShadow = true;
        window.backgroundColor = NSColor.


        window.contentView?.wantsLayer = true;
        window.contentView?.layer?.backgroundColor = NSColor.clear.cgColor;

        window.titlebarAppearsTransparent = false;
        // window.styleMask = [.fullSizeContentView];
        if let titlebarView = window.standardWindowButton(.closeButton)?.superview?.superview {
            titlebarView.wantsLayer = true
            titlebarView.layer?.backgroundColor = NSColor.clear.cgColor
        }
      }
    }
  }

  @objc
  func startListeningForKeys() {
    print("maybe listening ?")
    NSEvent.addLocalMonitorForEvents(matching: .keyDown) { [unowned self] in
        self.handleKeyDownEvent($0)
        print("keyDOWN!!!!")
        return $0
    }
  }

  private func handleKeyDownEvent(_ event: NSEvent) {
    let eventEmitter = self.bridge.module(forName: "KeyEventListener") as! KeyEventListener
    eventEmitter.sendKeyEvent(event)
//    KeyEventListener().sendKeyEvent(event.keyCode)
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
