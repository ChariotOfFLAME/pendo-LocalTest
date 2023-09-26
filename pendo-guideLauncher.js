function arrToUl(arr) {
  var div = document.getElementById('guideLauncher');
  var ul = document.createElement('ul');

  for (var i = 0; i < arr.length; i++) {
    if ((arr[i].launchMethod = 'api')) {
      if (!arr[i].attributes.badge) {
        if (!arr[i].attributes.activation) {
          if (!arr[i].attributes.isAnnouncement) {
            if (!arr[i].resourceCenterId) {
              if (arr[i].name !== 'Resource Center') {
                if (arr[i] instanceof Array) {
                  var list = arrToUl(arr[i].name);
                } else {
                  var li = document.createElement('li');
                  var a = document.createElement('a');
                  li.setAttribute('class', 'api-guides');
                  li.appendChild(a);
                  a.appendChild(document.createTextNode(arr[i].name));
                  a.setAttribute('href', '#');
                  a.setAttribute(
                    'onClick',
                    `pendo.showGuideById('${arr[i].id}')`
                  );
                  a.setAttribute('class', 'guide-link');
                  ul.appendChild(li);
                }
                div.appendChild(ul);
              }
            }
          }
        }
      }
    }
  }
}

function checkPendo() {
  var count = 0;
  var div = document.getElementById('guideLauncher');
  var h1 = document.createElement('h1');
  h1.setAttribute('id', 'guidesTitle');
  h1.appendChild(document.createTextNode('awaiting pendo object...'));
  div.appendChild(h1);
  function checkGuides() {
    if (!pendo.guides) {
      if (count < 10) {
        count = count + 1;
        document.getElementById('guidesTitle').textContent =
          'loading guides...';
        window.setTimeout(
          checkGuides,
          1000
        ); /* this checks the flag every 1000 milliseconds*/
      } else {
        console.error('ERROR: Pendo failed to report as ready!');
        document.getElementById('guidesTitle').textContent =
          'ERROR: Pendo failed to report as ready!';
      }
    } else {
      document.getElementById('guidesTitle').textContent =
        'API-Activated Guides';
      arrToUl(pendo.guides);
    }
  }
  checkGuides();
}
checkPendo();
