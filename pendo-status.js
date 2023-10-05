sp.summary({
  success: function (data) {
    // do all JS in here
    var div = document.getElementById('pendoStatus');
    var ul = document.createElement('ul');
    var arr = data.components;
    var inc = data.incidents;
    var ul6 = document.createElement('ul');

    //create status subtitle
    var h2 = document.createElement('h2');
    div.appendChild(h2);
    h2.setAttribute('id', 'status-message');
    h2.appendChild(document.createTextNode(data.status.description));

    //create incidents section
    var div2 = document.createElement('div');
    for (var i = 0; i < inc.length; i++) {
      if (inc) {
        var h2two = document.createElement('h2');
        div.appendChild(h2two);
        h2two.setAttribute('id', 'incident-summary');
        h2two.appendChild(document.createTextNode('Open Incidents:'));
        if (inc[i] instanceof Array) {
          var list = arrToUl(inc[i].name);
        } else {
          var li = document.createElement('li');
          var p = document.createElement('p');
          var ul2 = document.createElement('ul');
          var li2 = document.createElement('li');
          var ul3 = document.createElement('ul');
          var li3 = document.createElement('li');
          var ul4 = document.createElement('ul');
          var li4 = document.createElement('li');
          var ul5 = document.createElement('ul');
          var li5 = document.createElement('li');
          // dynamically create incident titles
          li.setAttribute('class', 'incident-titles');
          li.appendChild(p);
          p.appendChild(document.createTextNode(inc[i].name));
          //dynamically create incident details
          p.appendChild(ul2);
          ul2.appendChild(li2);
          ul2.appendChild(li4);
          ul2.appendChild(li5);
          p.setAttribute('class', 'incident');
          li2.appendChild(document.createTextNode('Status: ' + inc[i].status));
          li2.setAttribute('class', 'incStatus');
          if (inc[i].resolved_at) {
            ul2.appendChild(li3);
            li3.appendChild(
              document.createTextNode('Resolved At: ' + inc[i].resolved_at)
            );
            li3.setAttribute('class', 'incResolvedAt');
          }
          if (inc[i].updated_at) {
            li4.appendChild(
              document.createTextNode('Updated At: ' + inc[i].updated_at)
            );
            li4.setAttribute('class', 'incUpdatedAt');
          }
          li5.appendChild(document.createTextNode('Incident Link:'));
          var href = document.createElement('a');
          li5.appendChild(href);
          href.setAttribute('href', inc[i].shortlink);
          href.appendChild(document.createTextNode(inc[i].shortlink));
          li5.setAttribute('class', 'incShortlink');
          ul.appendChild(li);
        }
        div.appendChild(ul);
      }
    }

    //create component status sections
    var h2three = document.createElement('h2');
    div2.appendChild(h2three);
    h2three.setAttribute('id', 'services-summary');
    h2three.appendChild(document.createTextNode('Services Status:'));
    for (var i = 0; i < arr.length; i++) {
      if (!arr[i].group) {
        if (arr[i] instanceof Array) {
          var list = arrToUl(arr[i].name);
        } else {
          var li = document.createElement('li');
          var p = document.createElement('p');
          var ul2 = document.createElement('ul');
          var li2 = document.createElement('li');
          li.setAttribute('class', 'status-titles');
          li.appendChild(p);
          p.appendChild(document.createTextNode(arr[i].name));
          p.appendChild(ul2);
          ul2.appendChild(li2);
          p.setAttribute('class', 'component');
          if (arr[i].status === 'operational') {
            li2.appendChild(document.createTextNode('Operational'));
            li2.setAttribute('class', 'status operational');
          } else {
            p.setAttribute('class', 'component degraded');
            li2.appendChild(document.createTextNode('Degraded'));
            li2.setAttribute('class', 'status degraded');
          }
          ul6.appendChild(li);
        }
        div.appendChild(div2);
        div2.appendChild(ul6);
      }
    }
  },
});
