const doorLocked = true;
const windowShut = true;
const alarmActive = true;
const ownerHome = true;
const safeFlag = alarmActive && doorLocked && windowShut && ownerHome;
if (safeFlag && !(doorLocked === false || windowShut === false)) {
  console.log('Secure');
} else {
  console.log('Unsafe');
}
