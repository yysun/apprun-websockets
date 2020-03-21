import { app, Component, on} from 'apprun';

export default class HomeComponent extends Component {
  state = 0;

  view = state => {
    return <div>
      <div>Run the counter on server through web sockets</div>
      <h1>{state}</h1>
      <div>
        <button $onclick={['//ws:', '@add', state, -1]}>-1</button>
        <button $onclick={['//ws:', '@add', state, +1]}>+1</button>
      </div>
    </div>
  }


  @on('@add') add = (_, state) => state

}

