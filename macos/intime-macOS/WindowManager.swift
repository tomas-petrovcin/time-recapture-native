import Foundation
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

        window.contentView?.wantsLayer = true
        window.contentView?.layer?.backgroundColor = NSColor.clear.cgColor

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
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
