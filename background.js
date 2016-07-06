chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'outerBounds': {
      'width': 1290,
      'height': 70,
    },
    'frame': 'none',
    'alwaysOnTop': true,
    'visibleOnAllWorkspaces': true
  });
});
