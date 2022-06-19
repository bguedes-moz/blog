import { Container, TalkLink, TalkSlides, DateArea } from "./styled-components";

interface TalkProps {
  title: string,
  link: string,
  slides?: string,
  date: string
}

const Talk = (props: TalkProps) => (
  <Container>
    <TalkLink href={props.link} rel="noreferrer">
      {props.title}
    </TalkLink>
    {props.slides && <TalkSlides href={props.slides} target="_blank" rel="noreferrer">Slides</TalkSlides>}
    <DateArea>{props.date}</DateArea>
  </Container>
);

export default Talk;