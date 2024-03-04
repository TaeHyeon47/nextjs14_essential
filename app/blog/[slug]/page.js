// NextJS에서는 Page 컴포넌트에 params라는 특별한 props를 제공한다.
// params props는 [slug]의 값을 제공해준다.
export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
