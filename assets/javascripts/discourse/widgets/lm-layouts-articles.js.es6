import {createWidget} from 'discourse/widgets/widget';
import {h} from 'virtual-dom';


var ARTICLES;

export default createWidget('lm-layouts-articles', {
  tagName: '.lm-layouts-articles',

  _getArticles () {
    if (ARTICLES) {
      return ARTICLES;
    } else {
      return ARTICLES = JSON.parse(this.siteSettings.lm_layouts_articles_data)
        .sort(() => Math.random() > Math.random())
        .slice(0, this.siteSettings.lm_layouts_articles_count);
    }
  },

  html () {
    const articles = this._getArticles();

    return [
      h('.lm-layouts-articles-heading', 'Полезные статьи'),
      h('.lm-layouts-articles-list', articles.map((article) => {
        return h('.lm-layouts-articles-list-item', [
          h('a.lm-layouts-articles-link', {src: article.url, target: '_blank', title: article.title}, article.title)
        ]);
      }))
    ];
  }
});
