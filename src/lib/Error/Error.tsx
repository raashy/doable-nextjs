import "./styles.css";

export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
   title: "Doable | News + Thought Leadership",
   description: "Doable is a news platform for thought leadership, trends, and industry insights. We offer stories from top minds in technology, wellness, finance, and beyond.",
   openGraph: {
      type: "website",
      url: `https://${params.domain}`,
      siteName: "Doable News | Insights Amplified",
      title: "Doable News | Insights Amplified",
      images: ["https://default-doable.b-cdn.net/live-site-images/doable-og-image.png"],
      locale: "en_US",
      description: "Doable is a news platform for thought leadership, trends, and industry insights. We offer stories from top minds in technology, wellness, finance, and beyond.",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@doablehq',
    }
  };
}

const ErrorComponent = () => {
  return (
    <main>
      <div className="prose lg:prose-xl">
        <main className="page-main">
          <section className="page-header-outer">
            <header>
              <div className="inner page-header-inner">
                <div className="page-header-inner-wrapper">
                  <h1 className="page-header-title">404 Page Not Found</h1>
                  <p className="page-header-description blockquote">The page you are looking for does not exist!</p>
                </div>
              </div>
            </header>
          </section>
        </main>
      </div>
    </main>
  );
};

export default ErrorComponent;
