/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector('#searchbar > input')
const searchButton = document.querySelector('#searchbar > button')

const lookup = {
  '/': '/',
  deepl: 'https://deepl.com/',
  reddit: 'https://reddit.com/',
  maps: 'https://maps.google.com/',
}
const engine = 'google'
const engineUrls = {
  deepl: 'https://www.deepl.com/translator#-/-/',
  duckduckgo: 'https://duckduckgo.com/?q=',
  ecosia: 'https://www.ecosia.org/search?q=',
  google: 'https://www.google.com/search?q=',
  startpage: 'https://www.startpage.com/search?q=',
  youtube: 'https://www.youtube.com/results?q=',
}

const isWebUrl = (value) => {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

const getTargetUrl = (value) => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, '_self')
}

searchInput.onkeyup = (event) => event.key === 'Enter' && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [
  {
    id: 'ozDofZLmJM6PZym5',
    label: 'Media',
    bookmarks: [
      {
        id: 'vPKPk8He3LkXDIB6',
        label: '󰗃 youtube',
        url: 'https://www.youtube.com/?gl=IN',
      },
      {
        id: 'VYGBVRwkYlryZokB',
        label: '󰝚 spotify',
        url: 'https://open.spotify.com/',
      },
      {
        id: 'uAqeeTK5yK6tDkqM',
        label: ' reddit',
        url: 'https://www.reddit.com/',
      },
    ],
  },
  {
    id: 'FTuNbxq5DmaAbKHU',
    label: 'Work',
    bookmarks: [
      {
        id: 'RueXkH20Lwk32qFl',
        label: ' github',
        url: 'https://github.com/slyprxme/',
      },
      {
        id: 'Rno9PkhnDyKZWSj0',
        label: '󱉟 bookshelf',
        url: 'https://play.google.com/books',
      },
      {
        id: '9nNEoGPDe3fablbK',
        label: ' email',
        url: 'https://mail.google.com/mail/u/0/#inbox/',
      },
    ],
  },
  {
    id: '8C1ek7f8yRsAr182',
    label: 'CS',
    bookmarks: [
      {
        id: 'q1Nmy5tyjX3B2ycn',
        label: '󱚞 stanford- ML',
        url: 'https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU',
      },
      {
        id: 'LAPBG1KFHC2GjnH4',
        label: ' projects',
        url: 'https://github.com/practical-tutorials/project-based-learning#python',
      },
    ],
  },
]

const createGroupContainer = () => {
  const container = document.createElement('div')
  container.className = 'bookmark-group'
  return container
}

const createGroupTitle = (title) => {
  const h2 = document.createElement('h2')
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = (bookmarks) => {
  const ul = document.createElement('ul')
  bookmarks.map(createBookmark).forEach((li) => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById('bookmarks')
  bookmarksContainer.append()
  bookmarks
    .map(createGroup)
    .forEach((group) => bookmarksContainer.append(group))
}

injectBookmarks()
