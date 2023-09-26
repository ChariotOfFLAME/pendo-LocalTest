function pendoClickEvent() {
  pendo.track('Captured innerText', {
    Template: event.target.innerText,
  });
}
