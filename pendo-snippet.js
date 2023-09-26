//Pendo Scripts
var undefined = null;
var user = {
  visitor: {
    id: 'AdamLocalTest',
    email: 'name@example.com',
    name: 'Adam Local',
    emailid: 'name@example.com',
    role: 'Composer',
    return_url: window.location.href,
  },

  account: {
    id: 'LocalTestAccount',
    name: 'example_company',
    industry: 'musician_industry',
  },
};
function annotateUrl() {
  var toDrop = ['*'];
  var toAdd = { page: 'annotateTest' };
  return {
    exclude: toDrop,
    include: toAdd,
  };
}

(function (apiKey) {
  (function (p, e, n, d, o) {
    var v, w, x, y, z;
    o = p[d] = p[d] || {};
    o._q = [];
    v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track'];
    for (w = 0, x = v.length; w < x; ++w)
      (function (m) {
        o[m] =
          o[m] ||
          function () {
            o._q[m === v[0] ? 'unshift' : 'push'](
              [m].concat([].slice.call(arguments, 0))
            );
          };
      })(v[w]);
    y = e.createElement(n);
    y.async = !0;
    y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
    z = e.getElementsByTagName(n)[0];
    z.parentNode.insertBefore(y, z);
  })(window, document, 'script', 'pendo');

  // Call this whenever information about your visitors becomes available
  // Please use Strings, Numbers, or Bools for value types.
  if (user.visitor.id && user.account.id) {
    pendo.initialize({
      visitor: {
        id: user.visitor.id,
        email: user.visitor.email,
        name: user.visitor.name,
        emailid: user.visitor.emailid,
        role: user.visitor.role,
        return_url: user.visitor.return_url,
        // lang: fr_FR
      },

      account: {
        id: user.account.id,
        name: user.account.name,
        industry: user.account.industry,
      },

      events: {
        onClickCaptured: function (pendoEvent) {
          // you might get all your properties at once
          // var currentEventProperties = you_must_provide_this_code();
          // for (var i in currentEventProperties) {
          //   pendoEvent.addEventProperty(i, currentEventProperties[i]);
          // }

          // or add them individually
          pendoEvent.addEventProperty('foo', 'some string');
          pendoEvent.addEventProperty('bar', true);
          pendoEvent.addEventProperty('baz', 123);
          pendoEvent.addEventProperty('quux', {
            stuff: 'that',
            we: 'want to save',
          });

          // to see properties on the current event
          pendoEvent.getEventProperties();
        },
      },
      // location: {
      //   transforms: [
      //     {
      //       attr: 'href',
      //       action: 'Replace',
      //       data: 'https://this.isnt.a.website/',
      //     },
      //   ],
      // },
      // excludeAllText: true,
    });
  }
})('04ad0bf2-ea1f-4f60-60f9-6ddfc79383d1');

//EU Pendo Install

// (function(apiKey){
//     (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
//     v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
//         o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
//         y=e.createElement(n);y.async=!0;y.src='https://cdn.eu.pendo.io/agent/static/'+apiKey+'/pendo.js';
//         z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
//         // Call this whenever information about your visitors becomes available
//         // Please use Strings, Numbers, or Bools for value types.
//         pendo.initialize({
//             visitor: {
//                 id:              'VISITOR-UNIQUE-ID'   // Required if user is logged in
//                 // email:        // Optional
//                 // role:         // Optional
//                 // You can add any additional visitor level key-values here,
//                 // as long as it's not one of the above reserved names.
//             },
//             account: {
//                 id:           'ACCOUNT-UNIQUE-ID' // Highly recommended
//                 // name:         // Optional
//                 // planLevel:    // Optional
//                 // planPrice:    // Optional
//                 // creationDate: // Optional
//                 // You can add any additional account level key-values here,
//                 // as long as it's not one of the above reserved names.
//             }
//         });
// })('27dfe707-9c25-45bb-7000-fd9e1f9a8ade');
