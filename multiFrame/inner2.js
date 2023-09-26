function identify() {
  const json = document.querySelector('#identify-json').value;
  console.log('raw json is', json);
  try {
    const identity = JSON.parse(json);
    if (!window.__identifyPendoVisitor) {
      console.error('window.__identifyPendoVisitor does not exist');
      return;
    }

    window.__identifyPendoVisitor(identity);
  } catch (err) {
    console.error(err);
  }
}

document.querySelector('#set-identity').addEventListener('click', identify);
