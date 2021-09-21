import React from 'react';
import clsx from 'clsx';
import styles from '/src/components/DomainFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Research Group Leader',
    Svg: require('/img/pi.svg').default,
    link: '/docs/role/research_group_leader/',
  },
  {
    title: 'Research Group Member',
    Svg: require('/img/researcher.svg').default,
    link: '/docs/role/research_group_member/',
  },
  {
    title: 'Student',
    Svg: require('/img/stud.svg').default,
    link: '/docs/role/student/',
  },
  {
    title: 'Data Steward',
    Svg: require('/img/datastew.svg').default,
    link: '/docs/role/data_steward/',
  },
  {
    title: 'Service Administrator',
    Svg: require('/img/service.svg').default,
    link: '/docs/role/service_administrator/',
  },
];

function Feature({ Svg, title, link }) {
    return (
      <div className='col-sm' style={{
        width: 260,
        padding: 8,
        //backgroundColor: 'red',
      }}>
        <div className='text--center'>
          <Link to={link}><Svg className={styles.featureSvg} alt={title} /></Link>
        </div>
        <div className='text--center'>
          {link ? (
            <Link
              className={clsx('button button--secondary button--md')}
              // ? <Link className={clsx('')}
              to={link}>
              {title}
            </Link>
          ) : (
            <p>{title}</p>
          )}
        </div>
      </div>
    );
  }

export default function RoleFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}