import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ProjectList } from 'nexus-ui';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJnVmFhcUdXMkhjNXljV2xMX04wMWxGN1ZpTThDaDhyRDhUVFdyV2lMbHNJIn0.eyJqdGkiOiIxOGY1MGY3MS0wNTcwLTQwNjYtYTE2My1lMDdmYTU5OTU2YjIiLCJleHAiOjE1NTQ5MjAxNjMsIm5iZiI6MCwiaWF0IjoxNTU0ODg0MTYzLCJpc3MiOiJodHRwczovL2JicC5lcGZsLmNoL25leHVzL2F1dGgvcmVhbG1zL2dpdGh1Yi1kZXYiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMGZhNmFjMDMtNDE2OS00YjE3LTk5ZjEtNTkxZTk3NjMzOWNhIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibmV4dXMtd2ViIiwibm9uY2UiOiI0OTc1YjZmYzk0MDU0YTg1OWZiMjllNjU4MzgyNzQ0NSIsImF1dGhfdGltZSI6MTU1NDQ1NzA5OSwic2Vzc2lvbl9zdGF0ZSI6ImYyM2ZjOGQ5LWVmMDYtNDRlMC05N2YxLTVkODgxZmRhODM0NSIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDAwIiwiaHR0cDovL2Rldi5uZXh1cy5vY3AuYmJwLmVwZmwuY2giLCJodHRwczovL2JicC1uZXh1cy5lcGZsLmNoIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsInN1YiI6Imp1bGllbm1hY2hvbiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6Ikp1bGllbiBNYWNob24iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqdWxpZW5tYWNob24iLCJnaXZlbl9uYW1lIjoiSnVsaWVuIiwiZmFtaWx5X25hbWUiOiJNYWNob24iLCJlbWFpbCI6Imp1bGllbm1hY2hvbkBnbWFpbC5jb20ifQ.Sk2IfPQCWSsKwhgTMb6DbRupF48r_YfgqXJdTSfkszfL1iGbH_11AKj5w5R2fHdtZIDn5yE-mEz8gAOuRaMnmd0aOHYOdHLJR6fAR6AJSZyvLrOXqgLwQBjH7Dc3WIj6LSgl-Fwd5_zVsvSAE4qWY9puMWTrlNVUH0qZNglm2Fh2T-V67cvMlRwQqHRXv3u4naK7sOXOAVydsWtPY7_KEO4mj0QIY1NU9P_Ww_mymt-RXU16hvI5Htcl5NhmNhZQC6ZR6T4LjP9t1iNF1usreF9SwyKX9ZkJHikpHAc2Gu6P5WnuAi7gYJPWNfQDNhw8LW1HsNKBPZHN1aBeP3IAEw',
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ProjectList orgLabel="00snbnkli11knwj" />
    </div>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));