// App imports - my tiny framework specifics to make it all work
import { router } from './router.js'

// pages
import HomePage from './pages/HomePage.js'
import ProfilePage from './pages/ProfilePage.js'

function App() {
  const state = {
    data: [
      {
        title: 'Night Nurse',
        artist: 'Gregory Issacs',
        album: '2011',
        length: 4.09
      },
      {
        title: 'Drive',
        artist: 'The Cars',
        album: 'Complete Greatest Hits',
        length: 3.57
      },
      {
        title: 'Hungry for the power',
        artist: 'Jamie Jones',
        album: '2011',
        length: 3.57
      }
    ],
    user: {
      firstname: 'Sean',
      lastname: 'Knowles',
      email: 's@seanknowles.dev'
    },
    artist: []
  }

  const routes = [
    { path: '/', component: HomePage },
    { path: '/profile', component: ProfilePage }
  ]

  window.onload = function () {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'c953e1bf69mshe39577c61efbc7bp1a1329jsn3c7c327dd883',
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    })
      .then((resp) => resp.json())
      .then((body) => {
        state.artist = body.data
        console.log('State_artist: ', state.artist)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  router(routes, state)
}

App()
