import renderer from "react-test-renderer";
import Avatar from ".";

it("changes the class when hovered", () => {
  const component = renderer.create(<Avatar />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const 

  // manually trigger the callback
  // renderer.act(() => {
  //   tree.props.onMouseEnter();
  // });
  // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // manually trigger the callback
  // renderer.act(() => {
  //   tree.props.onMouseLeave();
  // });
  // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
