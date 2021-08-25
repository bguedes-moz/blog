import { Container, TalkLink, DateArea } from "./styled-components";

interface TalkProps {
  title: string,
  link: string,
  date: string
}

const Talk = (props: TalkProps) => (
  <Container>
    <TalkLink href={props.link} target="_blank" rel="noreferrer">
      {props.title}
    </TalkLink>
    <DateArea>{props.date}</DateArea>
  </Container>
);

export default Talk;