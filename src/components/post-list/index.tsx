import Talk from "components/talk";
import { Container } from "./styled-components";

const PostList = () => (
  <Container>
    <Talk
      title="#10 Meetup Porto.Vue - The Monorepo Ecosystem"
      link="https://youtu.be/jsewro6osyM"
      slides="https://bguedes-moz.github.io/the-monorepo-ecosystem/"
      date="Sept, 2021"
    />
    <Talk
      title="#5 Meetup Porto.Vue - Micro Frontends & Lego like Architectures"
      link="https://youtu.be/e1-rr969y4U"
      date="June, 2020"
    />
  </Container>
);

export default PostList;