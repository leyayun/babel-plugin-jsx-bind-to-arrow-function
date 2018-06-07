class Fake extends Component {
  constructor() {
    this.a = 1;
  }
  finish() {}
  render() {
  	return (<div onClick={this.finish.bind(this, this.a)}>haha</div>)
  }
}
