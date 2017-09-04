import {createWidget} from 'discourse/widgets/widget';
import {h} from 'virtual-dom';


const arrayShuffle = function (a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}


var ARTICLES;

export default createWidget('lm-layouts-articles', {
  tagName: '.lm-layouts-articles',

  _getArticles () {
    if (ARTICLES) {
      return ARTICLES;
    } else {
      const articles = JSON.parse(this.siteSettings.lm_layouts_articles_data)
        .slice(0, this.siteSettings.lm_layouts_articles_count);
      return ARTICLES = arrayShuffle(articles);
    }
  },

  html () {
    const articles = this._getArticles();

    return [
      h('.lm-layouts-articles-heading', 'Полезные статьи'),
      h('.lm-layouts-articles-list', articles.map((article) => {
        return h('.lm-layouts-articles-list-item', [
          h('a.lm-layouts-articles-link', {
            href: article.url, target: '_blank',
            title: article.title
          }, article.title)
        ]);
      }))
    ];
  }
});
