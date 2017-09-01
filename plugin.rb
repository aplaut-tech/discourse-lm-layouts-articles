# name: lm-layouts-articles
# about: Adds articles to sidebar (requires layouts plugin)
# version: 0.0.1
# authors: Shoppilot team

enabled_site_setting :lm_layouts_articles_data
enabled_site_setting :lm_layouts_articles_count

register_asset 'stylesheets/lm-layouts-articles.scss'
register_asset 'images/lm-layouts-articles-heading-icon.png'

after_initialize do
  DiscourseLayouts::WidgetHelper.add_widget('lm-layouts-articles')
end
