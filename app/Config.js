// Frontend Application Config

var Config = Config || function () {
    
  return { 
    modules: {
        notify: {
            type: 'success',
            content: 'Completed!',
            autoclose: 1500,
            target: 'page'
        },
    },
    pages: {
        profile: [ /* 'modalbox', */ 'notify'],
        inbox: ['autosuggest', 'starrating', 'sharebutton'],
        preview: ['autosuggest', 'starrating', 'foomodule']
    }
  }
};


/*
        'autosuggest', 
        'starrating', 
        'sharebutton', 
        'likebutton',
        'modalbox',
        'fooModule'


*/

