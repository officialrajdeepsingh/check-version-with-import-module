import { version } from "react";

if (version) {
  // When import with condtion always use async and wait in js other you face error.
  import("./styles.css");
} else {
  // import other package
  console.log(version);
}

export default function App() {
  return (
    <>
      <div className="App">
        <h1>React version: {version} </h1>
      </div>
      <div className="version">
        <p> React js version: {version === "17.0.2" ? "+ 17" : "16"}</p>
      </div>
    </>
  );
}
