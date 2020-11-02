import withSideEffect from 'react-side-effect';

const Style = (props: IStyle): null => null;

const reducePropsToState = (propsList: IStyle[]) => {
  const styles: string[] = [];
  propsList.forEach((props: IStyle) => {
    styles.push(`<link rel="stylesheet" type="text/css" href="/static/${props.src}.css">`);
  });
  return styles.join('');
};

export default withSideEffect(reducePropsToState, () => {
  return;
})(Style);

interface IStyle {
  src: string;
}
