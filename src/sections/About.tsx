import React from 'react';
import { Fade } from 'react-awesome-reveal';
import ReactMarkdown from 'react-markdown';
import { Box, Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import markdownRenderer from '../components/MarkdownRenderer';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { useAboutMeQuery } from '../queries/useAboutMeQuery';

const About = () => {
  const { markdown, profile } = useAboutMeQuery();

  return (
    <Section.Container id="about" Background={Background}>
      <Section.Header name="About me" icon="🙋‍♂️" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown source={markdown} renderers={markdownRenderer} />
          </Fade>
        </Box>

        <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: '300px', margin: 'auto' }}
        >
          <Fade direction="right" triggerOnce>
            <ProfilePicture
              mt={[4, 4, 0]}
              ml={[0, 0, 1]}
              src={require('../../media/tough_mudder.png')}
              alt="About Me Photo"
            />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.4s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const Background = () => (
  <>
    <Triangle
      color="secondary"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </>
);

export default About;
