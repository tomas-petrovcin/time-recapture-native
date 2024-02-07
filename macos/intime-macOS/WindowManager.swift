import AppKit

@objc(WindowManager)
class WindowManager: NSObject {

  @objc
  func applyStyles() -> Void {
    DispatchQueue.main.async {
      if #available(macOS 10.2, *) {
        guard let window = NSApp.windows.first else {return};
        window.isMovableByWindowBackground  = false;
        window.isOpaque = false;
        window.hasShadow = true;
        window.backgroundColor = NSColor.clear;

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
    NSEvent.addLocalMonitorForEvents(matching: .keyDown) { [unowned self] in
        self.handleKeyDownEvent($0)
        return $0
    }
  }

  private func handleKeyDownEvent(_ event: NSEvent) {
    // Define the key events and modifiers here
    if event.modifierFlags.contains(.command) && event.keyCode == 8 {
      KeyEventListener().sendKeyEvent(event.keyCode)
    }
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
