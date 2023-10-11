import { Div, Title, Avatar } from "../components";
import * as D from "../data";

export default function AvatarTest() {
  //-ml-6 때문에 겹쳐보임
  const avatars = D.range(0, 10).map((index) => (
    <Avatar
      className="inline-block -ml-6 border-4 border-white"
      key={index}
      src={D.randomAvatar()}
    />
  ));
  return (
    <section className="mt-4">
      <Title>AvatarTest</Title>
      <Div className="box-border px-12 py-4 m-8 bg-blue-300">{avatars}</Div>
    </section>
  );
}
