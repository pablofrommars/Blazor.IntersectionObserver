Blazor.registerCustomEventType('intersectionchanged', {
  createEventArgs: event => ({ ratio: event.detail.ratio })
});