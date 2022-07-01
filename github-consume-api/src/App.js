import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import { ResetCSS } from "./components/global/resetCSS";
import Repositories from "./components/repositories";
import GithubProvider from "./providers/github-provider";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <main>
      <GithubProvider />
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories />
        <div>Stars</div>
      </Layout>
    </main>

  );
}

export default App;
