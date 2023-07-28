// ! JSX Introduction
function JSXIntro() {
  // JavaScript outside the return value is interpreted by JSX
  const name = "John";
  const isMale = false;

  function getGreeting(user) {
    if (user) {
      return <h1>Hello {user}, </h1>
    } else {
      return <h1>Hello Guest</h1>
    }
  }

  return (
    // *className adds a class to component instead of "class" b/c class is reserved class based components
    <div className="app">
      {/* the browser interprets the Javascript above intos the JSX in the following examples (try inspecting element) */}
      {getGreeting(name)}
      <h2>You are a {isMale? "male" : "female"}.</h2>
      {/* conditions in JSX are only inline (ternary operators etc...) */}
    </div>
  );
}

export default JSXIntro;

