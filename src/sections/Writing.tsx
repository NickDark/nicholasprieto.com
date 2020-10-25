import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { CardContainer } from '../components/Card';
import { Post } from '../components/Post';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { useMediumQuery } from '../queries/useMediumQuery';

const Writing = () => {
  const { posts } = useMediumQuery();

  return (
    <Section.Container id="writing" Background={Background}>
      <Section.Header name="Articles" icon="✍️" label="writing" />
      <CardContainer minWidth="300px">
        <Fade direction="down" triggerOnce cascade damping={0.5}>
          {posts.map((p) => (
            <Post {...p} key={p.url} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      position="top-left"
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default Writing;
