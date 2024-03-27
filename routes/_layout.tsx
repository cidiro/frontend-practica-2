import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div class="layout">
      <div class="header">
        <a href="/">Home</a>
        <a href="/search">Search</a>
        <a href="/new">New Hero</a>
      </div>
      <h1>Hero DB</h1>
      <Component />
    </div>
  );
}