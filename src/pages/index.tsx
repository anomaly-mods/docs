import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import MDXContent from '@theme/MDXContent';


import styles from './index.module.scss';
import MDXComponents from '../theme/MDXComponents';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={`hero__title ${styles.hero__title}`}>{siteConfig.title}</h1>
        <p className={`hero__subtitle ${styles.hero__subtitle}`}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Anomaly Mods`}
      description="Mod Anomaly.">
      <HomepageHeader />
    </Layout>
  );
}
