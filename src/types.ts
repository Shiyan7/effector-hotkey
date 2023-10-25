type Key =
  | 'Ctrl'
  | 'Shift'
  | 'Backspace'
  | 'Enter'
  | 'Tab'
  | 'Alt'
  | 'CapsLock'
  | 'Delete'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'PageUp'
  | 'PageDown'
  | 'Home'
  | 'End'
  | 'Insert'
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | 'Escape'
  | 'PrintScreen'
  | 'ScrollLock'
  | 'Pause'
  | 'ContextMenu'
  | 'Super'
  | 'Meta'
  | 'NumLock'
  | 'AudioVolumeUp'
  | 'AudioVolumeDown'
  | 'AudioVolumeMute'
  | 'MediaPlayPause'
  | 'MediaStop'
  | 'MediaNextTrack'
  | 'MediaPreviousTrack';

export type Hotkey = `${Key}` | `${Key}+${Key}` | `${Key}+${Key}+${Key}`;
