import app, {Component} from 'apprun';

export default class HomeComponent extends Component {
  state = 'Home';

  view = (state) => {
    return <div>
      <h1>Home - Server Stats</h1>
      <div>{state}</div>
    </div>
  }

  update = {
    '#Home': state => state,
    '//ws:': (state, data) => data
  }
}

