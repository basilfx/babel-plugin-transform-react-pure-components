export default class Foo extends React.Component {
  static propTypes = {
    foo: React.PropTypes.string.isRequired
  };
  static defaultProps = {
  };

  render() {
    this.props.foo;
    return <div />;
  }
}
