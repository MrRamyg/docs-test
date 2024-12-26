import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Web Development Expertise',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // Placeholder image
    description: (
      <>
        At NexAris Digital Systems, we specialize in custom web development services. From modern websites to scalable web applications, we focus on building solutions that meet your business needs with speed and precision.
      </>
    ),
  },
  {
    title: 'Discord Bot Solutions',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Placeholder image
    description: (
      <>
        We offer tailored Discord bot development, designed to automate tasks, enhance community engagement, and integrate with your server's unique needs.
      </>
    ),
  },
  {
    title: 'Roblox Game Development',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, // Placeholder image
    description: (
      <>
        NexAris Digital Systems brings your Roblox game ideas to life! Whether it's scripting, building, or custom game features, our developers craft immersive experiences.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
