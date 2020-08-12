/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const axios = require('axios')

const HomeTemplate = path.resolve('./src/templates/HomePage.tsx')
const AuthorTemplate = path.resolve('./src/templates/Author.tsx')
const ArticleTemplate = path.resolve('./src/templates/Article.tsx')
const SectionTemplate = path.resolve('./src/templates/Section.tsx')
const {
  CENTERPIECE_API,
  TOP_ARTICLES_API,
  MOST_READ_DP_API,
  MOST_READ_UTB_API,
  MOST_READ_34_API,
  SECTION_API,
  STAFF_API
} = require('./src/constants/api.js')

const {
  AboutLinks,
  NewsLinks,
  SportsLinks,
  OpinionLinks
} = require('./constants.js')

const createHomePage = async createPage => {
  const resp = await axios.get(CENTERPIECE_API)
  const topResp = await axios.get(TOP_ARTICLES_API)
  const mostReadDPResp = await axios.get(MOST_READ_DP_API)
  const most34Resp = await axios.get(MOST_READ_34_API)
  const mostUTBResp = await axios.get(MOST_READ_UTB_API)

  const { articles } = resp.data
  const { articles: topArticles } = topResp.data

  createPage({
    path: '/',
    component: HomeTemplate,
    context: {
      centerpiece: articles[0],
      topArticles: topArticles.slice(0, 3),
      mostReadDP: mostReadDPResp.data.result.slice(0, 5),
      mostRead34: most34Resp.data.result.slice(0, 3),
      mostReadUTB: mostUTBResp.data.result.slice(0, 3),
    },
  })
}


const generateSlug = (slug, created_at) => {
  const firstIndex = created_at.indexOf('-')
  const year = created_at.substring(0, firstIndex)
  const month = created_at.substring(
    firstIndex + 1,
    created_at.indexOf('-', firstIndex + 1)
  )
  return `${year}/${month}/${slug}`
}

const createArticles = async createPage => {
  const newsResp = await axios.get(SECTION_API('/section/news'))
  const mostReadDPResp = await axios.get(MOST_READ_DP_API)

  newsResp.data.articles.forEach(article => {
    const { authors, created_at, slug } = article
    authors.forEach(
      async author => await createAuthors(createPage, author.slug)
    )
    createPage({
      path: `/article/${generateSlug(slug, created_at)}`,
      component: ArticleTemplate,
      context: {
        article,
        mostReadDP: mostReadDPResp.data.result.slice(0, 5),
      },
    })
  })
}

const createAuthors = async (createPage, slug) => {
  const resp = await axios.get(STAFF_API(slug))
  const mostReadDPResp = await axios.get(MOST_READ_DP_API)

  const { author, articles } = resp.data
  let filteredArticles = []
  if (articles) {
    filteredArticles = articles.map(article => {
      delete article.content
      return article
    })
  }

  createPage({
    path: `staff/${slug}`,
    component: AuthorTemplate,
    context: {
      filteredArticles,
      author,
      mostReadDP: mostReadDPResp.data.result.slice(0, 5),
    },
  })
}

const createSection = (linksArray, createPage) => (
  linksArray.map(async ({ section, slug }) => {
    const mostReadDPResp = await axios.get(MOST_READ_DP_API)
    const { data : { result } } = mostReadDPResp
    if (!slug.includes('https')) {
      const sectionResp = await axios.get(SECTION_API(slug))
      const { articles = [] } = sectionResp.data

      const filteredArticles = articles.map(article => {
        delete article.content
        return article
      })
      
      createPage({
        path: slug,
        component: SectionTemplate,
        context: {
          filteredArticles,
          section: section,
          mostReadDP: result.slice(0, 5),
        }
      })
    }
  })
)

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { createNode } = actions
  for (let i = 1; i <= 10; i++) {
    newsResponse = await axios.get(`https://www.thedp.com/section/news.json?page=${i}&per_page=20`)
    const { articles } = newsResponse.data
    articles.forEach(article => {
      createNode({
        ...article,
        id: article.uuid,
        parent: null,
        children: [],
        internal: {
          type: 'article',
          content: JSON.stringify(article),
          contentDigest: createContentDigest(article)
        }
      })
    })
  }

  return
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allArticle {
        edges {
          node {
            abstract
            authors {
              name
            }
            dominantMedia {
              attachment_uuid
              created_at
              extension
              content
            }
            headline
            content
            slug
            created_at
            uuid
          }
        }
      }
    }
  `)

  result.data.allArticle.edges.forEach(({ node }) => {
    createPage({
      path: `/article/${generateSlug(node.slug, node.created_at)}`,
      component: ArticleTemplate,
      context: {
        uuid: node.uuid
        // mostReadDP: mostReadDPResp.data.result.slice(0, 5),
      }
    })
  })
}
