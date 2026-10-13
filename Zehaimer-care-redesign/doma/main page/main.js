const bluetoothButton = document.getElementById('bluetoothButton');
const wifiButton = document.getElementById('wifiButton');

bluetoothButton.addEventListener('click', async () => {
  if (!('bluetooth' in navigator)) {
    alert('Web Bluetooth is not supported in this browser. Try a compatible browser on a supported device.');
    return;
  }
  try {
    const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
    alert(`Device selected: ${device.name || 'Unnamed device'}. A GATT connection and sensor integration still need to be implemented.`);
  } catch (error) {
    if (error.name !== 'NotFoundError') {
      console.error('Bluetooth request failed:', error);
      alert('Bluetooth selection was cancelled or could not be completed. Check your browser permissions and device settings.');
    }
  }
});

wifiButton.addEventListener('click', () => {
  // Browsers cannot open Wi-Fi settings portably from a web page.
  alert('Please open your device Wi-Fi settings manually. Wi-Fi settings cannot be opened reliably from a regular website.');
});
