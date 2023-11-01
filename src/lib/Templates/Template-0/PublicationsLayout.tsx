import React from "react";
import "./styles.css";
import ArticleList from "../../CardList/CardList";
import Header from "../../Article/Header/Header";
import CardList from "../../CardList/CardList";
import { CardListProps } from "./types";
import { v4 } from "uuid";

type PublicationsLayoutProps = {
  title?: string;
  description?: string;
  sections: CardListProps[];
};

const Layout = ({
  title = "Our Publications",
  description = "Sub-heading for the all publications page describing what everything is",
  sections = [],
}: PublicationsLayoutProps) => {
  return (
    <section className="publications template-0">
      <Header title="Our Publications" description="Sub-heading for the all publications page describing what everything is" />
      <section className="publication-lists-container">
        {sections.map((section) => (
          <CardList key={v4()} title={section.title} articles={section.articles} variant={section.variant} />
        ))}
      </section>
    </section>
  );
};

export default Layout;
