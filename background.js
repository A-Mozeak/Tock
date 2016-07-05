chrome.app.runtime.onLaunched.addListener(function() {
  var screenWidth = window.screen.availWidth;
  chrome.app.window.create('index.html', {
    'outerBounds': {
      'width': screenWidth,
      'height': 70,
    },
    'frame': 'none',
    'alwaysOnTop': true,
    'visibleOnAllWorkspaces': true
  });
});
