chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'outerBounds': {
      'width': 1290,
      'height': 30,
    },
    'frame': 'none',
    'alwaysOnTop': true,
    'visibleOnAllWorkspaces': true
  });
});
