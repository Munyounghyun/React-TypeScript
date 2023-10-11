import { Title } from "../components";

export default function ViewportTest() {
  //w-screen, h-screen : 단위 vh
  //w-full, h-full : 단위 %
  return (
    <section className="w-screen h-screen mt-4 bg-indigo-900">
      <Title className="text-white">ViewportTest</Title>
    </section>
  );
}
