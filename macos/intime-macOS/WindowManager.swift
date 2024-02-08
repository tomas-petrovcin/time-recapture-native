import AppKit
import Foundation

@objc(WindowManager)
class WindowManager: NSObject {

  @objc
  var bridge: RCTBridge!

  @objc
  func applyStyles(_ params: NSDictionary) -> Void {
    DispatchQueue.main.async {
      if #available(macOS 10.2, *) {
          guard let window = NSApp.windows.first else {return};
          window.styleMask.insert(.fullSizeContentView)
          window.isMovableByWindowBackground = params.value(forKey: "isMovableByWindowBackground") as! Bool
          window.isOpaque = params.value(forKey: "isOpaque") as! Bool
          window.title = ""
          window.titlebarAppearsTransparent = params.value(forKey: "titlebarAppearsTransparent") as! Bool
          let backgroundColor = NSColor(fromHex: params.value(forKey: "backgroundColor") as! String)
          window.backgroundColor = backgroundColor
          window.contentView?.wantsLayer = true;
          window.contentView?.layer?.backgroundColor = backgroundColor.cgColor;
          if let titlebarView = window.standardWindowButton(.closeButton)?.superview?.superview {
              titlebarView.wantsLayer = true
              titlebarView.layer?.backgroundColor = backgroundColor.cgColor
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


extension NSColor {
    /// Initialises UIColor from a hexadecimal string. Color is clear if string is invalid.
    /// - Parameter fromHex: supported formats are "#RGB", "#RGBA", "#RRGGBB", "#RRGGBBAA", with or without the # character
    public convenience init(fromHex:String) {
        var r = 0, g = 0, b = 0, a = 255
        let offset = fromHex.hasPrefix("#") ? 1 : 0
        let ch = fromHex.map{$0}
        switch(ch.count - offset) {
        case 8:
            a = 16 * (ch[offset+6].hexDigitValue ?? 0) + (ch[offset+7].hexDigitValue ?? 0)
            fallthrough
        case 6:
            r = 16 * (ch[offset+0].hexDigitValue ?? 0) + (ch[offset+1].hexDigitValue ?? 0)
            g = 16 * (ch[offset+2].hexDigitValue ?? 0) + (ch[offset+3].hexDigitValue ?? 0)
            b = 16 * (ch[offset+4].hexDigitValue ?? 0) + (ch[offset+5].hexDigitValue ?? 0)
            break
        case 4:
            a = 16 * (ch[offset+3].hexDigitValue ?? 0) + (ch[offset+3].hexDigitValue ?? 0)
            fallthrough
        case 3:  // Three digit #0D3 is the same as six digit #00DD33
            r = 16 * (ch[offset+0].hexDigitValue ?? 0) + (ch[offset+0].hexDigitValue ?? 0)
            g = 16 * (ch[offset+1].hexDigitValue ?? 0) + (ch[offset+1].hexDigitValue ?? 0)
            b = 16 * (ch[offset+2].hexDigitValue ?? 0) + (ch[offset+2].hexDigitValue ?? 0)
            break
        default:
            a = 0
            break
        }
        self.init(red: CGFloat(r)/255, green: CGFloat(g)/255, blue: CGFloat(b)/255, alpha: CGFloat(a)/255)

    }
}
// Author: Andrew Kingdom
