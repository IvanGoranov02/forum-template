import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostItem from '../components/PostItem';

function Home({ defaultPosts }) {
  const [posts, setPosts] = useState(defaultPosts);
  const [loading, setLoading] = useState(false);

  // Ако искаш да рефрешваш постовете от клиента:
  // useEffect(() => {
  //   setLoading(true);
  //   fetch('/api/posts')
  //     .then(res => res.json())
  //     .then(data => setPosts(data.posts))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <>
      <Head>
        <title>Forum</title>
      </Head>
      <Header />
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Posts</h1>
            <Link href="/create" className="btn-sm py-1.5 btn-brand">Create Post</Link>
          </div>
          {loading ? <div>Loading...</div> : (
            <div>
              {posts && posts.length > 0 ? posts.map(post => (
                <PostItem post={post} key={post.id} />
              )) : <div>No posts yet.</div>}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch('https://6828704d6b7628c529135538.mockapi.io/forum/posts');
  const data = await res.json();
  return { defaultPosts: data };
};

export default Home;
