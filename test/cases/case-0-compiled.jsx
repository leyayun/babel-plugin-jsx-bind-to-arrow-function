class Fake extends Component {
  constructor() {
    this.a = 1;
  }
  finish() {}
  render() {
    return <div onClick={(...args) => this.finish(this.a, ...args)}>haha</div>;
  }
}