import withSideEffect from 'react-side-effect';

const Script = (props: IScript): null => null;

const reducePropsToState = (propsList: IScript[]) => {
  const scripts: string[] = [];
  propsList.forEach((props: IScript) => {
    if (props.children) {
      scripts.push(`<script>${props.children}</script>`);
    } else {
      scripts.push(`<script src="/static/${props.src}.js"></script>`);
    }
  });
  return scripts.join('');
};

export default withSideEffect(reducePropsToState, () => {
  return;
})(Script);

interface IScript {
  src?: string;
  children?: string;
}
