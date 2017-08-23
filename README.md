# materialize-jekyll

![Materialize meets Jekyll](http://res.cloudinary.com/victorpre/image/upload/v1503466230/Gem%20materialize-jekyll/materialize-jekyll.png)

Welcome to your materialize-jekyll theme! In this repo, you'll find the files you need to use [Materializecss](http://materializecss.com/) in your [Jekyll page](https://jekyllrb.com/). Put your layouts in `_layouts`, your includes in `_includes` and your sass in `_sass`. To experiment with this code, add some sample content and run `bundle exec jekyll serve` – this directory is setup just like a Jekyll site!

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "materialize-jekyll"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: materialize-jekyll
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install materialize-jekyll

## Usage

Open `_config.yml` file and edit it adding your personal information to it.

### Project tree:
```
materialize-jekyll    
│
├─── _includes   
|      ├─── author.html
|      ├─── comments.html
|      ├─── date.html
|      ├─── footer.html
|      ├─── header.html
|      ├─── navbar.html
│      └─── share.html
├─── _layouts
│      ├─── compress.html
│      ├─── default.html
│      ├─── page.html
│      └─── post.html
├─── _posts
│
├─── _sass
│      ├─── _author.scss
│      ├─── _cards.scss
│      ├─── _navbar.scss
│      ├─── _post.scss
│      ├─── _syntax.scss
│      └─── _tags.html
└─── assets
     │
     └─── css
     │    └─── main.scss
     └─── img
     │    └─── icons
     └─── js
          ├─── init.js
          └─── vendor
```

This gem offers two main layouts that you can use/edit:
- `_layouts/default` used in the `index.html` page (your blog homepage)
- `_layouts/post` which is the blog post itself

Inside the `_includes/` directory there are some partials that are/can be used inside your layouts and pages. By default the  `_includes/share.html`, `_includes/author.html`, `_includes/comments.html` are only being used inside the post layout, while the others are shared between both pages.

The CSS of this gem can be edited both in `_sass/` and in `assets/css/main.scss`

Your blog posts should be put in the `_posts` directory.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/victorpre/materialize-jekyll. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

