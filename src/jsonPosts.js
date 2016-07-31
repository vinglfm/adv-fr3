$(document).ready(function(){
  var posts = Data.getPosts();

  var jsonTemplateRow = $('#posts-json-template').html();
  var jsonTemplate = Handlebars.compile(jsonTemplateRow);

  var tableTemplateRow = $('#posts-table-template').html();
  var tableTemplate = Handlebars.compile(tableTemplateRow);

  Handlebars.registerHelper('json', function(text, options){
    var prettyJson = JSON.stringify(text, null, 2);
    return new Handlebars.SafeString('<pre>' + Handlebars.Utils.escapeExpression(prettyJson) + '</pre>');
  });

  Handlebars.registerHelper('table', function(items, options){
    return items.map(function(elem, index){
        return options.fn({
          show: elem.description.length !== 0,
          description: elem.description,
          even:(index + 1) % 2 === 0});
    }).join('');
  })

  render();

  function render() {
    renderJsonPosts();
    renderTablePosts();
  }

  function renderJsonPosts() {
    var html = jsonTemplate(posts);
    $('#posts-json').html(html);
  }

  function renderTablePosts() {
    var html = tableTemplate(posts);
    $('#posts-table').html(html);
  }
});
