import "./styles.css";

export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "About Doable",
    description: "Doable is a news platform for B2B thought leadership, trends, and insights across every industry. We offer stories from the top minds in technology, wellness, finance, and beyond.",
    alternates: {
      canonical: `https://${params.domain}/about`,
    },
    openGraph: {
      type: "website",
      url: `https://${params.domain}/about`,
      siteName: "Doable | News + Thought Leadership",
      title: "About Doable",
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

export default function About() {
  return (
    <main className="page-main">
      <section className="page-header-outer">
        <header>
          <div className="inner page-header-inner">
            <div className="page-header-inner-wrapper">
              <h1 className="page-header-title">What is Doable?</h1>
            </div>
          </div>
        </header>
      </section>
      <section className="page-body-outer">
        <div className="inner">
          <div className="page-inner">
            <p>
              Doable is a news publication platform designed to elevate thought leaders across nearly every industry. We publish the latest breaking news in Technology,
              AI, Health and Wellness, Finance and Economy, Customer Experience, People Managaement, and more.
            </p>
            <br></br>
            <p>
              But Doable is far from just another digital news site. We turn content into conversations and enable B2B companies to speak their customers' language and elevate prospects and internal voices to own the conversation around topics that matter.
            </p>
            <br></br>
            <p>
  Want to contribute or be interviewed? Email us today at <a className="body-links" href="mailto:hello@doablehq.com">hello@doablehq.com</a>
</p>

          </div>
        </div>
      </section>
    </main>
  );
}
