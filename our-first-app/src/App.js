// import JSXIntro from './components/JSXIntro';
// import BEM from './components/BEM';
// import UseStateExample from './components/UseStateExample';
// import ClassComponentExample from './components/ClassComponentExample';
// import PropsExample from './components/PropsExample';
// import styles from './App.module.css';
// // In the code below, we have the same className error but since it's in a different module, the style from this sheet is not the same
import InputForm from './components/InputForm';
// import UseEffectHook from './components/UseEffectHook';

function App() {
  return (
    <div>
      {/* <JSXIntro /> */}
      {/* <BEM /> */}
      {/* <UseStateExample /> */}
      {/* <ClassComponentExample /> */}
      {/* <PropsExample /> */}
      {/* <h1>This following H2 tag is an example of CSS Modules.</h1>
      <h2 className={styles.error}>This is an error</h2>
      <h3 className={styles.variable__error}>This is an example a CSS Variable located in index.css</h3> */}
      <InputForm />
      {/* <UseEffectHook /> */}
    </div>
  );
}

export default App;
