(function (dom) {
  // If a customer has sufficient permissions (admin) to enable Support Access, take them to Step 3. Else, take them to Step 2
  if (
    pendo.getSerializedMetadata().visitor.userFlags.includes('admin') ||
    pendo.getSerializedMetadata().visitor.role == 8
  ) {
    console.log(
      'User has sufficient permissions to enable Support Access. Moving to Step 3'
    );
    pendo.onGuideAdvanced({ steps: 2 });
  } else {
    console.log(
      'User has insufficient permissions to enable Support Access. Moving to Step 2'
    );
    pendo.onGuideAdvanced();
  }
})(pendo.dom);
