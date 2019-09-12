myApp.directive('myComponent', function () {
    return {
        restrict:'E',
        template: `
          <div class="card mb-4 shadow-sm">
            <img  style="width:220px;" src="{{isolatedBindingFoo.image}}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">{{isolatedBindingFoo.name}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a class="btn btn-sm btn-outline-secondary" href="/video/{{isolatedBindingFoo.video}}" target="_blank" role="button">View</a>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>         
       `,
        scope:{
            /* NOTE: Normally I would set my attributes and bindings
             to be the same name but I wanted to delineate between
             parent and isolated scope. */
            isolatedAttributeFoo:'@attributeFoo',
            isolatedBindingFoo:'=bindingFoo',
            isolatedExpressionFoo:'&'
        },
        link: function($scope, $element, attr, parentDirectCtrl){
        }
    };
})
